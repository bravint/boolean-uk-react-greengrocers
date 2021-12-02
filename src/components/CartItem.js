function CartItem (item){
    return (
        <li key={item.id}>
            <img
                className="cart--item-icon"
                src={item.image}
                alt={item.name}
            />
            <p>item.name</p>
            <button className="quantity-btn remove-btn center">-</button>
            <span className="quantity-text center">{item.qty}</span>
            <button className="quantity-btn add-btn center">+</button>
        </li>
    )
}

export default CartItem