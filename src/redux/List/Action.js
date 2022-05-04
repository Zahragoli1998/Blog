import { GET_TOKEN, SET_AUTH } from "./Type"



export const getToken =(token)=>{
	return{
		type:GET_TOKEN,
		token:token
	}
}

export const SetAuth =(IsAuth)=>{
	return{
		type:SET_AUTH,
		IsAuth:IsAuth
	}
}
