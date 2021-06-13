import axios from 'axios';
import { baseURL } from './constants';


export const adminLogin = async (userName, password) => {
	const response = await axios.post(`${baseURL}/auth/login`, {
		'username':userName,
		password,
	});
    return {
		access_token : response.data.data.access_token,
		username: response.data.data.admin.username,
		first_name : response.data.data.admin.first_name,
        last_name:response.data.data.admin.last_name,
        role:response.data.data.admin.role
	};

};

export const fetchCategories = async() => {
	const response = await axios.get(`${baseURL}/categories`);
	return (response.data.data);

}

export const fetchProducts = async(catId) => {
	const response = await axios.get(`${baseURL}/products/${catId}`);
	return (response.data.data);

}

export const deleteProduct = async(id) => {
	const response = await axios.post(`${baseURL}/product/delete/${id}`);
	return (response.data.data);

}
export const getProductById = async(id) => {
	const response = await axios.get(`${baseURL}/product/${id}`);
	return (response.data.data);

}
export const uploadProduct = async(data)=>{
	const config = {
		headers: { 'content-type': 'multipart/form-data' }
	   }
	const response = await axios.post(`${baseURL}/product/upload`, data, config);
		// console.log(image1);
		return (response.data.data);
	}