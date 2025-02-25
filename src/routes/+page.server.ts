import { newtClient } from '$lib/server/newt';
import type { Article, Author } from '$lib/server/newt';
import type { PageServerLoad } from './$types';
import { NEWT_APP_UID } from '$env/static/private';

export const load: PageServerLoad = async () => {
	const [articles, author] = await Promise.all([
		newtClient.getContents<Article>({
			appUid: NEWT_APP_UID,
			modelUid: 'article'
		}),
		newtClient.getFirstContent<Author>({
			appUid: NEWT_APP_UID,
			modelUid: 'author'
		})
	]);

	return {
		articles: articles.items,
		author: author
	};
};
