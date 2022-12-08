import {useDispatch, useSelector} from "react-redux";
import './cart.scss'
import { deleteCartAction} from "../../redux/actions/global-actions";
const Cart = () => {
    const {cart} = useSelector(state => state.GlobalReducer)
    const dispatch = useDispatch()
  return(
      <div className={'cart'}>
          {
              cart.map((elem,index)=> {
                  return(
                      <div key={index} className={'product-main'}>
                          <img src={elem.images[1]} alt=""/>
                          <div className={'product-main_param'}>
                              <p className={'title'}>{elem.title}</p>
                              <p className={'description'}>{elem.description}</p>
                              <div>
                                  <p className={'price'}>{elem.price}$</p>
                                  <button onClick={() => dispatch(deleteCartAction(elem.id))}>delete</button>
                              </div>
                          </div>
                      </div>
                  )
              })
          }
      </div>
  )
}
export default Cart