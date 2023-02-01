/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }) {
	const jwt = event.cookies.get('jwt');
	console.log("Decoded JWT" + atob(jwt));
	event.locals.user = jwt ? JSON.parse(atob(jwt)) : null;

	return resolve(event);
}
