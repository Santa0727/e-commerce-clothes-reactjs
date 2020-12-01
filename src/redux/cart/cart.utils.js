export const addItemToCart = (cartItems, newItem) => {
    const isExist = cartItems.find(item => item.id === newItem.id);

    if(isExist) {
        return cartItems.map(item => 
            item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item
        );
    }
    return [...cartItems, {...newItem, quantity: 1}];
}