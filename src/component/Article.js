import { useNavigate } from "react-router-dom"


const Article = ({articleInfo}) =>{
	const navigate = useNavigate()

	return(
		<div  onClick={()=>navigate(`article/${articleInfo._id}`)} className="item-Article">
			<div className="itembox">
				<div className="img-article">
					<img src={articleInfo.creator.imgurl}/>
					<h3>{articleInfo.creator.username}</h3>
				</div>
				<div className="span-article">
					<span className="title">{articleInfo.title}</span>
				</div>
			</div>
		</div>
	)
}
export default Article