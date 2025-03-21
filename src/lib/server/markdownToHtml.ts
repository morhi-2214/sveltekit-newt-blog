import { unified } from 'unified';
import remarkLinkCard from 'remark-link-card-plus';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import html from 'rehype-stringify';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import rehypeSlug from 'rehype-slug';
import rehypeToc from '@atomictech/rehype-toc';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';

export const markdownToHtml = async (
	input: string,
	{
		toc = true
	}: {
		toc?: boolean;
	} = {}
): Promise<string> => {
	let processor = unified()
		.use(markdown)
		.use(remarkLinkCard, {
			// cache: true, // 画像のキャッシュ
			shortenUrl: true // リンクカード内のURLのホスト名のみを表示
		})
		.use(remarkGfm)
		.use(remarkBreaks)
		.use(remark2rehype, { allowDangerousHtml: true })
		.use(rehypeCodeTitles);

	if (toc) {
		processor = processor
			.use(rehypeSlug)
			.use(rehypeToc, {
				headings: ['h1', 'h2'],
				cssClasses: {
					toc: 'toc-container',
					link: 'toc-link',
					listItem: 'toc-list-item',
					list: 'toc-list'
				}
			})
			.use(rehypeAutoLinkHeadings, {
				behavior: 'append',
				properties: {
					className: ['anchor'],
					ariaHidden: 'true'
				},
				content: {
					type: 'element',
					tagName: 'span',
					properties: {
						className: ['anchor-icon', 'ml-2', 'text-gray-400', 'hover:text-gray-600']
					},
					children: [{ type: 'text', value: '#' }]
				}
			});
	}

	processor = processor
		.use(rehypePrettyCode, {
			transformers: [
				transformerCopyButton({
					visibility: 'always',
					feedbackDuration: 3_000
				})
			]
		})
		.use(html, {
			allowDangerousHtml: true
		})
		.process(input);

	const { value } = await processor;
	return value.toString();
};
