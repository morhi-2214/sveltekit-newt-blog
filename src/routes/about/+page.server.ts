import { newtClient } from '$lib/server/newt';
import type { Author } from '$lib/server/newt';
import type { PageServerLoad } from './$types';
import { NEWT_APP_UID } from '$env/static/private';

export const load: PageServerLoad = async () => {
	const author = await newtClient.getFirstContent<Author>({
		appUid: NEWT_APP_UID,
		modelUid: 'author'
	});

	return {
		author
	};
};
