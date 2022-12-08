import React, {useState,useEffect} from "react";
import {login} from "../../../axios/axios";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUser, getUserAction} from "../../../redux/actions/user-action";
const Login = () => {
    const {user} = useSelector(state => state.UserReducer)
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    useEffect(  () => {
        const data =async () => {
            await login(100)
                .then(res => {
                    dispatch(getUserAction(res.data))
                })
        }
        data()
    }, []);
    const onLogin = (e) => {
        e.preventDefault()
        dispatch(getUser(password))
        setName('')
        setPassword('')
    }
    return(
        <div className={'register'}>
            <h1>REGISTER</h1>
            <form className={'register-main'} onClick={(e) => onLogin(e)}>
                <label >Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="email" placeholder={'name'}/>
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder={'password'}/>
                <button type={'submit'}>sing-in</button>
                <Link to={'/register'}><p>Register</p></Link>
            </form>
        </div>
    )
}
export default Login