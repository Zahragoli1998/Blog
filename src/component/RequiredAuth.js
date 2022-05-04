import { Navigate, useLocation } from "react-router-dom"
import Cookies from "universal-cookie"

const RequiredAuth = () =>{
	const cookies = new Cookies
	const token = cookies.get('token')

	const connect = ({children},token) =>{
		console.log(children);
		// const location = useLocation()
		return token ? children : <Navigate to={'/login'}></Navigate>
	}
}
export default RequiredAuth