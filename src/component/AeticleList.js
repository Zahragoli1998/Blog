import Article from "./Article"
import '../css/Article.css'
import { useEffect, useState } from "react"
import Cookies from "universal-cookie"

const ArticleList = () =>{
  const[articleList,setArticleList]=useState([])
	const cookies = new Cookies

  useEffect(()=>{
		fetch('http://localhost:4000/blog/')
		.then(res => res.json())
		.then(data => setArticleList(data))
   
		cookies.remove('token')

	},[])
	console.log(articleList);

	return(
		<div>
      <div className="centerLine-ArticleList"></div>
			<div className="list-ArticleList">
				{
					articleList.map((item)=>{
						return <Article key={item._id} articleInfo={item}/>
					})
				}
			</div>
		</div>
	)
}
export default ArticleList