import { newtClient } from '$lib/server/newt';
import type { Tag } from '$lib/server/newt';
import type { PageServerLoad } from './$types';
import { NEWT_APP_UID } from '$env/static/private';

export const load: PageServerLoad = async () => {
	const tagsRes = await newtClient.getContents<Tag>({
		appUid: NEWT_APP_UID,
		modelUid: 'tag',
		query: {
			select: ['_id', 'name', 'slug']
		}
	});

	// 各タグの記事数を取得
	const tagsWithCount = await Promise.all(
		tagsRes.items.map(async (tag) => {
			const count = await newtClient.getContents({
				appUid: NEWT_APP_UID,
				modelUid: 'article',
				query: {
					tags: tag._id,
					select: ['_id']
				}
			});
			return {
				...tag,
				count: count.total
			};
		})
	);

	return {
		tags: tagsWithCount
	};
};
