import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          className="cart-image"
          alt="cart"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        />
      </div>
    </>
  )
}

export default Cart
