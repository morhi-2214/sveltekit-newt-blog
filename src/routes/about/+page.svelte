<script lang="ts">
	import ExperienceCard from './ExperienceCard.svelte';
	import SkillCard from './SkillCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>About - OimOyaの技術ブログ</title>
	<meta name="description" content="OimOyaのポートフォリオページです。" />
</svelte:head>

<div class="mx-auto max-w-3xl">
	<h1 class="text-3xl font-bold">About</h1>

	<section class="mt-8">
		<div class="mt-4 rounded-lg bg-white p-6 shadow-sm">
			<div class="flex items-center gap-8">
				{#if data.author?.profileImage}
					<img
						src={data.author.profileImage.src}
						alt={data.author.profileImage.altText}
						class="h-24 w-24 rounded-full object-cover"
					/>
				{/if}
				<div>
					<h3 class="text-2xl font-bold">{data.author?.fullName}</h3>
					<p class="mt-4 leading-6 text-gray-600">
						{@html data.author?.biography}
					</p>
				</div>
			</div>
			<div class="mb-8">
				<h3 class="text-lg font-bold">趣味</h3>
				<ul class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
					<li class="flex items-center gap-3">
						<span class="rounded-full bg-gray-100 p-2">💻</span>
						<span>プログラミング</span>
					</li>
					<li class="flex items-center gap-3">
						<span class="rounded-full bg-gray-100 p-2">⛰️</span>
						<span>登山</span>
					</li>
					<li class="flex items-center gap-3">
						<span class="rounded-full bg-gray-100 p-2">🌱</span>
						<span>植物観察</span>
					</li>
					<li class="flex items-center gap-3">
						<span class="rounded-full bg-gray-100 p-2">🦅</span>
						<span>バードウォッチング</span>
					</li>
					<li class="flex items-center gap-3">
						<span class="rounded-full bg-gray-100 p-2">🏀</span>
						<span>バスケットボール</span>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-lg font-bold">SNS</h3>
				<div class="mt-4 flex gap-4">
					<a
						href="https://github.com/morhi-2214"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-700"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>GitHub</span>
					</a>
					<a
						href="https://x.com/kmkm84pS"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 rounded-md bg-[#1DA1F2] px-4 py-2 text-white transition-colors hover:bg-[#1a8cd8]"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
							/>
						</svg>
						<span>Twitter</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-12">
		<h2 class="text-xl font-bold">実績（抜粋）</h2>
		<div class="mt-4 space-y-4">
			<ExperienceCard
				title="物件管理・決済モバイルアプリ／管理画面開発"
				period="2023年4月 - 現在"
				description="プロジェクトの立ち上げから参画し、フロントエンド開発のリードを担当。複数人のメンバー育成にも関わり、コードレビューや技術サポートを実施。"
				techs={['Nuxt3', 'TypeScript', 'Firebase', 'Flutter', 'Sentry', 'GA4', 'GCP']}
			/>
			<ExperienceCard
				title="企業内業務改善システム開発"
				period="2022年10月 - 2023年3月"
				description="AWS Amplifyを活用した業務改善システムの開発を担当。Next.js（App Router / Server Actions）とAWS（Step Functions, Lambda, Cognitoなど）を活用したモダンな開発を実施。"
				techs={['Next.js', 'TypeScript', 'AWS Step Functions', 'AWS Lambda', 'Cognito']}
			/>
		</div>
	</section>

	<section class="mt-12">
		<h2 class="text-xl font-bold">個人開発プロジェクト</h2>
		<div class="mt-4 space-y-4">
			<div class="rounded-lg bg-white p-6 shadow-sm">
				<h3 class="text-lg font-bold">OimOyaの技術ブログ</h3>
				<p class="mt-2 text-gray-600">
					SvelteKitとNewtを使用した技術ブログ。Markdownでの記事管理、タグ機能、ページネーション機能を実装。
				</p>
				<div class="mt-4 flex flex-wrap gap-2">
					<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">SvelteKit</span>
					<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">Newt</span>
					<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">TailwindCSS</span>
				</div>
				<div class="mt-4">
					<a
						href="https://github.com/morhi-2214/sveltekit-newt-blog"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-blue-600 hover:underline"
					>
						GitHubリポジトリ →
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-12">
		<h2 class="text-xl font-bold">技術スタック</h2>
		<div class="mt-4 space-y-4">
			<SkillCard
				category="フロントエンド"
				skills={[
					'TypeScript',
					'React',
					'Next.js',
					'Vue.js',
					'Nuxt.js',
					'Svelte',
					'SvelteKit',
					'Flutter',
					'Flutter Webview',
					'TailwindCSS'
				]}
			/>
			<SkillCard
				category="バックエンド"
				skills={['Node.js', 'AWS Amplify', 'AWS Lambda', 'AWS Step Functions', 'Firebase']}
			/>
			<SkillCard
				category="その他"
				skills={[
					'Git',
					'GitHub Actions',
					'Docker',
					'Google Cloud Platform',
					'Figma',
					'Storybook',
					'Vitest',
					'Playwright',
					'Sentry',
					'GA4',
					'GTM'
				]}
			/>
		</div>
	</section>

	<section class="mt-12">
		<h2 class="text-xl font-bold">資格・認定</h2>
		<div class="mt-4 rounded-lg bg-white p-6 shadow-sm">
			<ul class="space-y-4">
				<li class="flex items-center gap-4">
					<span class="rounded-full bg-blue-100 p-2 text-blue-600">🔑</span>
					<div>
						<h3 class="font-bold">AWS Certified Cloud Practitioner</h3>
						<p class="text-sm text-gray-500">2024年4月取得</p>
					</div>
				</li>
				<li class="flex items-center gap-4">
					<span class="rounded-full bg-green-100 p-2 text-green-600">🎯</span>
					<div>
						<h3 class="font-bold">TOEIC 775点</h3>
						<p class="text-sm text-gray-500">2020年3月取得</p>
					</div>
				</li>
			</ul>
		</div>
	</section>

	<section class="mb-16 mt-12">
		<h2 class="text-xl font-bold">今後の展望</h2>
		<div class="mt-4 rounded-lg bg-white p-6 shadow-sm">
			<p class="text-gray-700">
				AIを活用した開発スピードの向上、マネジメント能力の向上を目指しています。特に、大規模言語モデルを活用した開発効率化と、チームマネジメントスキルの習得に注力していきたいと考えています。
			</p>
		</div>
	</section>
</div>
