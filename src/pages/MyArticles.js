import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"

const MyArticles = props =>{
	const [data,setData] = useState([])
	const cookies = new Cookies
	const navigate =useNavigate()

	const getMyArticles = async () => {
		fetch('http://localhost:4000/blog/my-blogs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'auth': `ut ${cookies.get('token')}`
			},
			body: JSON.stringify({})
		})
		.then((res) => res.json())
	  .then(data => setData([...data]))
	}
	useEffect(()=>{
		getMyArticles()
	},[])

	return(
		<div className="container-MyArticle">
			<h1 onClick={()=>getMyArticles()}>MyArticles</h1>
			<div className="itemBOx-MyArticle">
				{

					data.map(item=>{
						return(
						<div key={item._id} className="item-MyArticle" style={{backgroundImage:`url(${item.imgurl})`}}>
							<div onClick={()=>navigate(`editArticle/${item._id}`)} className="gradientBackgroundItem">
             		<h1>{item.title}</h1>
							</div>
						</div>
						)
					})
				}
			</div>
		</div>
	)
}
export default (MyArticles)