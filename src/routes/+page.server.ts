import { newtClient } from '$lib/server/newt';
import type { Article, Author } from '$lib/server/newt';
import type { PageServerLoad } from './$types';
import { NEWT_APP_UID } from '$env/static/private';

const PER_PAGE = 20;

export const load: PageServerLoad = async ({ url }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	const skip = (page - 1) * PER_PAGE;

	const [articlesRes, author] = await Promise.all([
		newtClient.getContents<Article>({
			appUid: NEWT_APP_UID,
			modelUid: 'article',
			query: {
				limit: PER_PAGE,
				skip
			}
		}),
		newtClient.getFirstContent<Author>({
			appUid: NEWT_APP_UID,
			modelUid: 'author'
		})
	]);

	return {
		articles: articlesRes.items,
		totalPages: Math.ceil(articlesRes.total / PER_PAGE),
		currentPage: page,
		author
	};
};
