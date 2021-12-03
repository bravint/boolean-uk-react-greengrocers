import './styles/reset.css'
import './styles/index.css'

<<<<<<< HEAD
import StoreItem from './components/store-item'
import StoreArr from './data/items'

import Cart from './components/Cart'

import { useState } from 'react'
=======
import CartItem from './components/CartItem'
import StoreItem from './components/StoreItem'
import StoreArr from './data/items'
>>>>>>> f5bfec0812157aafbef8a92eb665d552c1d61b3f

import { useState } from 'react'

export default function App() {

  const initialStoreItems = []
  const [cart, setCart] = useState(initialStoreItems)  // Setup state here... cart initally == empty array

  const CartTotal = () => {
      let total = 0
      cart.forEach(element => total += ((element.price)*(element.qty)))
      return total.toFixed(2)
  }
  
  const updateQuantity = (input, grocery) => {
    //console.log(input)
    let objIndex = cart.findIndex(element => element.id == grocery.id) //find position of grocery in cart array
    //console.log(objIndex)
    let newCart = cart.filter(element => element.id !== grocery.id) //make newCart array without grocery
    //console.log('filter', newCart)
    if (grocery.qty > 0) {
      (input == 'plus' ? grocery.qty++ : grocery.qty--) //update qty of grocery, qty-- does not happen if qty is already == 0
    }
    if (grocery.qty == 0) return setCart(newCart) //if grocery.qty == 0 then state updates with NewArray without grocery
    newCart.splice(objIndex,0,grocery) // grocery is pushed back into newCart array in its original position, so its postion in the cart is retained
    //console.log('ready', newCart)
    setCart(newCart) //replace cart in state with NewCart
  }

<<<<<<< HEAD

  const addToCart = (e) => {
    console.log(e)
  }

const [cart, setCart] = useState(initialStoreItems)  // Setup state here...

=======
  const addToCart = (grocery) => {
    let objIndex = cart.findIndex(element => element.id == grocery.id)
    //console.log (objIndex)
    if (objIndex >= 0) return updateQuantity ('plus', grocery)
    grocery.qty++
    setCart([...cart, grocery]) //push grocery object to end of clone of cart and update state with modified clone
  }
>>>>>>> f5bfec0812157aafbef8a92eb665d552c1d61b3f

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
<<<<<<< HEAD

        <ul class="item-list store--item-list">
=======
        <ul className="item-list store--item-list">
>>>>>>> f5bfec0812157aafbef8a92eb665d552c1d61b3f
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
              <span className="total-number">`£{CartTotal()}`</span>
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
