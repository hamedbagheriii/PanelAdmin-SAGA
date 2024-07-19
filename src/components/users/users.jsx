import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteUser, getUsers, setSearch, setUsersSearch } from '../../redux/users/usersSlice';
import { useNavigate } from 'react-router-dom';
import { handleDeleteUser } from '../../service/userService/userSevice';
import { getSearchResponse, sendRequestDeleteUsers, sendRequestUsers } from '../../redux/users/usersAction';

const Users = () => {


    const {users  , error , isFetching} = useSelector(state => state.users)
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(sendRequestUsers())
    },[])


    const handleSearch = (e)=>{
        dispatch(getSearchResponse(e.target.value))
    }


    const handleDelete = (u)=>{
        dispatch(sendRequestDeleteUsers(u.id));
    }


    return (
        <div className='w-100 '>
            <div className='content_header w-100 d-flex justify-content-between mb-3 mt-1'>
            <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" onChange={handleSearch} className="form-control pt-2 shadow" placeholder="جستجو"/>
                </div>
                <button onClick={()=>navigate('/Users/add')} className="btn btn-primary fs-4 d-flex align-items-center pt-2" style={{height:40}}>+</button>
            </div>

            {users.length ?
                <div className='table-responsive-lg '>
                    <table className="table tableUser ">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">نام کاربری</th>
                            <th scope="col">ایمیل</th>
                            <th scope="col">آدرس</th>
                            <th scope="col">عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u)=>(
                                <tr key={u.id}>
                                    <th scope="row">{u.id}</th>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.address.city}</td>
                                    <td>
                                        <i className="fas fa-edit text-warning mx-2 pointer" 
                                        onClick={()=>{
                                            return navigate(`/Users/add/${u.id}`)
                                        }}></i>
                                        <i onClick={()=>handleDelete(u)} className="fas fa-trash text-danger mx-2 pointer"></i>
                                    </td>
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
