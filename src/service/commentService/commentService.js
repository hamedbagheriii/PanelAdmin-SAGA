import axios from "axios"
import swal from "sweetalert";


export const handleSetComment = (data)=>{
    axios.post('https://jsonplaceholder.typicode.com/comments', data).then(res=>{
        console.log(res);
        swal(`نظر  با موفقیت ایجاد شد .`,{
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

export const handleUpdateComment = (data , id)=>{
    axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`, data).then(res=>{
        console.log(res);
        swal(`نظر  با موفقیت آپدیت شد .`,{
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