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
        console.log(`${baseUrl}User/Login`, data, configbook);
        return axiosservice.postMethod(`${baseUrl}User/Login`, data, configbook)
    }

    Getdata = () => {
        console.log(`${baseUrl}Books`, configbook);
        return axiosservice.getMethod(`${baseUrl}Books`, configbook)
    }

    Getcart = () => {
        console.log(`${baseUrl}Cart`, configbook);
        return axiosservice.getMethod(`${baseUrl}Cart`, configbook)
    }

    Getwishlist = () => {
        console.log(`${baseUrl}WishList`, configbook);
        return axiosservice.getMethod(`${baseUrl}WishList`, configbook)
    }

    AddtoCart = (id : any) => {
        console.log(`${baseUrl}User/${id}/MoveToCart`, id, configbook);
        return axiosservice.putMethod(`${baseUrl}User/${id}/MoveToCart`, id, configbook)
    }

}

export default Userservice