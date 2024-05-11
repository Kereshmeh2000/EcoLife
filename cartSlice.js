import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../Pages/Shops/getProducts';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    remove: (state, action) => {
      const productId = action.payload
      state.cartItems = state.cartItems.filter( (product) => product.id !== productId)
    },
    clearCart: (state) => {
      state.cartItems = []
    },
    // increase: (state, {payload}) => {
    //   const cartItem = state.cartItems.find((product) => product.id === payload.id)
    //   cartItem.amount = cartItem.amount +1;
    // },
    // decrease: (state, {payload}) => {
    //   const cartItem = state.cartItems.find((product) => product.id === payload.id)
    //   cartItem.amount = cartItem.amount -1;
    // },
    calculateTotal: (state) => {
      state.total = state.cartItems.reduce((acc, item) => acc + item.price, 0);
      
    },
  },
});

export const { addToCart, remove, clearCart, increase, decrease , calculateTotal} = cartSlice.actions;

// Async thunk function to fetch products and update cartItems
export const fetchProducts = () => async (dispatch) => {
  try {
    const products = await getProducts(); // Call getProducts to fetch products
    // Dispatch the addToCart action to add products to cartItems
    products.forEach((product) => {
      dispatch(addToCart(product));
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export default cartSlice.reducer;
