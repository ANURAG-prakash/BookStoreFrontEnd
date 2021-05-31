import Axios from './axiosservices'

const axiosservice = new Axios();
const baseUrl = 'https://localhost:44313/api/'

const configbook = {
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

    Getdata = () => {
        console.log(`${baseUrl}Books`, configbook);
        return axiosservice.getMethod(`${baseUrl}Books`, configbook)
    }
   
    Getcart = () => {
        console.log(`${baseUrl}Cart`, configbook);
        return axiosservice.getMethod(`${baseUrl}Cart`, configbook)
    }

    AddtoCart = (id : any) => {
        console.log(`${baseUrl}User/${id}/MoveToCart`, id, configbook);
        return axiosservice.putMethod(`${baseUrl}User/${id}/MoveToCart`, id, configbook)
    }

    AddtoWishList = (id : any) => {
        console.log(`${baseUrl}User/${id}/MoveToWishList`, id, configbook);
        return axiosservice.putMethod(`${baseUrl}User/${id}/MoveToWishList`, id, configbook)
    }
    

}

export default Userservice
