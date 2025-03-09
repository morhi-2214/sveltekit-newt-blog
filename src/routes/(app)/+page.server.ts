import { newtClient } from '$lib/server/newt';
import type { Article } from '$lib/server/newt';
import type { PageServerLoad } from './$types';
import { NEWT_APP_UID } from '$env/static/private';

export const load: PageServerLoad = async () => {
	const latestArticles = await newtClient.getContents<Article>({
		appUid: NEWT_APP_UID,
		modelUid: 'article',
		query: {
			limit: 6
		}
	});

	return {
		latestArticles: latestArticles.items
	};
};
