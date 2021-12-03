import './styles/reset.css'
import './styles/index.css'
<<<<<<< HEAD
import Cart from './components/Cart'
=======
import StoreItem from './components/store-item'
import StoreArr from './data/items'
>>>>>>> e9857691574bf15199785c6057464651e7a0514e
import { useState } from 'react'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

const initialStoreItems = []

export default function App() {

<<<<<<< HEAD
const [cart, setCart] = useState(initialStoreItems)  // Setup state here...
=======
  const addToCart = (e) => {
    console.log(e)
  }
>>>>>>> e9857691574bf15199785c6057464651e7a0514e

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
<<<<<<< HEAD
        <ul className="item-list store--item-list">
          {/* Wrtite some code here... */}
=======
        <ul class="item-list store--item-list">
          {StoreArr.map(grocery =>
              <StoreItem
                key={grocery.id}
                grocery={grocery}
                addToCart={addToCart}
              />
          )}
>>>>>>> e9857691574bf15199785c6057464651e7a0514e
        </ul>
      </header>
      < Cart cart={cart} setCart={setCart}/>
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
