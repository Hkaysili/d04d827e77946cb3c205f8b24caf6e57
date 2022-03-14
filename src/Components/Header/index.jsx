import React from 'react' 
import { useLocation } from 'react-router-dom';
import './index.scss'; 

function Header() {
    const location = useLocation();
    console.log()
    return (
        <> 
            <header>
                {
                    location.pathname === '/product-detail' ? (
                        <h1>Product Detail</h1>
                    ) : (
                        <h1>Product List</h1>
                    )
                }
                <nav>
                   You can search and view the products you want on this page.
                </nav>
            </header> 
        </>
    )
}

export default Header
