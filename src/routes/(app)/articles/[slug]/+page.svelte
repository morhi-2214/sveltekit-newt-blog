<script lang="ts">
	import type { PageProps } from './$types';
	import { formatDate } from '$lib/utils/date';
	import { onMount } from 'svelte';

	let { data }: PageProps = $props();
	let tocOpen = false;

	// TODO: 自動生成しているために目次のDOMを取得して加工している。rehype-tocの方で実装できそうであればそちらに移行する
	onMount(() => {
		const tocContainer = document.querySelector('.toc-container');
		if (tocContainer) {
			const tocList = tocContainer.querySelector('.toc-list');
			if (tocList) {
				const header = document.createElement('div');
				header.className = 'toc-header';
				header.textContent = '目次';

				const content = document.createElement('div');
				content.className = 'toc-content';

				content.appendChild(tocList);
				tocContainer.innerHTML = '';
				tocContainer.appendChild(header);
				tocContainer.appendChild(content);

				// コンテンツの高さを計算して設定
				const setContentHeight = () => {
					const list = content.querySelector('.toc-list');
					if (list) {
						const height = list.getBoundingClientRect().height;
						content.style.setProperty('--content-height', `${height}px`);
					}
				};

				// 初期設定
				setContentHeight();
				// ウィンドウリサイズ時にも高さを再計算
				window.addEventListener('resize', setContentHeight);

				// クリックイベントを追加
				header.addEventListener('click', () => {
					tocOpen = !tocOpen;
					header.classList.toggle('open');
					content.classList.toggle('open');
				});

				// アンカーリンクのスムーズスクロール
				const links = tocContainer.querySelectorAll('a');
				links.forEach((link) => {
					link.addEventListener('click', (e) => {
						e.preventDefault();
						const href = link.getAttribute('href');
						if (href) {
							const target = document.querySelector(href);
							if (target) {
								target.scrollIntoView({ behavior: 'smooth' });
							}
						}
					});
				});
			}
		}
	});
</script>

<svelte:head>
	<title>{data.article.title}</title>
	<meta name="description" content="投稿詳細ページです" />
</svelte:head>

<div class="mx-auto my-5">
	<a href="/" class="flex items-center text-opacity-80 hover:underline"> ← 記事一覧に戻る</a>
</div>

<article>
	<div class="text-center">
		<h1 class="mt-4 text-2xl font-bold md:text-4xl">
			{data.article.title}
		</h1>
		<time class="mt-2 block text-sm text-gray-500" datetime={data.article._sys.createdAt}>
			{formatDate(new Date(data.article._sys.createdAt), 'YYYY.M.D')}
		</time>
		{#if data.article.tags?.length > 0}
			<div class="mt-4 flex justify-center gap-2">
				{#each data.article.tags as tag}
					<a
						href="/tags/{tag.slug}"
						class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600 transition-colors duration-300 hover:bg-gray-200"
					>
						{tag.name}
					</a>
				{/each}
			</div>
		{/if}
	</div>
	<div class="markdown-body mx-auto mt-4 rounded-lg bg-white p-6">
		{@html data.article.body}
	</div>
</article>
