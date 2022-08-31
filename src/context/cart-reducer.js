export const sumItems = (cartItems) => {
	console.log("sumItem function...cartItems:", cartItems);
	return {
		itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
		totalCount: cartItems.reduce(
			(total, prod) => total + prod.price * prod.quantity,
			0
		),
	};
};
const cartReducer = (state, action) => {
	console.log("state:", state);
	switch (action.type) {
		case "ADD_ITEM":
			// check if item is in cart
			if (!state.cartItems.find((item) => item.id === action.payload.id)) {
				state.cartItems.push({
					// all the product object stored in the paylload (id,price,...)
					...action.payload,
					// also add quantity property to the new product added
					quantity: 1,
				});
			}
			console.log("ADD_ITEM action running ....state:", state);
			return {
				//...state, why?
				// new item has been pushed into the array, here we assign it as value of Cartitems property
				cartItems: [...state.cartItems],
				// calculate new total count and sum property values
				...sumItems(state.cartItems),
			};
		default:
			return state;
	}
};
export default cartReducer;
