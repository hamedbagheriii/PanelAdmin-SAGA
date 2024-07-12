import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../redux/comments/comments';

const Comments = () => {

    const {comments , error , isFetching ,  loading} = useSelector(state => state.comments)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getComments())
    },[])




    return (
        <div className='w-100 '>
            {comments.length ?
                <div className='table-responsive-lg w-100'>
                    <table className="table tableUser ">
                        <thead>
                            <tr>
                            <th className='' scope="col">#</th>
                            <th className='' scope="col">آیدی پست</th>
                            <th className='' scope="col">عنوان</th>
                            <th className='' scope="col">ایمیل</th>
                            <th className='' scope="col">متن</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map((u)=>(
                                <tr key={u.id}>
                                    <th scope="row">{u.id}</th>
                                    <td>{u.postId}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
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

export default Comments;
