import { newtClient } from '$lib/server/newt';
import type { Article, Tag } from '$lib/server/newt';
import type { PageServerLoad } from './$types';
import { NEWT_APP_UID } from '$env/static/private';
import { error } from '@sveltejs/kit';

// プリレンダリングを有効化
export const prerender = false;

const PER_PAGE = 20;

export const load: PageServerLoad = async ({ params, url }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	const skip = (page - 1) * PER_PAGE;

	const tag = await newtClient.getFirstContent<Tag>({
		appUid: NEWT_APP_UID,
		modelUid: 'tag',
		query: {
			slug: params.slug
		}
	});

	if (!tag) {
		error(404, {
			message: `タグ（${params.slug}）が見つかりませんでした`
		});
	}

	const articlesRes = await newtClient.getContents<Article>({
		appUid: NEWT_APP_UID,
		modelUid: 'article',
		query: {
			tags: tag._id,
			limit: PER_PAGE,
			skip
		}
	});

	return {
		tag,
		articles: articlesRes.items,
		totalPages: Math.ceil(articlesRes.total / PER_PAGE),
		currentPage: page
	};
};
