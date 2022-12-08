import {
    ADD_TO_CART,
    DELETE_CART,
    FILTER_CATEGORY,
    FILTER_CATEGORY_PRODUCT,
    GET_CATEGORY,
    GET_PRODUCT,
    GET_USERS
} from "../types";

export const getProducts = (product) => {
    return{
        type: GET_PRODUCT,
        payload: product
    }
}
export const getCategory = (data) => {
    return{
        type: GET_CATEGORY,
        payload: data
    }
}
export const filterCategory = (name) => {
    return{
        type:FILTER_CATEGORY,
        payload: name
    }
}
export const filterCategoryProduct = (id) => {
    return{
        type: FILTER_CATEGORY_PRODUCT,
        payload: id
    }
}
export const addToCart = (id) => {
    return{
        type: ADD_TO_CART,
        payload: id
    }
}
export const deleteCartAction = (id) => {
    return{
        type: DELETE_CART,
        payload: id
    }
}
export const getUsers = (name) => {
    return{
        type: GET_USERS,
        payload: name
    }
}