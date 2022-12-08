import { GET_USER, LOGIN, LOGOUT_USER} from "../types";

const  defaultState = {
    users: [],
    user: [],
}

export const UserReducer = (state = defaultState,action) => {
    switch (action.type) {
        case LOGIN:{
            const {payload} = action
            return {
                ...state,
                users: payload
            }
        }
        case GET_USER:{
            const {payload} = action
            const {users} = state
            const newUser = users.filter(elem => elem.password ===  payload)
            return{
                ...state,
                user: newUser
            }
        }
        case LOGOUT_USER:{
            return {
                ...state,
                user: []
            }
        }

        default:
            return state
    }
}