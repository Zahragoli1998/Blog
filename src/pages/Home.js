import NavbarIsAuth from "./navbar/NavnarIsNotAuth"
import ArticleList from "../component/AeticleList"
import { Outlet } from "react-router-dom"

const Home = () =>{
	return (
		<>
		<NavbarIsAuth/>
		<Outlet/>
		</>
	)
}

export default Home