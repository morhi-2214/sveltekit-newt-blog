import { unified } from 'unified';
import remarkLinkCard from 'remark-link-card-plus';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import remarkGfm from 'remark-gfm';
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
			cache: true, // 画像のキャッシュ
			shortenUrl: true // リンクカード内のURLのホスト名のみを表示
		})
		.use(remarkGfm)
		.use(remark2rehype, { allowDangerousHtml: true })
		.use(rehypeCodeTitles);

	if (toc) {
		processor = processor
			.use(rehypeSlug)
			.use(rehypeAutoLinkHeadings, {
				// 目次を挿入する要素を設定
				content(node) {
					return [
						{
							type: 'element',
							tagName: 'div',
							properties: {},
							children: [
								{
									type: 'text',
									value: '[toc]'
								}
							]
						},
						{
							type: 'element',
							tagName: 'div',
							properties: {
								className: 'markdown-body'
							},
							children: [...node.children]
						}
					];
				}
			})
			.use(rehypeToc, {
				placeholder: '[toc]',
				customizeTOC(toc) {
					toc.children.unshift({
						type: 'element',
						tagName: 'h2',
						properties: {
							id: 'toc-title'
						},
						children: [
							{
								type: 'text',
								value: '目次'
							}
						]
					});
					if (toc.properties) toc.properties['aria-labelledby'] = 'toc-title';
					return toc;
				}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			}) as any;
	}

	processor = processor
		.use(rehypePrettyCode, {
			transformers: [
				/** コピーボタンを追加 */
				transformerCopyButton({
					visibility: 'always',
					feedbackDuration: 3_000
				})
			]
		})
		.use(rehypePrettyCode)
		.use(html, {
			allowDangerousHtml: true
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		}) as any;

	const { value } = await processor.process(input);
	return value.toString();
};
