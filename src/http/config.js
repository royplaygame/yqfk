import axios from 'axios'
import {Message} from 'element-ui'

// http请求拦截
axios.interceptors.request.use(function(config){
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    // if(config.url !== '/login' && config.url !== '/developer/getPhoneCode' && config.url !=='/developer/createApp' ){
    //     let userTOken = sessionStorage.getItem('userToken')
    //     let userId = sessionStorage.getItem('userId')
    //     if(userId == null || userTOken == null){
    //         window.location.href='#/login'
    //     }else{
    //         config.data.user_token = userTOken
    //         config.data.user_id = userId
    //     }
        
    // }
    return config
},function(error){
})
// http响应拦截器
axios.interceptors.response.use(({data})=>{
    let self = this
    switch (data.code){
        case '200':
        break
        default:
        break
    }
    // 用户在线超时
    if(data.code == 1004){
        Message.error(data.msg)
        window.location.href = '#/login'
    }
    // 异常返回,给出相应信息
    if( data.code == 1002 || data.code == 1003|| data.code == 1005|| data.code == 1007
        || data.code == 1009){
        Message.error(data.msg)
        window.location.href = '#/login'
    }
    if(data.code == 1001 || data.code == 1006 ||  data.code == 1008 || data.code == 1011|| data.code == 1012|| data.code == 1013|| data.code == 1014|| data.code == 1010){
        Message.error(data.msg)
    }else if(data.code !== '0'){
        Message.info(data.msg)
    }

    
    return Promise.resolve(data)
},error=>{
    if(error.response){
        if(error.response.status == 504){
            Message.error('服务器连接超时')
        }
        if(error.response.status == 500){
            Message.error('服务器错误')
        }
        if(error.response.status == 404){
            Message.error('客户端错误')
        }
        if(error.response.status == 400){
            Message.error('客户端错误')
        }
        return Promise.reject(error.response.data)
    }
}
)
export default axios