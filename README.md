# DIA Blog

## 概要

- アプリ名: "DIA Blog"
- このアプリは、普段の生活や日常の中で起こった出来事の記録や日記等、考えたことや感じたことを様々な人に共有することを主な使用用途とし、一般の人々を対象としている。
- "DIA Blog"というアプリ名は、宝石のダイヤモンドの"**Dia**mond"と、日記を意味する"**Dia**ry"から由来する。

## 開発の背景・経緯

- 開発者は以前にウェブブラウザで実行されるフロントエンド部分のみで完結する Todo アプリの開発を通じ、「React」を使ったモダンウェブ開発の基礎について学んだ。今回開発を行ったこのアプリは、Next.js をフレームワークとして使用し、サーバ上で実行されるバックエンド部分を含めた「本格的なモダンウェブアプリ開発」 について体験的に学ぶことを目的としている。

## 公開 URL

https://next-blog-app-megumegu256.vercel.app/

## 特徴と機能の説明

- スクリーンショットや動画 (アニメ) を添えながら基本機能や工夫点を解説する。
- 最低でも 3 個ぐらいは、特徴を箇条書きしましょう。
- この項目の情報量が評価に大きく関係します。

  - 特に認証をログインを必要とする画面や機能は、ここで記述しないと評価者に伝わらない。

- 公開 URL にアクセスすると、まず投稿記事一覧が表示される。ここでは現在投稿されている記事それぞれの投稿年月日、タイトル、本文、カテゴリが表示される。

## 使用技術 (技術スタック)

### 使用した言語やフレームワーク

- TypeScript:
  - JavaScript に型安全性を追加したプログラミング言語。
- Next.js:
  - React ベースのフルスタックフレームワーク。
- Prisma:
  - データベースとのやり取りをサポートする ORM (Object-Relational Mapping)。

### ライブラリ

- @fortawesome/fontawesome-svg-core:
  - FontAwesome の SVG アイコンを使用するためのコアライブラリ。
- @fortawesome/free-solid-svg-icons:
  - FontAwesome の無料のソリッドアイコンセット。
- @fortawesome/react-fontawesome:
  - React で FontAwesome アイコンを使用するためのコンポーネント。
- @prisma/client:
  - Prisma のクライアントライブラリ。データベースとのやり取りを簡単にするための ORM。
- @supabase/supabase-js:
  - Supabase の JavaScript クライアントライブラリ。認証やデータベース操作を行うために使用。
- crypto-js:
  - JavaScript で暗号化やハッシュ化を行うためのライブラリ。
- isomorphic-dompurify:
  - サーバーサイドとクライアントサイドの両方で DOMPurify を使用するためのライブラリ。
- next:
  - Next.js フレームワーク。React ベースのサーバーサイドレンダリングと静的サイト生成をサポート。
- react:
  - ユーザーインターフェースを構築するための JavaScript ライブラリ。
- react-dom:
  - React の DOM 操作ライブラリ。React コンポーネントを DOM にレンダリングするために使用。

### ツールやウェブサービス

- VSCode:
  - コードエディタとして使用。
- Supabase:
  - バックエンドのデータベース・認証管理のため使用。
- Vercel:
  - デプロイ・ホスティングのため使用。

## 開発期間・体制

- 開発体制: 個人開発
- 開発期間: 2024.12 ~ 2025.2 (約 39 時間)

## 工夫した点・苦労した点

- 特に、技術的な目標や挑戦を持って取り組んだ場合は記載すると良いです。

## 既知の課題と今後の展望

- 改良・改善したいこと。
  サインイン・アカウント作成機能、

## ポートフォリオ URL

https://megumegu256.github.io/portfolio/portfolio.html
