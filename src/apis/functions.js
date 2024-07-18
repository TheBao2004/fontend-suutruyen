import axios from 'axios';
import { env } from '../helpers/const';


const getLastChapComic = async () => {

    try {
        const response = await axios.get(env.HOST_API_ADMIN + '/comic/last-chap', {
            headers: {
            'Authorization': 'Bearer your_token',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return false;
        console.log('Error contect to serve !!!');
    }

}

const getNewComic = async () => {

    try {
        const response = await axios.get(env.HOST_API_ADMIN + '/comic/new', {
            headers: {
            'Authorization': 'Bearer your_token',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return false;
        console.log('Error contect to serve !!!');
    }

}

const getListCategory = async () => {

    try {
        const response = await axios.get(env.HOST_API_ADMIN + '/category/list', {
            headers: {
            'Authorization': 'Bearer your_token',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return false;
        console.log('Error contect to serve !!!');
    }

}

const getFullComic = async () => {

    try {
        const response = await axios.get(env.HOST_API_ADMIN + '/comic/full', {
            headers: {
            'Authorization': 'Bearer your_token',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return false;
        console.log('Error contect to serve !!!');
    }

}

const getCategoryComic = async (slug) => {

    try {
        const response = await axios.get(env.HOST_API_ADMIN + '/comic/category/' + slug, {
            headers: {
            'Authorization': 'Bearer your_token',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return false;
        console.log('Error contect to serve !!!');
    }

}

const getDetailComic = async (slug) => {

    try {
        const response = await axios.get(env.HOST_API_ADMIN + '/comic/detail/' + slug, {
            headers: {
            'Authorization': 'Bearer your_token',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return false;
        console.log('Error contect to serve !!!');
    }

}

const getItemChapComic = async (link) => {
    try {
        const response = await axios.get(link, {
            headers: {
            'Authorization': 'Bearer your_token',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return false;
        console.log('Error contect to serve !!!');
    }

}

const getDetailChap = async (slug) => {

    try {
        const response = await axios.get(env.HOST_API_ADMIN + '/chap/detail/' + slug, {
            headers: {
            'Authorization': 'Bearer your_token',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return false;
        console.log('Error contect to serve !!!');
    }

}

export {
    getLastChapComic,
    getDetailChap,
    getDetailComic,
    getItemChapComic,
    getCategoryComic,
    getFullComic,
    getListCategory,
    getNewComic,
}