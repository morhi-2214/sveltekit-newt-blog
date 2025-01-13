import { newtClient } from '$lib/server/newt';
import { error } from '@sveltejs/kit';
import type { Article } from '$lib/server/newt';
import type { PageServerLoad } from './$types';
import { NEWT_APP_UID } from '$env/static/private';
import { markdownToHtml } from '$lib/server/markdownToHtml';

export const load: PageServerLoad = async ({ params }) => {
	const article = await newtClient.getFirstContent<Article>({
		appUid: NEWT_APP_UID,
		modelUid: 'article',
		query: {
			slug: params.slug,
			select: ['_id', '_sys', 'title', 'slug', 'body'],
			body: {
				fmt: 'text'
			}
		}
	});

	if (article === null) {
		error(404, {
			message: `記事（${params.slug}）が見つかりませんでした`
		});
	}

	// MarkdownをHTMLに変換
	const contents = await markdownToHtml(article.body);

	return {
		article: {
			...article,
			body: contents
		}
	};
};
