import { useEffect, useState } from 'react'
import tagIcon from '../img/icons8-tag-window-80.png'
import '../css/Archive.css'
import { useNavigate } from 'react-router-dom'
const Archive = () => {
	const list = []

	const [articleList, setArticleList] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		fetch('http://localhost:4000/blog/')
			.then(res => res.json())
			.then(data => setArticleList(data))
	}, [])

	function getFirstLetterFrom(value) {
		const val = String(value.title)
		return val.slice(0, 1).toUpperCase();
	}

	const newList = articleList.map((name, i) => {
		let listItem = list.find((item) => item.letter === getFirstLetterFrom(name));
		if (!listItem) {
			list.push({ "letter": getFirstLetterFrom(name), "names": [name] })
		}
		else {
			listItem.names.push(name)
		}
		
		// console.log('listItem',i,listItem);
		// console.log('list',i,list);
	})

	const sortList = list.sort((a, b) => {
		a = a.letter
		b = b.letter
		return a === b ? 0 : a > b ? 1 : -1
	})

	return (
		<div className='main-Archive'>
			<div className='searchBox-Archive'>
				<label>search </label>
				<input />
			</div>
			{
				list.map((item, i) => {
					return (
						<div key={i} className='container-Archive'>
							<div className='itemBox-Archive'>
								<div className='iconbox-Archive'>
									<img src={tagIcon} />
									<span>{item.letter}</span>
								</div>
								<div className='items-Archive'>
									{
										item.names.map((item, i) => {
											console.log('item>>>>>>>>>>>>>>>>>..',item);
											return (
												<div key={item._id} className='item-Archive'
												  onClick={()=>navigate(`/article/${item._id}`)}>
													<div className='titleBox-Archive'>
														{/* <img src={item.imgurl}/> */}
														<span>{item.title}</span>
													</div>
													<div className='profile-Archive'>
														<div className='imgbox-Archive'>
															<img  src={item.creator.imgurl}/>
															<span>{item.creator.username}</span>
														</div>
														{/* <div><span>{item.content}</span></div> */}
													</div>
												</div>
											)
										})
									}
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}
export default Archive