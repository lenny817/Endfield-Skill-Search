# エンドフィールド スキル検索 - Vue.js版

Vue 3 + Viteで構築されたアークナイツ：エンドフィールドのスキル検索ツールです。

## プロジェクト構成

```
endfield/
├── src/
│   ├── components/
│   │   ├── Header.vue          # ヘッダーコンポーネント
│   │   ├── Footer.vue          # フッターコンポーネント
│   │   ├── FilterSection.vue   # フィルター機能コンポーネント
│   │   ├── Stats.vue           # 統計情報コンポーネント
│   │   ├── DataTable.vue       # テーブルコンポーネント
│   │   ├── TableRow.vue        # テーブル行コンポーネント
│   │   └── SkillBadge.vue      # スキルバッジコンポーネント
│   ├── App.vue                 # メインアプリケーション
│   ├── main.js                 # エントリーポイント
│   └── style.css               # グローバルスタイル
├── data.json                   # スキルデータ
├── index.html                  # HTMLテンプレート
├── package.json                # プロジェクト設定
├── vite.config.js              # Vite設定
└── style.css                   # 共通スタイル（legacy）
```

## インストール

```bash
npm install
```

## 開発サーバー起動

```bash
npm run dev
```

`http://localhost:5173` でアクセスできます。

## ビルド

```bash
npm run build
```

`dist/` フォルダにプロダクション用ファイルが生成されます。

## 機能

- **スキル絞り込み** - スキル名で検索
- **基礎効果絞り込み** - 意志、筋力、知性、敏捷、メイン能力で絞り込み
- **リセット機能** - フィルターをクリア
- **スキルカラー表示** - 単語のイメージから各スキルに色を付与
- **レスポンシブデザイン** - スマートフォン対応

## コンポーネント説明

- **Header.vue** - ページのヘッダー部分
- **Footer.vue** - ページのフッター部分
- **FilterSection.vue** - フィルター用のセレクトボックス
- **Stats.vue** - マッチした件数を表示
- **DataTable.vue** - データ一覧表示用テーブル
- **TableRow.vue** - テーブルの1行を表すコンポーネント
- **SkillBadge.vue** - スキル名を色付きバッジで表示
- **App.vue** - 全体を統括するメインコンポーネント
"# Endfield-Skill-Search" 
