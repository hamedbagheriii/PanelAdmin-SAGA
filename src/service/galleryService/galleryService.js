import axios from "axios"
import swal from "sweetalert";


export const handleSetGallery = (data)=>{
    axios.post('https://jsonplaceholder.typicode.com/photos', data).then(res=>{
        console.log(res);
        swal(`عکس  با موفقیت ایجاد شد .`,{
            icon : 'success',
            buttons : 'متوجه شدم'
        })
    }).catch(err =>{
        swal('عملیات با خطا مواجه شد' , {
            icon : 'error',
            buttons: 'متوجه شدم'
        })
    })
}

export const handleUpdateGallery = (data , id)=>{
    axios.put(`https://jsonplaceholder.typicode.com/photos/${id}`, data).then(res=>{
        console.log(res);
        swal(`عکس  با موفقیت آپدیت شد .`,{
            icon : 'success',
            buttons : 'متوجه شدم'
        })
    }).catch(err =>{
        swal('عملیات با خطا مواجه شد' , {
            icon : 'error',
            buttons: 'متوجه شدم'
        })
    })
}