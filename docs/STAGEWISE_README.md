# Stagewise AI Development Toolbar

このプロジェクトにはstageweise AIを活用した開発ツールバーが統合されています。

## 🚀 機能

- **要素選択とコメント**: ページ上の任意の要素を選択してコメントを追加
- **AI駆動の編集**: コメントに基づいてAIエージェントがコードを自動編集
- **リアルタイム反映**: 変更がエディタに即座に反映
- **開発環境限定**: 本番環境では表示されません

## 📋 セットアップ

### 1. 開発サーバーの起動

```bash
# 開発用サーバーを起動（ポート3000）
npm run dev

# または別のポートで起動
npm start  # ポート8080
```

### 2. ブラウザでアクセス

開発サーバー起動後、以下のURLでアクセス：

- http://localhost:3000 （推奨）
- http://localhost:8080
- または `?dev=true` パラメータを追加

## 🎯 使用方法

### 基本操作

1. **ツールバーの表示**: 開発環境でページを開くと、右下にstagewiseツールバーが表示されます

2. **要素の選択**: 
   - ツールバーの選択モードを有効化
   - 編集したい要素をクリックして選択

3. **コメントの追加**:
   - 選択した要素にコメントを追加
   - 具体的な変更要求を記述

4. **AI編集の実行**:
   - AIエージェントがコメントを解析
   - 自動的にコードを編集・更新

### コメントの例

```
このボタンの色を青から緑に変更してください
フォントサイズを18pxから20pxに大きくしてください
このセクションの背景を透明にしてください
レスポンシブデザインでモバイル表示を改善してください
```

## 🔧 設定

### ツールバー設定

ツールバーの設定は `js/stagewise-dev.js` で行えます：

```javascript
const stagewiseConfig = {
    plugins: [],
    position: 'bottom-right',  // ツールバーの位置
    theme: 'dark',             // テーマ（dark/light）
    project: {
        name: 'Akifumi Chiba Portfolio',
        type: 'static-html',
        framework: 'vanilla'
    },
    ai: {
        enabled: true,
        provider: 'default'
    }
};
```

### 開発環境の検出

以下の条件でツールバーが表示されます：

- `localhost` または `127.0.0.1`
- ポート3000または8080
- URLに `dev=true` パラメータ
- ホスト名に `dev` が含まれる

## 🎨 カスタマイズ

### テーマの調整

ツールバーのスタイルは、サイトのテーマ（シアン/ブラック）に合わせて自動調整されます：

```css
/* ポートフォリオサイトのテーマに合わせたスタイル */
#stagewise-toolbar .toolbar-panel {
    background: rgba(0, 0, 0, 0.9) !important;
    border: 1px solid rgba(0, 255, 255, 0.3) !important;
    backdrop-filter: blur(10px) !important;
}
```

## 📁 ファイル構成

```
├── js/
│   └── stagewise-dev.js          # Stagewiseツールバーの初期化
├── package.json                  # 依存関係管理
├── index.html                    # メインページ（ツールバー統合済み）
├── about.html                    # Aboutページ（ツールバー統合済み）
├── contact.html                  # Contactページ（ツールバー統合済み）
└── works/                        # 個別ワークページ（ツールバー統合済み）
```

## 🚫 本番環境での動作

本番環境では以下の条件により、ツールバーは自動的に無効化されます：

- `isDevelopment` チェックにより本番環境を検出
- コンソールに「Production mode detected」メッセージを出力
- ツールバーの初期化をスキップ

## 🐛 トラブルシューティング

### ツールバーが表示されない場合

1. **開発サーバーの確認**: localhost:3000でアクセスしているか確認
2. **コンソールエラー**: ブラウザの開発者ツールでエラーを確認
3. **ネットワーク**: node_modulesへのアクセスが可能か確認

### CDNフォールバック

ローカルインストールが失敗した場合、自動的にCDN経由での読み込みを試行します：

```javascript
// フォールバック：CDN経由での読み込み
import { initToolbar } from 'https://unpkg.com/@stagewise/toolbar@latest/dist/index.js';
```

## 📞 サポート

問題が発生した場合は、ブラウザの開発者ツールのコンソールでエラーメッセージを確認してください。初期化時に詳細なログが出力されます。

---

**注意**: このツールバーは開発効率向上のためのツールです。本番環境では一切表示されませんので、安心してご利用ください。 