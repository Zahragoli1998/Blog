
import { Outlet } from 'react-router-dom';
import '../css/Main.css'
import Home from './Home';

function Main() {

	return (
		<div className="App">
			<div className='mainBox'>
				<div className='main'>
					<Outlet/>
				</div>
			</div>
		</div>
	);
}

export default Main;