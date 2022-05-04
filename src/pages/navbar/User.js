
const User = (token,getUserInfo) =>{

	console.log(token);

	const me = async () => {
	 fetch('http://localhost:4000/user/me', {
		 method: 'POST',
		 headers: {
			 'Content-Type': 'application/json',
			 'auth': `ut ${token}`
		 },
		 body: JSON.stringify({})
	 }).then((data) => {
		 return data.json()
	 }).then(data =>{
     getUserInfo(data)
		 return data
	 })
 }
 return me()
}
export default User