import axios from 'axios';


export default {
    request(url, data, method) {
        return axios({
            method: method || 'get',
            url,
            data
        });
    }
}