import React from 'react'
import './Header.css';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import profile from '../../assets/profile.svg';
import basket from '../../assets/basket.svg';
import { useSelector } from 'react-redux';
function Header() {
    const items = useSelector(state => state.cart.noOfItems);
    return (
        <>
            <header className='header'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                    <p>Shop</p>
                    <p>About Us</p>
                    <p>Our Stores</p>
                    <p>Contact Us</p>
                </div>
                <div className="icons">
                    <img src={search} alt="search" />
                    <img src={profile} alt="profile" />
                    <div className="header__icons__basket">
                        <img src={basket} alt="basket" />
                        <p className="header__icons__basketItems">{items}</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
