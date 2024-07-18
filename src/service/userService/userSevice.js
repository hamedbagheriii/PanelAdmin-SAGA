import axios from "axios"
import swal from "sweetalert";


export const handleSetUser = (data)=>{
    axios.post('https://jsonplaceholder.typicode.com/users', data).then(res=>{
        console.log(res);
        swal(`کاربر ${data.name}  با موفقیت ایجاد شد .`,{
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

export const handleUpdateUser = (data , userId)=>{
    axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, data).then(res=>{
        console.log(res);
        swal(`کاربر ${data.name}  با موفقیت آپدیت شد .`,{
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