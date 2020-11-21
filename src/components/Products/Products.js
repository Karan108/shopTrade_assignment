import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';
import cleanSize from '../utils/cleanSize';
import './Products.css';
function Products({ imgSrc, brand, name, price, oldPrice, options }) {
    const [hover, setHover] = useState(false);
    const [sizeClicked, setSizeClicked] = useState(false);
    const dispatch = useDispatch();
    const calcDiscount = (price, oldPrice) => {
        return ((oldPrice - price) / oldPrice) * 100
    }
    const nameSlice = (name) => {
        return name.slice(0, 28) + '...';
    }

    const handleClick = () => {
        setSizeClicked(false);
        dispatch(addToCart());
    }

    return (
        <div className='products'>
            <div onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)} >
                <img src={imgSrc[0]} alt={brand} className={`products__image ${hover && 'products__hover'}`} />
                <div className="products__details">
                    {!hover && <><h2>{brand}</h2>
                        <p>{nameSlice(name)}</p></>}
                    {hover && <div className='products__options'>
                        {sizeClicked && <button className='produts__options__button' onClick={handleClick}>ADD TO CART</button>}
                        <h5 style={{
                            "fontWeight": "500",
                            "fontSize": "12px",
                            "lineHeight": "14px"
                        }}>Select Size</h5>
                        <div className="products__variant__container">
                            {!sizeClicked && options.map(ele => (
                                <div key={ele.id} className="products__variant" onClick={() => { setSizeClicked(!sizeClicked) }}>
                                    <p>{cleanSize(ele.value)}</p>
                                </div>
                            ))}
                        </div>

                        <p className="products__variantSize">Sizes : {cleanSize(options[0].value)} ,{cleanSize(options[1].value)}, {cleanSize(options[2].value)}, {cleanSize(options[3].value)}, {cleanSize(options[4].value)}</p>
                    </div>}
                    <div className="products__price">
                        <h2>${price}&nbsp;</h2>
                        <p className='products__price__price'>${oldPrice}</p>
                        <p className='products__price__discount'>&nbsp;({Math.floor(calcDiscount(price, oldPrice))}% OFF)</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Products
