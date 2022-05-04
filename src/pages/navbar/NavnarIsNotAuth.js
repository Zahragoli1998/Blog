import Archive from '../../img/archive-icon.png'
import loginIcon from '../../img/icons8-login-64 (2).png'
import singUpIcon from '../../img/icons8-add-user-male-64.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/Navbar.css'


const NavbarIsAuth = () => {
 const[loginIsOpen,setLoginIsOpen] = useState(false)
 const[singUpIsOpen,setSingUpIsOpen] = useState(false)
 const[archiveIsOpen,setArchiveIsOpen] = useState(false)
 const navigate = useNavigate()

	return (
		<div className="navbar">
			<div className='btnBox-navbar'>
				<div className={singUpIsOpen? 'IconBox-navbar open' : 'IconBox-navbar'}
				onMouseEnter={()=>setSingUpIsOpen(true)}
				onMouseLeave={()=>setSingUpIsOpen(false)}
				onClick={()=>navigate('/singup')}
				>
					<span>SingUp</span>
					<img src={singUpIcon}/>
				</div>
				<div className={loginIsOpen? 'IconBox-navbar open' : 'IconBox-navbar'}
				onMouseEnter={()=>setLoginIsOpen(true)}
				onMouseLeave={()=>setLoginIsOpen(false)}
				onClick={()=>navigate('/login')}>
					<span>Login</span>
					<img src={loginIcon}/>
				</div>
			</div>
			<div className={archiveIsOpen? 'ArchiveBox-navbar open' : 'ArchiveBox-navbar'}
				onMouseEnter={()=>setArchiveIsOpen(true)}
				onMouseLeave={()=>setArchiveIsOpen(false)}
				onClick={()=>navigate('/archive')}
				>
					<img src={Archive}/>
					<span>Archive</span>
				</div>
		</div>
	)
}
export default NavbarIsAuth