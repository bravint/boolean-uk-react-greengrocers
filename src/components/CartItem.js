function Item ({grocery, updateQuantity}) {

const UppercaseName = (grocery) => {
    return grocery.name.charAt(0).toUpperCase() + grocery.name.slice(1);
}

    return (
        <li>
            <img
                className="cart--item-icon"
                src={grocery.image}
                alt={grocery.name}
            />
            <p>{UppercaseName(grocery)}</p>
            <button 
            className="quantity-btn remove-btn center"
            onClick={() => updateQuantity('minus', grocery)}
            > -
            </button>
            <span className="quantity-text center">{grocery.qty}</span>
            
            <button 
            className="quantity-btn add-btn center"
            onClick={() => updateQuantity('plus', grocery)}
            > +
            </button>
        </li>
    )
}

export default Item