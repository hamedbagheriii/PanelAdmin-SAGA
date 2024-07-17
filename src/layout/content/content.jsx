import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../../components/users/users';
import Posts from '../../components/posts/posts';
import Comments from '../../components/comments/Comments';
import Gallery from '../../components/gallery/Gallery';
import AddUser from '../../components/users/addUers/addUsers';

const Content = () => {
    return (
        <div className='content z-n1 p-3'>
           {
            <Routes>

                <Route path='/Users' element={<Users/>} />
                <Route path='/Users/add' element={<AddUser/>} >
                    <Route path=':userId' />
                </Route>

                <Route path='/Gallery' element={<Gallery/>} />

                <Route path='/Comments' element={<Comments/>} />

                <Route path='/Posts' element={<Posts/>} />

                <Route path='*' element={<Users/>} />

            </Routes>
           }
        </div>
    );
}

export default Content;
