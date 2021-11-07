import { createSlice } from '@reduxjs/toolkit'

export const cartSlice =  createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addCartProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price ;
        },
        deleteProduct: (state, action) => {
            const productIndex = state.products.filter(
                (product) => product._id !== action.payload._id
            );
            state.products = productIndex;
            state.total -= action.payload.price
            state.quantity -= 1;
        }
    }
})

export const { addCartProduct, deleteProduct } = cartSlice.actions
export default cartSlice.reducer;
