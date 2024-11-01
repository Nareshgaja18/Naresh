import { configureStore, createSlice } from "@reduxjs/toolkit";
import Cart from "./Cart";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        veg: [
            { name: 'Potato fry', price: 100},
            { name: 'Tomato curry', price: 100 },
            { name: 'Carrot curry', price: 100 },
            { name: 'brinjal curry', price: 100 },
            { name: 'beans curry', price: 100 },
        ],
        nonveg: [
            { name: 'Chicken curry', price: 250 },
            { name: 'Mutton Biryani', price: 400 },
            { name: 'prawns fry', price: 300 },
            { name: 'Fish Curry', price: 200 },
            { name: 'Kamju Pakodi', price: 100 },
        ],
    },
    reducers: {} 
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        },
        clearCart: () => {
            return [];
        },
        incrementQuantity: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    // Removing item from cart if quantity reaches zero
                    return state.filter(cartItem => cartItem.name !== action.payload.name);
                }
            }
        }
    }
});

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;
export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;


































