import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import '../../css/Login.css'
import Cookies from 'universal-cookie';
import closeIcon from '../../img/icons8-close-50.png'

	
	const Login = () =>{

		const navigate = useNavigate()
		const [UserName,setUserName]= useState('')
		const [password,setPassword] = useState('')
	  const cookies = new Cookies();


		// const [loading, setLoading] = useState(true)
	

		const userInfo = () =>{
			const Login = async () => {
				fetch('http://localhost:4000/user/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body:JSON.stringify({
						username: UserName,
						password: password
					})
				})
				.then((res) =>res.json())
				.then(data => {
					if(data.token){
						cookies.set('token',data.token)
						console.log(data);
						navigate('/dashboard')
					}
				})
			}
			return Login()
		}

		// if (loading) return <h1> loading </h1>
	return(
		<div className="background-Login">
			<div className="main-login">
				<div className="container-login">
					<h1>Log in</h1>
					<div className="inputBox-login">
						<label>UserName</label>
						<input value={UserName} onChange={(e)=>{
							setUserName(e.target.value)
							
							}}/>
					</div>
					<div className="inputBox-login">
						<label>Password</label>
						<input value={password} type={'password'} onChange={e => setPassword(e.target.value)}/>
					</div>
					<span className="password-login">Forget your Password?</span>
					<button className="btn-login"
						onClick={()=>{
							userInfo(UserName)
				
							// navigate('/dashboard')
						}}
					>Continue</button>
				</div>
			<Link to={'/'}><div className="backIcon">
				<img src={closeIcon} />
			</div></Link>
			</div>
		</div>
	)
}



export default (Login)