import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {


    return (
        <div className='sidebar ms-md-3 mx-auto mb-4 mb-md-0'>
            <ul className='list-unstyled sidebar-list w-100 d-flex flex-column align-items-center justify-content-around py-5'>
                <li className='nav-li w-100'>
                    <NavLink style={{width:100+'%'}} id='navLink' className={ ({isActive}) => {return isActive ? `bg-primary text-white w-100 border border-2 border-dark rounded-3 py-1 px-2` : "bg-white w-100 text-dark border border-2 border-primary rounded-3 py-1 px-2 not_active" } } to="/Users">
                            کاربران
                    </NavLink>
                </li>
                <li className='nav-li w-100'>
                    <NavLink style={{width:100+'%'}} id='navLink' className={ ({isActive}) => {return isActive ? `bg-primary text-white w-100 border border-2 border-dark rounded-3 py-1 px-2` : "bg-white w-100 text-dark border border-2 border-primary rounded-3 py-1 px-2 not_active" } } to="/Gallery">
                            گالری
                    </NavLink>
                </li>
                <li className='nav-li w-100'>
                    <NavLink style={{width:100+'%'}} id='navLink' className={ ({isActive}) => {return isActive ? `bg-primary text-white w-100 border border-2 border-dark rounded-3 py-1 px-2` : "bg-white w-100 text-dark border border-2 border-primary rounded-3 py-1 px-2 not_active" } } to="/Posts">
                            پست ها
                    </NavLink>
                </li>
                <li className='nav-li w-100'>
                    <NavLink style={{width:100+'%'}} id='navLink' className={ ({isActive}) => {return isActive ? `bg-primary text-white w-100 border border-2 border-dark rounded-3 py-1 px-2` : "bg-white w-100 text-dark border border-2 border-primary rounded-3 py-1 px-2 not_active" } } to="/Comments">
                            نظرات
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
