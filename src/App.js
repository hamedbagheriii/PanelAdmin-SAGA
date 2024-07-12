import React, { useEffect, useState } from 'react';
import Layout from './layout/layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';


const App = ()=>{

    const {theme} = useSelector(state=>state.darkmode)

    
    return (
        <BrowserRouter>
            <div className={` ${theme} app  pt-3`}>
                <Layout/>
            </div>
        </BrowserRouter>
    ) 
}


export default App;