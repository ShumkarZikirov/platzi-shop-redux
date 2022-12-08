import './header.scss'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {getCategories, getCategoryFilterAxios} from "../../../axios/axios";
import {useDispatch, useSelector} from "react-redux";
import {filterCategory, filterCategoryProduct} from "../../../redux/actions/global-actions";

const Header = () => {
    const {user} = useSelector(state => state.UserReducer)
    console.log(user)
    const dispatch = useDispatch()
    const {category} = useSelector(state => state.GlobalReducer)
    useEffect(() => {
        const data = async () => {
            await getCategories()
                .then(res => {
                    dispatch(filterCategory(res.data))
                })
        }
        data()
    },[])
    const getCategoryFilter = async (id) => {
        await getCategoryFilterAxios(id)
            .then(res => {
                dispatch(filterCategoryProduct(res.data))
            })
}

  return(
      <div className={'header'}>
            <div className={'header-main'}>
                <h1> LOGO </h1>
                <div className={'header-main_nav'}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/cart'}>Cart</Link>
                    <select  onChange={(e) => getCategoryFilter(e.target.value)}>
                        {
                            category.map((elem,index) => {
                                return(
                                    <option   key={index} value={elem.id}>{elem.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className={'header-main-user'}>
                    {
                        user.length !== 0 ? user.map(elem => {
                            return(
                                <div className={'users'}  >
                                        <p>{elem.name}</p>
                                    <img src={elem.avatar} alt=""/>
                                </div>
                            )
                        }): <Link to={'/register'}>Register</Link>
                    }
                </div>
            </div>
      </div>
  )
}
export default Header