import Cookies from 'universal-cookie';

const addUser = (Name,UserName) =>{

	const cookies = new Cookies();

	const singUp = async () => {
	
		fetch('http://localhost:4000/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body:JSON.stringify({
				imgurl: 'https://stylesatlife.com/wp-content/uploads/2015/05/hairstyles-for-square-face-shapes3.jpg',
				username: UserName,
				name: Name
			})
		}).then((res) => {
			console.log(res);
			return res.json()
		}).then(data => {
			console.log(data);
			cookies.set('token',data.token)
		})
	}

	return singUp()
}

export default addUser