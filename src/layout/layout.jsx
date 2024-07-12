import React from 'react';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';
import Content from './content/content';

const Layout = () => {
    return (
        <div className='container-fluid'>
            <Navbar/>
            <div className='w-100 d-flex flex-column flex-md-row mt-3'>
                <Sidebar/>
                <Content/>
            </div>
        </div>
    );
}

export default Layout;
