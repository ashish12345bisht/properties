import React from 'react';
import '../styles/Header.css'
import {RiMailOpenFill} from 'react-icons/ri'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <div className='header__logo'>
                <RiMailOpenFill/>
                <span>Estatery</span>
            </div>
            <ul>
                <NavLink to="/" className={({ isActive }) => { return isActive?"active__header":"" }}>
                <li>Rent</li>
                </NavLink>
                <NavLink to="/buy" className={({ isActive }) => { return isActive?"active__header":"" }}>
                <li>Buy</li>
                </NavLink>
                <NavLink to="/favourite" className={({ isActive }) => { return isActive?"active__header":"" }}>
                <li>Favourites</li>
                </NavLink>
                <li>
                    <select name="properties" id="properties" className='header__dropdown'>
                        <option value="volvo">Properties</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </li>
                <li>
                    <select name="resources" id="resources" className='header__dropdown'>
                        <option value="volvo">Resources</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </li>
            </ul>
        </div>
        <div className='header__right'>
            <button className='login__button'>Login</button>
            <button className='signup__button'>Sign Up</button>
        </div>
    </div>
  )
}

export default Header