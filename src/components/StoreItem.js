function store ({grocery, addToCart}) {
    return (
        <li>
            <div className="store--item-icon">
                <img src={grocery.image} alt={grocery.name} />
            </div>
            <button onClick={() => addToCart(grocery)}>Add to cart</button>
        </li>
    )
}

export default store