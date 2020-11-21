import React from 'react'
import './Filters.css'
import down from '../../assets/down.svg';
import { fetchProducts, filterProducts } from '../../redux/products/productActions';
import { useDispatch } from 'react-redux';
function Filters() {

    const dispatch = useDispatch();
    const handleClick = (tag) => {
        dispatch(filterProducts(tag));
    }
    return (
        <div className='filters'>
            <div className="left">
                <h3>FILTERS:</h3>
                <button className="button" onClick={() => dispatch(fetchProducts())}><strong>All Products</strong></button>
                <button className="button" onClick={() => handleClick("T-shirt")}>Tee Shirts</button>
                <button className="button" onClick={() => handleClick("Denim")}>Denim</button>
                <button className="button" onClick={() => handleClick("jacket")}>Jackets</button>
                <button className="button" onClick={() => handleClick("T-shirt")}>Polo Tee Shirts</button>
                <button className="button" onClick={() => handleClick("shirt")}>Shirts</button>
            </div>
            <div className="right">
                <button className="button">Sort by:<strong>Price Low To High <img src={down} alt="down" style={{ 'paddingBottom': '2px' }} /></strong></button>
            </div>
        </div>
    )
}

export default Filters
