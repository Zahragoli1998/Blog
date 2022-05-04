
import User from '../pages/navbar/User'
import '../css/EditUser.css'
import { useState ,useEffect} from "react"
import Cookies from 'universal-cookie'

const Edit = (props) => {

	const[user,setUser] = useState({})
	const[name,setName]=useState(user.name)
	const[phoneNumber,setPhoneNumber]=useState(user.phoneNumber)
	const cookies = new Cookies

  

	const getUserInfo = (userInfo) =>{setUser(userInfo)}
 
	useEffect(()=>{User(cookies.get('token'),getUserInfo)},[])

	const editUser = async () => {
		console.log(name,phoneNumber);

		fetch('http://localhost:4000/user/edit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'auth': `ut ${cookies.get('token')}`
			},
			body: JSON.stringify({
				data: {
					name: name,
					phoneNumber: phoneNumber,
					imgurl: 'https://i.pinimg.com/736x/2f/b5/c3/2fb5c3543030b14a74f5272c949373f9.jpg'
				}
			})
		})
			.then((res) => res.json())
			.then(data => console.log(data))
	}
  console.log(user);
	return (
		<div className="main-editUser">
			<div className="container-editUser">
				<div className="image-editUser">
					<img src={user.imgurl}/>
				</div>
				<div className="inputbox-editUser">
					<label>Name :</label>
					<input value={user.name} onChange={e => setName(e.target.value)}/>
				</div>
				<div className="inputbox-editUser">
					<label>phoneNumber :</label>
					<input value={user.phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
				</div>
				<button className="btn-editUser" onClick={()=>editUser()}>Save</button>
			</div>
		</div>
	)
}
export default(Edit)