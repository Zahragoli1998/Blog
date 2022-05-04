import { GET_TOKEN, SET_AUTH } from "./Type";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const initialstate = {
  token:'',
	IsAuth:false
}

const Reducer = (state=initialstate,action) =>{
	console.log('state =>>>>>>',state,"action =>>>>>>>>",action);
  
	switch (action.type) {
		case GET_TOKEN:
      state.token=action.token
			return{
				...state,
			}
		case SET_AUTH:
			state.IsAuth=action.IsAuth
			return{
				...state,
			}
		default:
			return state
	}
}
export default Reducer

