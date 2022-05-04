import { useNavigate,Link } from "react-router-dom"
import profileIcon from '../../img/icons8-add-user-male-64.png'
import '../../css/SingUp.css'
import { useState } from "react"
import addUser from "./PostRequest";
import closeIcon from '../../img/icons8-close-50.png'




const UID = () => `${new Date().getTime()}${Math.floor(Math.random()*9)+1}`;
console.log(UID());

const SingUp = () =>{
	const navigate = useNavigate()
	const[UserName,setUserName] = useState('')
	const[Name,setName] = useState('')

	
	return(
		<div className="background-Login">
			<div className="main-login">
				<div className="container-singup">
					<h1>Sing Up</h1>
					<div className="addProfileIcon-singup"><img src={profileIcon}/></div>
					<div className="inputBox-login">
						<label>UserName</label>
						<input onChange={(e)=>setUserName(e.target.value)}/>
					</div>
					<div className="inputBox-login">
						<label>Name</label>
						<input onChange={(e)=>setName(e.target.value)}/>
					</div>
					<button className="btn-singup"
						onClick={()=>{
							const id = UID()
							addUser(Name,UserName)
							navigate(`/login/`)
						}}
					>Continue</button>
				</div>
			</div>
			<Link to={'/'}><div className="backIcon">
				<img src={closeIcon} />
			</div></Link>
		</div>
	)
}

export default SingUp