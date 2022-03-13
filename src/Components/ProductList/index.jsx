import React, { useEffect } from 'react';
import './index.scss';  
import {loadListData, loadedListData, fetchProducts} from './Features/List/slice/slice';
import {useDispatch, useSelector} from 'react-redux' ;

function ProductList() {
    const list = useSelector(state => state.list.listData)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchProducts())
    },[dispatch])
    console.log(list);
    return (
        <> 
            <div className="product__list__header">
                <ul>
                    <li>Product Title</li>
                    <li>Product Price</li>
                </ul>
            </div>

            <div className="product__list__content"> 
               <ul> 
                    {list && list.map(item => (
                        <li>
                            <span>{item.title}</span>
                        </li> 
                    ))}
               </ul>
            </div> 
        </>
    )
}

export default ProductList
