import { newtClient } from '$lib/server/newt';
import type { Article } from '$lib/server/newt';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const article = await newtClient.getFirstContent<Article>({
		appUid: 'blog',
		modelUid: 'article',
		query: {
			slug: params.slug,
			select: ['_id', '_sys', 'title', 'slug', 'body']
		}
	});

	return {
		article
	};
};
