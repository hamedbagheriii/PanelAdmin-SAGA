import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { handleSetPost, handleUpdatePost } from '../../../service/postService/postSevice';
import { sendRequestUsers } from '../../../redux/users/usersAction';


const AddPost = ()=>{

    const [postData , setPostData] = useState({
        userId : "",
        title : "",
        body : "",
    });
    const {users  , error , isFetching} = useSelector(state => state.users)
    const {userId , id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sendRequestUsers())
        if(userId){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res =>{
                setPostData(res.data)
            }).catch(err=>{
                console.log(err.message);
            })
        }
    }, []);



    const handleAddUser = (e)=>{
        e.preventDefault();
        if (!userId) {
            handleSetPost(postData);

        }
        else{
            handleUpdatePost(postData , id);
        }
    }

    return(
        <div className="container d-flex align-items-center flex-column justify-content-center mb-3">

            <form onSubmit={handleAddUser} className={`userForm w-100 bg-white py-3 px-2`}>
                <div className={`userForm_title mx-auto py-1 pt-2 bg-primary`}>
                    <h5 className='text-white text-center'>
                        {userId ? 'ویرایش پست' : "افزودن پست"}
                    </h5>
                </div>

                <div className={`content form_main w-100 mt-4 px-3 py-4`}>
                    <div className="mb-4">
                        <label htmlFor="name_family" className="form-label fw-bold fs-6">کاربر</label>
                        <select value={postData.userId} onChange={(e)=>setPostData({...postData , userId : e.target.value})} className='form-select'>
                            <option value={0}>انتخاب کنید</option>
                            {users.map((u)=>(
                                <option key={Math.random()} value={u.id} >{u.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userName" className="form-label fw-bold fs-6">سرتیتر</label>
                        <input required type="text"  value={postData.title} onChange={(e)=>setPostData({...postData , title : e.target.value})} className={`form-control `} placeholder="سلام دنیا" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="user_email" className="form-label fw-bold fs-6">متن</label>
                        <textarea required  value={postData.body} onChange={(e)=>setPostData({...postData , body : e.target.value})}  className={`form-control fit-content `}  placeholder="سلام به همگی ..." />
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


export default AddPost;