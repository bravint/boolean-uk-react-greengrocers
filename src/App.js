import './styles/reset.css'
import './styles/index.css'

import CartItem from './components/CartItem'
import StoreItem from './components/StoreItem'
import StoreArr from './data/items'
import { useState } from 'react'

export default function App() {

  const initialStoreItems = []
  const [cart, setCart] = useState(initialStoreItems)

  const CartTotal = () => {
      let total = 0
      cart.forEach(element => total += element.price*element.qty)
      return total.toFixed(2)
  }
  
  const updateQuantity = (input, grocery) => {
    const objIndex = cart.findIndex(element => element.id === grocery.id)
    const newCart = cart.filter(element => element.id !== grocery.id)
    grocery.qty > 0 && input === 'plus' ? grocery.qty++ : grocery.qty--
    grocery.qty === 0 ? setCart(newCart) : newCart.splice(objIndex, 0, grocery)
    setCart(newCart)
  }

  const addToCart = (grocery) => {
    let objIndex = cart.findIndex(element => element.id == grocery.id)
    if (objIndex >= 0) return updateQuantity ('plus', grocery)
    grocery.qty++
    setCart([...cart, grocery])
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {StoreArr.map(grocery =>
              <StoreItem
                key={grocery.id}
                grocery={grocery}
                addToCart={addToCart}
              />
          )}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
            <ul className="item-list cart--item-list">
            {cart.map(grocery => 
              <CartItem 
              key={grocery.id}
              grocery={grocery}
              updateQuantity={updateQuantity}
              />
            )}
            </ul>
        </div>
        <div className="total-section">
          <div>
              <h3>Total</h3>
          </div>
          <div>
              <span className="total-number">£{CartTotal()}</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
