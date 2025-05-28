# AKIFUMI CHIBA - 映像制作ポートフォリオサイト

映像クリエイター AKIFUMI CHIBA のポートフォリオサイトです。

## プロジェクト概要

このサイトは、映像制作者のポートフォリオを紹介するためのWebサイトです。
- ミュージックビデオ
- PRビデオ
- トークビデオ

の3つのカテゴリーで作品を分類し、各作品の詳細ページも含んでいます。

## フォルダ構造

```
.
├── README.md                    # プロジェクト概要
├── index.html                   # トップページ
├── music-videos.html           # ミュージックビデオ一覧
├── pr-videos.html              # PRビデオ一覧
├── talk-videos.html            # トークビデオ一覧
├── css/
│   └── style.css               # メインスタイルシート
├── js/
│   └── script.js               # メインJavaScript
├── assets/
│   └── images/
│       ├── thumbnails/         # サムネイル画像
│       ├── gallery/            # ギャラリー画像
│       └── behind-the-scenes/  # 制作風景画像
├── works/
│   ├── music-video/            # ミュージックビデオ個別ページ
│   │   ├── hana.html
│   │   ├── starmine.html
│   │   └── ...
│   ├── pr-video/               # PRビデオ個別ページ
│   │   ├── color-exam.html
│   │   ├── doskoy-boys.html
│   │   └── ...
│   └── talk-video/             # トークビデオ個別ページ
│       ├── channel-intro.html
│       ├── mahou-no-kaze.html
│       └── ...
└── docs/                       # ドキュメント（今後追加予定）
```

## 技術仕様

- **HTML5**: セマンティックなマークアップ
- **CSS3**: レスポンシブデザイン、Flexbox、Grid
- **JavaScript**: インタラクティブ要素、YouTube埋め込み
- **フォント**: Google Fonts (Orbitron, Roboto)
- **アイコン**: Font Awesome

## 特徴

1. **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
2. **統一されたヘッダー・フッター**: 全ページで一貫したナビゲーション
3. **YouTube埋め込み**: 各作品ページでの動画再生
4. **画像フォールバック**: 画像が読み込めない場合のプレースホルダー表示
5. **SEO対応**: 適切なメタタグとセマンティックHTML

## 画像について

- サムネイル画像は実際のYouTube動画のサムネイルを使用
- Behind the Scenesギャラリー用の画像は `assets/images/behind-the-scenes/` に配置
- 画像が見つからない場合は自動的にプレースホルダー画像を表示

## 今後の改善予定

- [ ] 実際の制作風景画像の追加
- [ ] アニメーション効果の追加
- [ ] パフォーマンス最適化
- [ ] アクセシビリティの向上 