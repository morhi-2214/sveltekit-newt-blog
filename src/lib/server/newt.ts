import { createClient } from 'newt-client-js';
import { NEWT_SPACE_UID, NEWT_CDN_API_TOKEN } from '$env/static/private';

export interface Article {
	_id: string;
	_sys: {
		createdAt: string;
		updatedAt: string;
		customOrder: number;
		raw: {
			createdAt: string;
			updatedAt: string;
			firstPublishedAt: string;
			publishedAt: string;
		};
	};
	title: string;
	slug: string;
	body: string;
}

export const newtClient = createClient({
	spaceUid: NEWT_SPACE_UID,
	token: NEWT_CDN_API_TOKEN,
	apiType: 'cdn'
});
