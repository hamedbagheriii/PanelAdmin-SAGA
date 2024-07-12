import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/posts/postsSlice';

const Posts = () => {

    const {posts , error , isFetching , loading} = useSelector(state => state.posts)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts())
    }, []);


    return (
        <div className='w-100 '>
            {posts.length ?
                <div className='table-responsive-lg '>
                    <table className="table tableUser">
                        <thead>
                            <tr>
                            <th className='' scope="col">#</th>
                            <th className='w-25' scope="col">آیدی کاربر</th>
                            <th className='w-25' scope="col">عنوان</th>
                            <th className='w-75' scope="col">متن</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((u)=>(
                                <tr key={u.id}>
                                    <th scope="row">{u.id}</th>
                                    <td>{u.userId}</td>
                                    <td>{u.title}</td>
                                    <td>{u.body}</td>
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
