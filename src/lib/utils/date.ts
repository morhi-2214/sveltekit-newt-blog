import { format, type FormatOptions } from '@formkit/tempo';

/**
 * 日付をフォーマット
 * URL：https://tempo.formkit.com/
 */
const locale = 'ja';
const tz = 'Asia/Tokyo';

export const formatDate = (date: Date, style: FormatOptions['format']): string => {
	return format({ date, format: style, locale, tz });
};
