
import './App.css';
import Main from './pages/Main';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import SingUp from './pages/singUp/SingUp';
import AddArticle from './pages/AddArticle';
import Dashboard from './pages/Dashboard';
import Edit from './pages/Edit';
import Archive from './pages/Archive';
import MyArticles from './pages/MyArticles';
import ArticleEdit from './pages/ArticleEdit';
import Assay from './pages/Assay';
import Home from './pages/Home';
import ArticleList from './component/AeticleList';

function App() {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Main/>}>
					<Route path={''} element={<Home/>}>
						<Route path={''} element={<ArticleList/>}/>
						<Route path={'article/:id'} element={<Assay/>}/> 
					</Route>
				</Route>
				<Route path={'/login/'} element={<Login/>}/>
				<Route path={'/singup'} element={<SingUp/>}/>
				<Route path={'/archive'} element={<Archive/>}/>
				{/* <Route path={'/article/:id'} element={<Assay/>}/> */}
				<Route path={'/dashboard'} element={<Dashboard/>}>
					<Route path={''} element={<MyArticles/>}></Route>
					<Route path={'editArticle/:id'} element={<ArticleEdit/>}/>
					<Route path={'1'} element={<AddArticle/>}/>
					<Route path={'2'}	element ={<Edit/>}/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
