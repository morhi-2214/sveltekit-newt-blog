# SvelteKit Newt Blog

NewtとSvelteKitを使用したブログサイトです。

## 機能

- Markdownコンテンツのレンダリング
- シンタックスハイライト付きコードブロック
- コードブロックのコピーボタン
- 目次の自動生成
- リンクカードの表示

## 技術スタック

- [SvelteKit](https://kit.svelte.dev/)
- [Newt](https://www.newt.so/) (ヘッドレスCMS)
- [TailwindCSS](https://tailwindcss.com/)
- [unified](https://unifiedjs.com/) (Markdownパーサー)
- [rehype](https://github.com/rehypejs/rehype) / [remark](https://github.com/remarkjs/remark) (Markdownプラグイン)

## セットアップ

1. 環境変数の設定:

```bash
NEWT_SPACE_UID=your_space_uid
NEWT_CDN_API_TOKEN=your_api_token
NEWT_APP_UID=your_app_uid
```

2. 依存パッケージのインストール:

```bash
bash
npm install
```

3. 開発サーバーの起動:

```bash
npm run dev
```

## デプロイ

```bash
npm run build
```

## テスト

```bash
npm run test
```

## ライセンス

MIT
