import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		let user = {
			username:data.get('username'),
			password: data.get('password')
		};
		console.log("starting");
		const body = await api.post('users/login', user);

		if (body.errors) {
			return fail(401, body);
		}

		//const value = btoa(JSON.stringify(body.user));
		//cookies.set('jwt', value, { path: '/' });

		//throw redirect(307, '/');
	}
};
