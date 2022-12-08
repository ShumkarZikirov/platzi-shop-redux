import { GET_USER, LOGIN, LOGOUT_USER} from "../types";

export const getUserAction = (data) => {
    return{
        type: LOGIN,
        payload: data
    }
}
export const getUser = (data) => {
    console.log(data)
    return{
        type: GET_USER,
        payload: data
    }
}
export const logout = () => {
    return{
        type:LOGOUT_USER
    }
}
