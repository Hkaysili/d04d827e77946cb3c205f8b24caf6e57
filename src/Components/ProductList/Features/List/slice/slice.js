import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
     loading : false,
     listData: []
  },
  reducers: {
     loadListData (state) {
         state.loading = true; 
     },
     loadedListData (state, action){
         state.loading = false; 
         state.listData = action.payload 
     }
  },
})
export const { loadListData, loadedListData } = listSlice.actions

export const fetchProducts = () => async dispatch => {
  dispatch(loadListData());  
  const response =  await axios.get('https://teknasyon.netlify.app/.netlify/functions/products',{
    headers : {
        "X-Access-Token" : "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"
    }
  })
  dispatch(loadedListData(response.data.products));
}

export default listSlice.reducer