import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        
                <div className='sticky top-0 shadow bg-white flex '>
                    <div className=' text-xl m-auto  py-4'>
                        <NavLink
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                            to='/home'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                            to='/reviews'
                        >
                            Reviews
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                            to='/dashboards'
                        >
                            Dashboards
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                            to='/blogs'
                        >
                            Blogs
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                            to='/about'
                        >
                            About
                        </NavLink>




                    </div>

                </div>




    );
};

export default Header;