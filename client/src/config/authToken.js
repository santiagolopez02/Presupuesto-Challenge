import clientAxios from './axios';

const authToken = token => {
    if(token){
        clientAxios.defaults.headers.common['authorization'] = token
    }else{
        delete clientAxios.defaults.headers.common['authorization'];
    }
}

export default authToken;