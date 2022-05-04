import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import backIcon from '../img/icons8-back-64.png'
import tagIcon from '../img/tag (5).png'
import stringIcon from '../img/tag (3).png'


const Assay = () => {
	const { id } = useParams()
	const [user, setUser] = useState({
		imgurl: '',
		content: '<h2>hiiiiiiiii</h2>',
		creator: {
			imgurl: '',
			username: 'ali'
		}

	})
	console.log(id, '<<<<<<<id');

	useEffect(() => {
		console.log(id, '<<<<<<<id');
		fetch(`http://localhost:4000/blog/${id}`)
			.then(res => res.json())
			.then(data => setUser({ ...data }))
	}, [])
	console.log('id>>>', user);
	return (
		<div className="main-Assay">
			<div className="container-Assay">
				<div className="profile-Assay">
					<div className="imgpProfile-Assay">
						<img src={user.imgurl} />
						<span>{user.title}</span>
					</div>
				</div>
				<div className="AssayBox">
					{/* <h3 style={{marginLeft:'3%',marginTop:'3%'}}>{user.title}</h3> */}
					<div className="textBox-Assay" dangerouslySetInnerHTML={{ __html: user.content }} />
				</div>
				<div className="homeIcon-Assay">
					<Link to={'/dashboard'}><img src={backIcon} /></Link>
				</div>
				<div className="tagBox">
					<img className="tagIcon" src={tagIcon}/>
					<div className="imgurl-Assay">
						<span>Writer : {user.creator.username}</span>
						<img src={user.creator.imgurl} />
					</div>
				</div>
			</div>

		</div>
	)
}
export default Assay