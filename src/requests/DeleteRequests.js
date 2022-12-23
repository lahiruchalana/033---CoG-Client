function DeleteItemFromCart() {
    const deleteItemFromCartURL = `http://localhost:2000/api/v5/cart/remove/item`

    return deleteItemFromCartURL;
}

export default DeleteItemFromCart;