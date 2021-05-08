import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.funtranslations.com/translate/',
    headers: {
        //Authorization: 'Bearer '
    }
});

