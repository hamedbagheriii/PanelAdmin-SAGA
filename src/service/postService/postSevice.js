import axios from "axios"
import swal from "sweetalert";


export const handleSetPost = (data)=>{
    axios.post('https://jsonplaceholder.typicode.com/users', data).then(res=>{
        console.log(res);
        swal(`پست  با موفقیت ایجاد شد .`,{
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

export const handleUpdatePost = (data , postId)=>{
    axios.put(`https://jsonplaceholder.typicode.com/users/${postId}`, data).then(res=>{
        console.log(res);
        swal(`پست  با موفقیت آپدیت شد .`,{
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