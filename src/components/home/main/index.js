import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../../redux/actions/global-actions";
import './main.scss'
const Main = () => {
    const {product} = useSelector(state => state.GlobalReducer)
    const dispatch = useDispatch()
  return(
      <div className={'product'}>
          {
              product.map((elem,index)=> {
                  return(
                      <div key={index} className={'product-main'}>
                          <img src={elem.images[1]} alt=""/>
                          <div className={'product-main_param'}>
                              <p className={'title'}>{elem.title}</p>
                              <p className={'description'}>{elem.description}</p>
                              <div>
                                  <p className={'price'}>{elem.price}$</p>
                                  <button onClick={() => dispatch(addToCart(elem.id))}>add to cart</button>
                              </div>
                          </div>
                      </div>
                  )
              })
          }
      </div>
  )
}
export default Main