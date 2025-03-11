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
			<div class="mt-8">
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
		</div>
	</section>

	<section class="mt-12">
		<h2 class="text-xl font-bold">実績（抜粋）</h2>
		<div class="mt-4 space-y-4">
			<ExperienceCard
				title="駐車場管理・決済アプリ／管理画面開発"
				period="2023年4月 - 現在"
				description="プロジェクトの立ち上げから参画し、フロントエンド開発のリードを担当。複数人のメンバー育成にも関わり、コードレビューや技術サポートを実施。"
				techs={['Nuxt3', 'TypeScript', 'Firebase', 'Flutter', 'Sentry', 'GA4', 'GCP']}
			/>
			<ExperienceCard
				title="グループ企業の業務改善システム開発"
				period="2022年10月 - 2023年3月"
				description="AWS Amplifyを活用した業務改善システムの開発を担当。Next.js（App Router / Server Actions）とAWS（Step Functions, Lambda, Cognitoなど）を活用したモダンな開発を実施。"
				techs={['Next.js', 'TypeScript', 'AWS Step Functions', 'AWS Lambda', 'Cognito']}
			/>
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

	<section class="mb-16 mt-12">
		<h2 class="text-xl font-bold">今後の展望</h2>
		<div class="mt-4 rounded-lg bg-white p-6 shadow-sm">
			<p class="text-gray-700">
				AIを活用した開発スピードの向上、マネジメント能力の向上を目指しています。特に、大規模言語モデルを活用した開発効率化と、チームマネジメントスキルの習得に注力していきたいと考えています。
			</p>
		</div>
	</section>
</div>
