
import axios from "axios";
import Cookies from "js-cookie";
axios.defaults.baseURL = ' https://api.escuelajs.co/api/v1/'
const instance = axios.create({
        baseURL: 'https://api.escuelajs.co/api/v1/',
        headers: {
                "Content-Type": "application/json"
        }
})

instance.interceptors.request.use((config) => {
        const token = Cookies.get('platzi-token');
        if(token){
                config.headers.Authorization = `Token ${token}`
        }
        return config
},(error) => {
        return Promise.reject(error)
    }
    )
export default instance
export const getProduct = () => {
        return instance.get('products')
}

export const getCategories = () => {
        return instance.get(`categories/`)
}
export const getCategoryFilterAxios = (id) => {
        return instance.get(`categories/${id}/products`)
}
export const registerAxios = (form) => {
        return instance.post('users',form)
}
export const login = (limit) => {
        return instance.get(`users/`,limit)
}