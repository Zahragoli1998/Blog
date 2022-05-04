import homeIcon from '../../img/icons8-home-64.png'
import { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import '../../css/Navbar.css'
import User from './User'
import Cookies from 'universal-cookie'


const NavbarIsAuth = (props) => {
 const[loginIsOpen,setLoginIsOpen] = useState(false)
 const[user,setUser] = useState({})
 const navigate = useNavigate()
 const cookies = new Cookies

 const getUserInfo = (userInfo) =>{
	 setUser(userInfo)
 }

 useEffect(()=>{
	User(cookies.get('token'),getUserInfo)
},[])


	return (
		<div className="navbar">
			<div className='btnBox-navbarIsAuth'>
				<Link to={'/'}><div className={loginIsOpen? 'IconBox-navbarIsAuth open' : 'IconBox-navbarIsAuth'}
				onMouseEnter={()=>setLoginIsOpen(true)}
				onMouseLeave={()=>setLoginIsOpen(false)}>
					<span>Home</span>
					<img src={homeIcon}/>
				</div></Link>
			</div>
			<div className='sidebar-NanbarIsAuth'>
				</div>
		</div>
	)
}
	export default (NavbarIsAuth)