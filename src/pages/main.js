import {Route, Routes} from "react-router-dom";
import HomePages from "./home-pages";
import CartPages from "./cart-pages";
import Register from "../components/user/register";
import Login from "../components/user/login";

const Main = () => {
  return(
      <div>
          <Routes>
              <Route path={'/'} element={<HomePages/>}/>
              <Route path={'/cart'} element={<CartPages/>}/>
              <Route path={'/register'} element={<Register/>}/>
              <Route path={'/login'} element={<Login/>}/>
          </Routes>
      </div>
  )
}
export default Main