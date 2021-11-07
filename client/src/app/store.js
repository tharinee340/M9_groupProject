import { configureStore } from '@reduxjs/toolkit';
import cartReducers from '../Components/cart/reducers'

export default configureStore({
    reducer: {
        cart: cartReducers,
    }
  });