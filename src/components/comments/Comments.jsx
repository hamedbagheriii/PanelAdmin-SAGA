import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSearchResponse, sendRequestComment, sendRequestDeleteComment } from '../../redux/comments/commentAction';
import swal from 'sweetalert';

const Comments = () => {

    const {comments , error , isFetching ,  loading} = useSelector(state => state.comments)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(sendRequestComment())
    },[])


    const handleSearch = (e)=>{
        dispatch(getSearchResponse(e.target.value))
    }


    const handleDelete = (u)=>{
        swal({
            title: "حذف کاربر !",
            text: `آیا از حذف آیتم ${u.id} اطمینان دارید ؟`,
            icon: "warning",
            buttons: ['لغو' , 'تایید'],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                dispatch(sendRequestDeleteComment(u.id));
            }
            else {
              swal("عملیات لغو شد .");
            }
        });
    }


    return (
        <div className='w-100 '>
            <div className='content_header w-100 d-flex justify-content-between mb-3 mt-1'>
            <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" onChange={handleSearch} className="form-control pt-2 shadow" placeholder="جستجو"/>
                </div>
                <button onClick={()=>navigate('/Comments/add')} className="btn btn-primary fs-4 d-flex align-items-center pt-2" style={{height:40}}>+</button>
            </div>

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
                            <th className='' scope="col">عملیات</th>
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
                                    <td>
                                        <i className="fas fa-edit text-warning mx-2 pointer" 
                                        onClick={()=>{
                                            return navigate(`/Comments/add/${u.postId}/${u.id}`)
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

export default Comments;
