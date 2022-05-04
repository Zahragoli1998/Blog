import { useEffect,useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Sidebar from '../component/Sidebar'
import '../css/Dashboard.css'
import NavbarIsAuth from './navbar/NavbarIsAuth'

const Dashboard = () =>{
	const navigate = useNavigate()
  const cookies = new Cookies();

	const User = () =>{

		const me = async () => {
		 fetch('http://localhost:4000/user/me', {
			 method: 'POST',
			 headers: {
				 'Content-Type': 'application/json',
				 'auth': `ut ${cookies.get('token')}`
			 },
			 body: JSON.stringify({})
		 }).then((data) => {
			 return data.json()
		 }).then(data =>{
			 console.log(data);
			if(data.msg){
				console.log(data);
				cookies.remove('token')
				return navigate('/login')
			}
		 })
	 }
	 return me()
	}

	useEffect(()=>{
		User()
	},[])

	return(
		<div className='container-Dashboard'>
		<NavbarIsAuth/>
		<div className='main-Dashboard'>
			<Outlet/>
		</div>
		<Sidebar/>
		</div>
	)
}
export default Dashboard