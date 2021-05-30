import axios from 'axios'

class Axios {

postMethod = (url: any, data : any, isHeaderRequired : any) =>{
    return axios.post(url, data, isHeaderRequired)
}
}

export default Axios