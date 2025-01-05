import { createClient } from 'newt-client-js';
import { NEWT_SPACE_UID, NEWT_CDN_API_TOKEN } from '$env/static/private';

export interface Article {
	_id: string;
	_sys: {
		createdAt: Date;
		updatedAt: Date;
		customOrder: number;
		raw: {
			createdAt: Date;
			updatedAt: Date;
			firstPublishedAt: Date;
			publishedAt: Date;
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
