import axios from 'axios';
import { browser } from '$app/env';

export async function request(
	method: any,
	endpoint: string,
	data?: any,
	headers?: any
): Promise<unknown> {
	try {
		const url = `${import.meta.env.VITE_BACK_URL}${endpoint}`;
		const response = await axios({ method, url, headers, data });
		return response.data;
	} catch (error) {
		console.error(error.message);
		return { error: error.message };
	}
}

export function validateEmail(email: string): RegExpMatchArray {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
}

export async function authUser(email: string, password: string): Promise<boolean> {
	const res = await axios({
		url: 'http://localhost:8080/auth/local/login',
		method: 'post',
		data: {
			email,
			password
		}
	});
	if (res.status == 200) {
		browserSet('jwt', res.data.access_token);
	}
	if (res.status == 403) {
		alert(res.data.message);
	}
	return true;
}

export function browserGet(key: string): string {
	if (browser) {
		const item = localStorage.getItem(key);
		if (item) {
			return JSON.parse(item);
		}
	}
	return null;
}

function browserSet(key: string, value: string): void {
	if (browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
}
