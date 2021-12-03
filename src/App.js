import './styles/reset.css'
import './styles/index.css'

import StoreItem from './components/store-item'
import StoreArr from './data/items'

import Cart from './components/Cart'

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


  const addToCart = (e) => {
    console.log(e)
  }

const [cart, setCart] = useState(initialStoreItems)  // Setup state here...


  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>

        <ul class="item-list store--item-list">
          {StoreArr.map(grocery =>
              <StoreItem
                key={grocery.id}
                grocery={grocery}
                addToCart={addToCart}
              />
          )}
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
