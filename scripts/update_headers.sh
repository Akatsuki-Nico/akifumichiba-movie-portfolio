#!/bin/bash

# 全てのHTMLファイルを検索
HTML_FILES=$(find works -name "*.html")

for file in $HTML_FILES; do
  echo "Processing $file..."
  
  # ヘッダーのナビゲーションリンクを修正
  # 1. "YOUTUBE"を"TALK VIDEO"に変更
  # 2. index.html#music-video-sectionをmusic-videos.htmlに変更
  # 3. index.html#pr-video-sectionをpr-videos.htmlに変更
  # 4. index.html#youtube-video-sectionまたはindex.html#talk-video-sectionをtalk-videos.htmlに変更
  # 5. スクリプトパスも修正
  
  # MacのsedはBSDバージョンなので-iオプションにバックアップ拡張子を指定する必要がある
  sed -i '' -e 's|<li><a href="[^"]*#music-video-section">MUSIC VIDEO</a></li>|<li><a href="../../music-videos.html">MUSIC VIDEO</a></li>|g' \
            -e 's|<li><a href="[^"]*#pr-video-section">PR VIDEO</a></li>|<li><a href="../../pr-videos.html">PR VIDEO</a></li>|g' \
            -e 's|<li><a href="[^"]*#youtube-video-section">YOUTUBE</a></li>|<li><a href="../../talk-videos.html">TALK VIDEO</a></li>|g' \
            -e 's|<li><a href="[^"]*#talk-video-section">TALK VIDEO</a></li>|<li><a href="../../talk-videos.html">TALK VIDEO</a></li>|g' \
            -e 's|<li><a href="[^"]*#contact">CONTACT</a></li>|<li><a href="../../index.html#contact">CONTACT</a></li>|g' \
            -e 's|<h1 class="logo"><a href="[^"]*">AKIFUMI CHIBA</a></h1>|<h1 class="logo"><a href="../../index.html">AKIFUMI CHIBA</a></h1>|g' \
            -e 's|<script src="../js/script.js"></script>|<script src="../../js/script.js"></script>|g' \
            "$file"
done

echo "Header links updated successfully!"

# works/youtubeディレクトリのchannel-intro.htmlを削除（既にtalk-videoに移動済み）
if [ -f "works/youtube/channel-intro.html" ]; then
  echo "Deleting redundant file works/youtube/channel-intro.html..."
  rm "works/youtube/channel-intro.html"
fi 