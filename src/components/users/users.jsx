import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/users/usersSlice';

const Users = () => {


    const {users  , error , isFetching} = useSelector(state => state.users)
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers())
    },[])


    return (
        <div className='w-100 '>
            {users.length ?
                <div className='table-responsive-lg '>
                    <table className="table tableUser ">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">نام کاربری</th>
                            <th scope="col">ایمیل</th>
                            <th scope="col">آدرس</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u)=>(
                                <tr key={u.id}>
                                    <th scope="row">{u.id}</th>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.address.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            : error ?
                <span className='text-center w-100 d-block alert mt-3 alert-warning fs-5 rounded-2'>خطا در دریافت اطلاعات !</span>
            : isFetching ? 
                <span className='text-center w-100 d-block alert mt-3 alert-success fs-5 rounded-2'>لطفا صبر کنید . . .</span>
            : null }
        </div>
    );
}

export default Users;
