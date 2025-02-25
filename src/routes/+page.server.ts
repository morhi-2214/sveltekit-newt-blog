import { newtClient } from '$lib/server/newt';
import type { Article } from '$lib/server/newt';
import type { PageServerLoad } from './$types';
import { NEWT_APP_UID } from '$env/static/private';

export const load: PageServerLoad = async () => {
	const { items: articles } = await newtClient.getContents<Article>({
		appUid: NEWT_APP_UID,
		modelUid: 'article'
	});

	return {
		articles
	};
};
