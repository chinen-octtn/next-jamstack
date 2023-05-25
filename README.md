# ローカル開発環境

## 動作確認済みスペック

- Mac OS Ventura
- Node.js v18.16.0
- npm v9.5.1

## 推奨エディタ

[Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)

### VS Code 拡張機能(Extensions)

コードのフォーマットのため、下記 Extensions を追加してください。

- EditorConfig for VS Code
- Prettier - Code formatter
- Stylelint
- ESLint

## セットアップ - 初回のみ

```bash
npm install
```

## localhost 起動

```bash
npm run dev
```

## Storybook 起動

```bash
npm run storybook
```

# ディレクトリ

```
root
├─ /out/・・・SSGの出力先（この中のファイルを触るのはNG）
├─ /public/・・・静的ファイルを格納
└─ /src/・・・開発コードを格納
```

## src

開発コードは src 配下に格納します。

App Router を採用しています。

```
例）
/src/
  ├─ app/・・・Routing
  │    ├─ global.css・・・resetなどのグローバルスタイル
  │    │
  │    ├─ layout.tsx・・・サイト全体の共通設定
  │    │
  │    ├─ (default)/・・・基本的なページを格納 ※別テンプレートが必要になったら(folder)を追加する
  │    │    ├─ layout.scss・・・ヘッダー・フッターなどのレイアウト
  │    │    ├─ page.tsx・・・トップページ
  │    │    │
  │    │    └─ sample/・・・下層ディレクトリ
  │    │        └─ page.tsx・・・下層ページ
  │    │
  │    └─ (folder)・・・必要あれば追加
  │
  ├─ components/・・・コンポーネントを格納
  │    ├─ Feature/・・・機能ごとのコンポーネント（使わないかも）
  │    ├─ Pages/・・・ルーティングのページごとに作成（レイアウト調整用）
  │    └─ Parts/・・・ボタンやカードなどの汎用パーツ
  │
  ├─ hooks/・・・カスタムフックを格納
  │
  └─ utils/・・・汎用的な関数を格納（必要あれば）
```

## コンポーネントの作成ルール

コンポーネントは、`/src/components/` 配下に作成します。

`/src/app/` の page.tsx には見た目に関するコードは書かず、対応する `/src/components/Pages/` コンポーネントを呼び出すだけにします。

## `/src/components/Parts/`

ボタンやカードなど再利用可能なコンポーネントを格納します。

Storybook で確認できるように、コンポーネントごとにディレクトリを作成してください。

コマンドで関連ファイルを生成できるようにしています。

```bash
npm run parts
```

## `/src/components/Pages/`

Parts コンポーネントを呼び出し、配置や余白等のレイアウトを決めるコンポーネントを格納します。

コマンドで関連ファイルを生成できるようにしています。

```bash
npm run pages
```

## `/src/components/Feature/`

機能ごとに分割できるコンポーネントを格納する予定ですが、使い道がないかもしれません。[WIP]

---

# Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
