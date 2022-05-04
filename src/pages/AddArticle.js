import '../css/AddArticle.css'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw } from 'draft-js';
import { useEffect, useState } from 'react';
import Cookies from "universal-cookie"





const AddArticle = (props) => {
	const [value, setValue] = useState(EditorState.createEmpty())
	const [title,setTitle] =useState('')
	// console.log(draftToHtml(convertToRaw(value.getCurrentContent())))
	const cookies = new Cookies


	const submitBLog = async () => {
		fetch('http://localhost:4000/blog/write', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
				'auth': `ut ${cookies.get('token')}`
			},
			body: JSON.stringify({
				title: title,
				content: draftToHtml(convertToRaw(value.getCurrentContent())),
				imgurl: 'https://www.destinationsforteens.com/wp-content/uploads/dtr_the-positive-effects-of-exercise-on-your-mental-health-e1496291656337.jpg'
			})
		})
		.then((res) => res.json())
		.then(data => console.log(data))
	}


	return (
		<div className='main-AddArticle'>
			<div className='body-AddArticle'>
				<div className='titleBox'>
					<lable for='title'>title :</lable>
					<input name='title' id='title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
				</div>
				<div className='editor-AddArticle'>
					<Editor
						editorState={value}
						toolbarClassName="toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="editorClassName"
						onEditorStateChange={(e)=>setValue(e)}
					/>
				</div>
				<button className='btn-AddArticle' onClick={()=>{submitBLog()}} >Add</button>
			</div>
		</div>
	)
}

export default  (AddArticle)