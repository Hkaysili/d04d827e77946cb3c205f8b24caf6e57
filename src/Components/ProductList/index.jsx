import React, { useEffect } from 'react';
import './index.scss';  
import {fetchProducts} from './Features/List/slice/slice';
import {useDispatch, useSelector} from 'react-redux' ;
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductList() {
    const list = useSelector(state => state.list.listData);
    const [pag, setPag] = useState(1);
    const [isSearch, setIsSearch] = useState(false);
    const [val, setVal] = useState('');  
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchProducts()) 
    },[dispatch])
    // console.log(list);
    

    const createPagination = () => {
        const paginations = list && parseInt(list.length / 10);
        const arr = [];

        for ( let i = 0; i < paginations; i+= 1 ) {
            arr.push(i);
        }

        return (
            <div>
                {arr.map((item, index) => (
                    <button key={index} onClick={() => setPag(index)}>{++index}</button>
                ))}
            </div>
        )
    }

    
    const handleInput = (e) => {
        const val = e.currentTarget.value;
        if ( val.length > 0 ) {
            setIsSearch(true);
        } else {
            setIsSearch(false);
        }
        setVal(val);
    }

    const filteredItems = list.filter(
        item =>
          item.title.toLocaleLowerCase().includes(val.toLocaleLowerCase())
      );

    const display = isSearch ? filteredItems : list;
    
    return (
        <> 
            <div className="product__list__search">
                <input type="text" onInput={handleInput} placeholder="Please enter the product you want to search"/>
            </div>
            <div id="product-list" className="product__list__wrapper"> 
                {isSearch && val !== ''  ? (
                    display.map((item, index) => ( 
                        index < 10 && (
                            <>     
                                <Link to="/product-detail" className="product__list__item" state={item}>
                                    <div className="product__list__item--image">
                                        <img src={item.image.src} alt="" />
                                    </div>
                                    <div className="product__list__item--title">
                                        <span>{item.title}</span>
                                    </div>
                                    <div className="product__list__item--price">
                                        <span>$ {item.variants[0].price}</span>
                                    </div>
                                </Link>  
                                
                            </>
                        )
                    ))
                ) : (
                list && list.map((item, index) => (
                    index < pag * 10 && index >= (pag - 1) * 10 && (
                            <Link to="/product-detail" className="product__list__item" key={item.id} state={item}>
                                <div className="product__list__item--image">
                                    <img src={item.image.src} alt="" />
                                </div>
                                <div className="product__list__item--title">
                                    <span>{item.title}</span>
                                </div>
                                <div className="product__list__item--price">
                                    <span>$ {item.variants[0].price}</span>
                                </div>
                            </Link>   
                        )
                    )
                )
                )}
            </div>
            {  !isSearch   &&  (
                <div className="product__pagination">
                    {createPagination()}
                </div>
            ) }
            {
                filteredItems.length === 0 && ( 
                         <div className="product__result__alert">
                            <div>
                                <span className="product__result__alert--text"> 
                                    <span style={{color:"darkred", fontWeight:"bolder", marginRight: 30}}>{val}</span>  
                                        No results were found for your search.   
                                </span>       
                            </div>    
                        </div>
                )  
            }
        </>
    )
}

export default ProductList
