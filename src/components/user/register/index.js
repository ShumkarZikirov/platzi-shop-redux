import {registerAxios} from "../../../axios/axios";
import React ,{useState}from "react";
import {Link} from "react-router-dom";
import './register.scss'
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role] = useState('customer');
    const [avatar, setAvatar] = useState('');
    const onRegister = async (e) => {
        e.preventDefault()
        await registerAxios({name,email,password,role,avatar})
        setAvatar('')
        setPassword('')
        setName('')
        setEmail('')

    }
  return(
      <div className={'register'}>
          <h1>REGISTER</h1>
          <form className={'register-main'} onSubmit={(e) => onRegister(e)}>
              <label>Name</label>
              <input value={name}  onChange={(e) => setName(e.target.value)} type="text" placeholder={'name'}/>
              <label >e-mail</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder={'email'}/>
              <label>Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder={'password'}/>
              <label>Link Avatar</label>
              <input type="text" value={avatar} onChange={e => setAvatar(e.target.value)} placeholder={'link'}/>
              <button type={'submit'}>register</button>
              <Link to={'/login'}><p>Sing-in</p></Link>
          </form>
      </div>
  )
}
export default Register