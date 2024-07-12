import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode, setLightMode } from '../../redux/theme/darkModeSlice';

const Navbar = () => {

    const {theme} = useSelector(state => state.darkmode)
    // استفاده از دیسپچ 
    const dispatch = useDispatch()

    return (
        <div className='navbar z-3 w-100 bg-white d-flex align-items-center justify-content-between px-2'>
            <div className="container-fluid w-75 text-center d-flex align-items-center justify-content-start">
                <span className='text-center pt-1'>DARK</span>
                <div className="form-check form-switch ms-2">
                    <input className="form-check-input darkMode_input" onChange={(e)=> e.target.checked ? dispatch(setDarkMode()) : dispatch(setLightMode())} type="checkbox" role="switch"  id="flexSwitchCheckDefault" />
                </div>
                <span className='text-center pt-1'>WHITE</span>
            </div> 
            <div className='w-25 text-start pt-1 ps-3'>PANEL</div>
        </div>
    );
}

export default Navbar;
