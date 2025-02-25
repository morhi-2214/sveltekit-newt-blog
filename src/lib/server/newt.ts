import { createClient } from 'newt-client-js';
import { NEWT_SPACE_UID, NEWT_CDN_API_TOKEN } from '$env/static/private';

export interface Article {
	_id: string;
	_sys: {
		createdAt: string;
		updatedAt: string;
		customOrder: 3;
		raw: {
			createdAt: string;
			updatedAt: string;
			firstPublishedAt: string;
			publishedAt: string;
		};
	};
	title: string;
	slug: string;
	meta: {
		title: string;
		description: string;
		ogImage: {
			_id: string;
			src: string;
			fileName: string;
			fileType: string;
			fileSize: number;
			width: number;
			height: number;
			title: string;
			altText: string;
			description: string;
		};
	};
	body: string;
	coverImage: {
		_id: string;
		src: string;
		fileName: string;
		fileType: string;
		fileSize: number;
		width: number;
		height: number;
		title: string;
		altText: string;
		description: string;
		author: string;
		tags: string[];
	};
}

export interface Author {
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
	fullName: string;
	slug: string;
	biography: string;
	profileImage: {
		_id: string;
		src: string;
		fileName: string;
		fileType: string;
		fileSize: number;
		width: number;
		height: number;
		title: string;
		altText: string;
		description: string;
	};
}
export interface Tag {
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
	name: string;
	slug: string;
}

export const newtClient = createClient({
	spaceUid: NEWT_SPACE_UID,
	token: NEWT_CDN_API_TOKEN,
	apiType: 'cdn'
});
