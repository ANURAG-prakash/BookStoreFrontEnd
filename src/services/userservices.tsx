import Axios from './axiosservices'

const axiosservice = new Axios();
const baseUrl = 'https://localhost:44313/api/'

const confignote = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('id')}`
    }
}

class Userservice {

    Login = (data : any) => {
        console.log(`${baseUrl}User/Login`, data, false);
        return axiosservice.postMethod(`${baseUrl}User/Login`, data, false)
    }
   

    

}

export default Userservice
