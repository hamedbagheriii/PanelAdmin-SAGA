import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { handleSetPost, handleUpdatePost } from '../../../service/postService/postSevice';
import { handleSetGallery, handleUpdateGallery } from '../../../service/galleryService/galleryService';


const AddGallry = ()=>{

    const [galleryData , setGalleryData] = useState({
        id : "",
        title : "",
        url : "",
    });
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res =>{
                setGalleryData(res.data)
            }).catch(err=>{
                console.log(err.message);
            })
        }
    }, []);



    const handleAddUser = (e)=>{
        e.preventDefault();
        if (!id) {
            handleSetGallery(galleryData);

        }
        else{
            handleUpdateGallery(galleryData , id);
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
                        <label htmlFor="userName" className="form-label fw-bold fs-6">سرتیتر</label>
                        <input required type="text"  value={galleryData.title} onChange={(e)=>setGalleryData({...galleryData , title : e.target.value})} className={`form-control `} placeholder="سلام دنیا" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userName" className="form-label fw-bold fs-6">عکس</label>
                        <input required type="text"  value={galleryData.url} onChange={(e)=>setGalleryData({...galleryData , url : e.target.value})} className={`form-control `} placeholder="https://via.placeholder.com/150/92c952" />
                    </div>
                    <div className="mb-4 d-flex justify-content-center">
                        <img src={galleryData.url} className='w-25 ' alt="" />
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


export default AddGallry;