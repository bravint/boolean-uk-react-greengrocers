import './styles/reset.css'
import './styles/index.css'
import StoreItem from './components/store-item'
import StoreArr from './data/items'
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
      <main id="cart">
        <h2>Your Cart</h2>
        <div class="cart--item-list-container">
          <ul class="item-list cart--item-list">
            {/* Wrtite some code here... */}
          </ul>
        </div>
        <div class="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span class="total-number">£0.00</span>
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
