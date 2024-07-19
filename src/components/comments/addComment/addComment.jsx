import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { handleSetComment, handleUpdateComment } from '../../../service/commentService/commentService';
import { sendRequestUsers } from '../../../redux/users/usersAction';


const AddComment = ()=>{

    const [commentData , setCommentData] = useState({
        postId : '',
        name: '',
        email : '',
        body : ''
    });
    const {posts} = useSelector(state => state.posts)
    const {postId , id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sendRequestUsers())
        if(id){
            axios.get(`https://jsonplaceholder.typicode.com/Comments/${id}`).then(res =>{
                setCommentData(res.data)
            }).catch(err=>{
                console.log(err.message);
            })
        }
    }, []);



    const handleAddUser = (e)=>{
        e.preventDefault();
        if (!id) {
            handleSetComment(commentData);

        }
        else{
            handleUpdateComment(commentData , id);
        }
    }

    return(
        <div className="container d-flex align-items-center flex-column justify-content-center mb-3">

            <form onSubmit={handleAddUser} className={`userForm w-100 bg-white py-3 px-2`}>
                <div className={`userForm_title mx-auto py-1 pt-2 bg-primary`}>
                    <h5 className='text-white text-center'>
                        {id ? 'ویرایش پست' : "افزودن پست"}
                    </h5>
                </div>

                <div className={`content form_main w-100 mt-4 px-3 py-4`}>
                    <div className="mb-4">
                        <label htmlFor="name_family" className="form-label fw-bold fs-6">پست</label>
                        <select value={commentData.postId} onChange={(e)=>setCommentData({...commentData , postId : e.target.value})} className='form-select'>
                            <option value={0}>انتخاب کنید</option>
                            {posts.map((u)=>(
                                <option key={Math.random()} value={u.id} >{u.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userName" className="form-label fw-bold fs-6">سرتیتر</label>
                        <input required type="text"  value={commentData.name} onChange={(e)=>setCommentData({...commentData , name : e.target.value})} className={`form-control `} placeholder="سلام دنیا" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userName" className="form-label fw-bold fs-6">ایمیل</label>
                        <input required type="text"  value={commentData.email} onChange={(e)=>setCommentData({...commentData , email : e.target.value})} className={`form-control `} placeholder="example@gmail.com" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userName" className="form-label fw-bold fs-6">متن</label>
                        <textarea required type="text"  value={commentData.body} onChange={(e)=>setCommentData({...commentData , body : e.target.value})} className={`form-control fit-content`} placeholder="سلام به همگی" />
                    </div>

                    <div className='w-100 d-flex align-items-center justify-content-around'>
                        <button type='button' onClick={()=>navigate(-1)} className="btn btn-danger px-4" >بازگشت</button>
                        <button type='submit' className="btn btn-primary px-4">
                            {id ? 'ویرایش' : 'افزودن'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default AddComment;