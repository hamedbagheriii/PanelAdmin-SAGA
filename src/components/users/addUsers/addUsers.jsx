import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { handleSetUser, handleUpdateUser } from '../../../service/userService/userSevice';


const AddUser = ()=>{

    const [userData , setUserData] = useState({
        name : "",
        username : "",
        email : "",
        address : {
            street : '' ,
            suite :  '',
            city : '' ,
            zipcode : ''
        }
    });
    const {userId} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        if(userId){
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res =>{
                setUserData(res.data)
            }).catch(err=>{
                console.log(err.message);
            })
        }
    }, []);



    const handleAddUser = (e)=>{
        e.preventDefault();
        if (!userId) {
            handleSetUser(userData);

        }
        else{
            handleUpdateUser(userData , userId);
        }
    }



    return(
        <div className="container d-flex align-items-center flex-column justify-content-center mb-3">

            <form onSubmit={handleAddUser} className={`userForm w-100 bg-white py-3 px-2`}>
                <div className={`userForm_title mx-auto py-1 pt-2 bg-primary`}>
                    <h5 className='text-white text-center'>
                        {userId ? 'ویرایش کاربر' : "افزودن کاربر"}
                    </h5>
                </div>

                <div className={`content form_main w-100 mt-4 px-3 py-4`}>
                    <div className="mb-4">
                        <label htmlFor="name_family" className="form-label fw-bold fs-6">نام و نام خانوادگی</label>
                        <input required type="text" value={userData.name} onChange={(e)=>setUserData({...userData , name : e.target.value})} className={`inputUser form-control`} id="name_family" placeholder="رضا عباسی" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userName" className="form-label fw-bold fs-6">نام کاربری</label>
                        <input required type="text" value={userData.username} onChange={(e)=>setUserData({...userData , username : e.target.value})} className={`inputUser form-control`} id="name_family" placeholder="reza572" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="user_email" className="form-label fw-bold fs-6">ایمیل</label>
                        <input required type="text" value={userData.email} onChange={(e)=>setUserData({...userData , email : e.target.value})} className={`inputUser form-control`} id="user_email" placeholder="rezaabasizadeh@gmail.com" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="user_address" className="form-label fw-bold fs-6">آدرس</label>
                        <div className="row w-100 mt-1">
                            <div className="col-6">
                                <input required type="text" value={userData.address.city} onChange={(e)=>setUserData({...userData , address : {...userData.address , city : e.target.value} })} className={`inputUser form-control w-100`} id="user_address" placeholder="شهر" />
                            </div>
                            <div className="col-6">
                                <input required type="text" value={userData.address.street} onChange={(e)=>setUserData({...userData , address : {...userData.address , street : e.target.value} })} className={`inputUser form-control w-100`} id="user_address" placeholder="خیابان" />
                            </div>
                            <div className="col-6 mt-3">
                                <input required type="text" value={userData.address.suite} onChange={(e)=>setUserData({...userData , address : {...userData.address , suite : e.target.value} })} className={`inputUser form-control w-100`} id="user_address" placeholder="ادامه آدرس" />
                            </div>
                            <div className="col-6 mt-3">
                                <input required type="text" value={userData.address.zipcode} onChange={(e)=>setUserData({...userData , address : {...userData.address , zipcode : e.target.value} })} className={`inputUser form-control w-100`} id="user_address" placeholder="کد پستی" />
                            </div>
                        </div>
                    </div>
                    <div className='w-100 d-flex align-items-center justify-content-around'>
                        <button type='button' onClick={()=>navigate(-1)} className="btn btn-danger px-4" >بازگشت</button>
                        <button type='submit' className="btn btn-primary px-4">
                            {userId ? 'ویرایش' : 'افزودن'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default AddUser;