import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import homeIcon from '../img/icons8-home-30.png'
import tagIcon from '../img/tag (5).png'
import stringIcon from '../img/tag (3).png'

function CustomHTMLElement(props) {
  return <div dangerouslySetInnerHTML={{__html: props.customHtml}} />
}
const ArticleEdit = () => {
	const { id } = useParams()
	const [editArticle, setEditArticle] = useState(false)
	const [editTitleArticle, setEditTitleArticle] = useState(false)
	const [user, setUser] = useState({
		imgurl: '',
		content: '<h2>hiiiiiiiii</h2>',
		creator: {
			imgurl: '',
			username: 'ali'
		}
	})

	useEffect(() => {
		console.log(id, '<<<<<<<id');
		fetch(`http://localhost:4000/blog/${id}`)
			.then(res => res.json())
			.then(data => setUser({ ...data }))
	}, [])

	return (
		<div className="main-Assay">
			<div className="container-Assay">
				<div className="profile-Assay">
					<div className="imgpProfile-Assay">
						<img src={user.imgurl} />
						{
							editTitleArticle ?
								<span><input defaultValue={user.title} style={{ width: `${(user.title.length+1) * 15}px` }} /></span>
								:
								<span onClick={() => setEditTitleArticle(true)}>{user.title}</span>
						}
					</div>
				</div>
				<div className="AssayBox">
					{
						editTitleArticle ?
						<CustomHTMLElement
						customHtml={`<input id='test' type='text' placeholder='Enter text'style={{ width: '${(user.title.length) * 14}px' }} value='${user.content}' disabled=${true} />`}
					/>
							:
							<div className="textBox-Assay"  dangerouslySetInnerHTML={{ __html: user.content }} />
					}
				</div>
				<div className="homeIcon-Assay">
					<Link to={'/'}><img src={homeIcon} /></Link>
				</div>
				<div className="tagBox">
					<img className="tagIcon" src={tagIcon} />
					<div className="imgurl-Assay">
						<span>Writer : {user.creator.username}</span>
						<img src={user.creator.imgurl} />
					</div>
				</div>
			</div>

		</div>
	)
}
export default ArticleEdit