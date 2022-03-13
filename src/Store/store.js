import { configureStore } from '@reduxjs/toolkit';
import  listSlice  from '../Components/ProductList/Features/List/slice/slice';

export default configureStore({
  reducer: {
     list: listSlice
  },
})