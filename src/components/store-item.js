function store ({grocery, addToCart}) {
    return (
        <li>
            <div class="store--item-icon">
                <img src={grocery.image} alt={grocery.name} />
            </div>
            <button onClick={() => addToCart(grocery.name)}>Add to cart</button>
        </li>
    )
}

export default store