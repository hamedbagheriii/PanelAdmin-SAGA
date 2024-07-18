import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, setPostSearch } from '../../redux/posts/postsSlice';
import { useNavigate } from 'react-router-dom';

const Posts = () => {

    const {posts , error , isFetching , loading} = useSelector(state => state.posts)

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getPosts())
    }, []);

    const handleSearch = (e)=>{
        dispatch(setPostSearch(e.target.value))
    }


    return (
        <div className='w-100 '>
            <div className='content_header w-100 d-flex justify-content-between mb-3 mt-1'>
            <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" onChange={handleSearch} className="form-control pt-2 shadow" placeholder="جستجو"/>
                </div>
                <button onClick={()=>navigate('/Posts/add')} className="btn btn-primary fs-4 d-flex align-items-center pt-2" style={{height:40}}>+</button>
            </div>

            {posts.length ?
                <div className='table-responsive-lg '>
                    <table className="table tableUser">
                        <thead>
                            <tr>
                            <th className='' scope="col">#</th>
                            <th className='w-25' scope="col">آیدی کاربر</th>
                            <th className='w-25' scope="col">عنوان</th>
                            <th className='w-75' scope="col">متن</th>
                            <th className='' scope="عملیات">متن</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((u)=>(
                                <tr key={u.id}>
                                    <th scope="row">{u.id}</th>
                                    <td>{u.userId}</td>
                                    <td>{u.title}</td>
                                    <td>{u.body}</td>
                                    <td>
                                        <i className="fas fa-edit text-warning mx-2 pointer" 
                                        onClick={()=>{
                                            return navigate(`/Posts/add/${u.userId}/${u.id}`)
                                        }}></i>
                                        <i className="fas fa-trash text-danger mx-2 pointer"></i>
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

export default Posts;
