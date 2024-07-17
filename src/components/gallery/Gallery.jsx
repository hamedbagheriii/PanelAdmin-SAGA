import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGallery, setGallerySearch } from '../../redux/gallery/gallerySlice';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const {gallery , error , isFetching ,  loading} = useSelector(state => state.gallery)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getGallery())
    },[])


    const handleSearch = (e)=>{
        dispatch(setGallerySearch(e.target.value))
    }


    return (
        <div className='w-100 '>
            <div className='content_header w-100 d-flex justify-content-between mb-3 mt-1'>
            <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" onChange={handleSearch} className="form-control pt-2 shadow" placeholder="جستجو"/>
                </div>
                <button onClick={()=>navigate('/Gallery/add')} className="btn btn-primary fs-4 d-flex align-items-center pt-2" style={{height:40}}>+</button>
            </div>

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
