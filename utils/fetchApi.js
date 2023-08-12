import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '0ad360b06amsh40e10cb714d496bp1487f1jsn91a209164312',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}