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
