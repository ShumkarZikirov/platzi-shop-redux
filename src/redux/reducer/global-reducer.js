import {ADD_TO_CART, DELETE_CART, FILTER_CATEGORY, FILTER_CATEGORY_PRODUCT, GET_CATEGORY, GET_PRODUCT} from "../types";

const defaultState = {
    product: [],
    category:[],
    cart:[]
}
export const GlobalReducer = (state = defaultState,action) => {
    switch (action.type){
        case GET_PRODUCT:{
            const {payload} = action

            return{
                ...state,
                product: payload
            }
        }
        case GET_CATEGORY: {
            return {
                ...state,
                category: action.payload
            }
        }
        case FILTER_CATEGORY:{
            const {payload} = action
            return {
                ...state,
                category: payload
            }
        }
        case FILTER_CATEGORY_PRODUCT:{
            const {payload} = action
            return {
                ...state,
                product: payload
            }
        }
        case ADD_TO_CART: {
            const {payload} = action
            const {product, cart} = state
            const check = cart.every(elem => elem.id !== payload)
            if(check) {
                const newCart = product.find(elem => elem.id === payload)
                const newArr = [...cart, newCart]
                return {
                    ...state,
                    cart: newArr
                }
            } else {
                return state

            }

        }
        case DELETE_CART: {
            const {payload} = action
            const {cart} = state
            const newCart = cart.filter((elem => elem.id !== payload))
            return {
                ...state,
                cart: newCart
            }
        }
        default:
            return state
    }
}