import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGallery } from '../../redux/gallery/gallerySlice';

const Gallery = () => {
    const {gallery , error , isFetching ,  loading} = useSelector(state => state.gallery)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGallery())
    },[])




    return (
        <div className='w-100 '>
            {gallery.length ?
                <div className='table-responsive-lg w-100'>
                    <table className="table tableUser ">
                        <thead>
                            <tr>
                            <th className='w-25' scope="col">#</th>
                            <th className='w-50' scope="col">عنوان</th>
                            <th className='w-25' scope="col">عکس</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gallery.map((u)=>(
                                <tr key={u.id}>
                                    <th scope="row">{u.id}</th>
                                    <td>{u.title}</td>
                                    <td><img src={u.url} className='w-50' /></td>
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

export default Gallery;
