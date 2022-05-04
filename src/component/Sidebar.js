
import { Link, useNavigate } from "react-router-dom"
import '../css/Sidebar.css'
import { useEffect, useState } from 'react'
import User from '../pages/navbar/User'
import Cookies from "universal-cookie"

const sideBarItems = [
  { title: 'My Article', iconUrl:require('../img/icons8-article-64 (2).png'), isSelected: true },
  { title: 'Add Article', iconUrl:require('../img/icons8-article-64 (1).png'), isSelected: false },
  { title: 'Edit User', iconUrl:require('../img/icons8-edit-64.png'), isSelected: false },
  { title: 'Exit', iconUrl:require('../img/icons8-exit-64.png'), isSelected: false },
]

const Sidebar = (props) =>{
	const[isOpen,setIsOpen]=useState(false)
	const[list,setList]=useState([...sideBarItems])
	const[user,setUser] = useState({})
	const cookies = new Cookies
	const navigate = useNavigate()


	const getUserInfo = (userInfo) =>{
		setUser(userInfo)
	}
 
	useEffect(()=>{
	 User(cookies.get('token'),getUserInfo)
	},[])
 
	return(
		<>
		<div className='main-sidebar'
			onClick={()=>setIsOpen(!isOpen)}>
			<div className="profileContainer-Dashboard" >
				<div onClick={()=>navigate('/DashBoard/2')} className="profileIcon"><img src={user.imgurl}/></div>
				<div >
					<span>{`Hi ${user.name} !`}</span>
				</div>
			</div>
			<div className="outletBox-Sidebar">
				{
					list.map((item,i)=>{
						return(
							<Link to={i===3 ?'/' : i===0 ? '/DashBoard' :`/DashBoard/${i}`}>
								<div className={item.isSelected? "itemBox-Dashboard open" : "itemBox-Dashboard"}
								onClick={()=>{
                 const newarr = [...list]
								 newarr.map(item=>{
									 item.isSelected = false
								 })
								 newarr[i].isSelected = !newarr[i].isSelected
								 setList([...newarr])
								//  if (i===3) {
								// 	 navigate('/')
								//  }
								//  else{navigate(`/DashBoard/${i}`)}
								}}
							>
							<span className="title-sidebar">{item.title}</span>
							</div></Link>
						)
					})
				}
			</div>
		</div>
		</>
	)
}

export default(Sidebar)