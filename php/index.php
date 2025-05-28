<?php
// ページの設定
$pageTitle = "VIDEO WORKS";
$currentPage = "home";
$isHomePage = true;
$rootPath = "";

// ヘッダーをインクルード
include 'includes/header.php';
?>

<!-- ローディングスクリーン -->
<div id="loader-wrapper">
    <div class="loader-content">
        <div class="loader-text">AKIFUMI CHIBA</div>
        <div class="loader-line"></div>
    </div>
</div>

<!-- メインコンテンツ -->
<section id="hero">
    <div class="hero-content">
        <h2>VISUAL STORYTELLER</h2>
        <p>Bringing ideas to life through captivating video experiences.</p>
        <a href="#music-video-section" class="cta-button">Explore Works</a>
    </div>
    <div class="scroll-down-indicator">
        <a href="#music-video-section"><span></span>Scroll</a>
    </div>
</section>

<main>
    <!-- Music Video Section -->
    <section id="music-video-section" class="video-category-section">
        <div class="container">
            <h3 class="section-title">MUSIC VIDEO</h3>
            <div class="mv-grid">
                <article class="mv-card">
                    <a href="works/music-video/hana.php" class="mv-thumbnail-link">
                        <img src="https://via.placeholder.com/400x225.png/101010/00ffff?text=花" alt="花">
                        <div class="play-icon-overlay"><svg class="play-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    </a>
                    <div class="mv-info">
                        <h4><a href="works/music-video/hana.php">【歌ってみた】花 / 藤井風</a></h4>
                        <p class="artist">駒形友梨 Studio Cover Session</p>
                    </div>
                </article>
                <article class="mv-card">
                    <a href="works/music-video/starmine.php" class="mv-thumbnail-link">
                        <img src="https://via.placeholder.com/400x225.png/101010/00ffff?text=スターマイン" alt="スターマイン">
                        <div class="play-icon-overlay"><svg class="play-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    </a>
                    <div class="mv-info">
                        <h4><a href="works/music-video/starmine.php">【歌ってみた】スターマイン / Da-iCE</a></h4>
                        <p class="artist">駒形友梨 Studio Cover Session</p>
                    </div>
                </article>
                <article class="mv-card">
                    <a href="works/music-video/tonun-friday-night.php" class="mv-thumbnail-link">
                        <img src="https://via.placeholder.com/400x225.png/101010/00ffff?text=Friday+Night" alt="Friday Night">
                        <div class="play-icon-overlay"><svg class="play-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    </a>
                    <div class="mv-info">
                        <h4><a href="works/music-video/tonun-friday-night.php">tonun - Friday Night：RYA choreo</a></h4>
                        <p class="artist">RYA</p>
                    </div>
                </article>
            </div>
            <div class="more-button-container">
                <a href="music-videos.php" class="modern-button">
                    View All Music Videos <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>

    <section id="pr-video-section" class="video-category-section">
        <div class="container">
            <h3 class="section-title">PR VIDEO</h3>
            <div class="mv-grid">
                <article class="mv-card">
                    <a href="works/pr-video/color-exam.php" class="mv-thumbnail-link">
                        <img src="https://via.placeholder.com/400x225.png/101010/FF69B4?text=色彩検定" alt="色彩検定">
                        <div class="play-icon-overlay"><svg class="play-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    </a>
                    <div class="mv-info">
                        <h4><a href="works/pr-video/color-exam.php">色彩検定2級講座 / 共立女子大学</a></h4>
                        <p class="artist">共立女子大学</p>
                    </div>
                </article>
                <article class="mv-card">
                    <a href="works/pr-video/doskoy-boys.php" class="mv-thumbnail-link">
                        <img src="https://via.placeholder.com/400x225.png/101010/FF69B4?text=Doskoy+Boys" alt="Doskoy Boys">
                        <div class="play-icon-overlay"><svg class="play-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    </a>
                    <div class="mv-info">
                        <h4><a href="works/pr-video/doskoy-boys.php">Doskoy Boys - Introduce -</a></h4>
                        <p class="artist">Doskoy Boys</p>
                    </div>
                </article>
                <article class="mv-card">
                    <a href="works/pr-video/hpv-vaccine.php" class="mv-thumbnail-link">
                        <img src="https://via.placeholder.com/400x225.png/101010/FF69B4?text=HPVワクチン" alt="HPVワクチン">
                        <div class="play-icon-overlay"><svg class="play-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    </a>
                    <div class="mv-info">
                        <h4><a href="works/pr-video/hpv-vaccine.php">ビバワク！HPVワクチン啓発ダンス</a></h4>
                        <p class="artist">HPVワクチン啓発</p>
                    </div>
                </article>
            </div>
            <div class="more-button-container">
                <a href="pr-videos.php" class="modern-button">
                    Explore PR Videos <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>

    <section id="talk-video-section" class="video-category-section">
        <div class="container">
            <h3 class="section-title">TALK VIDEO</h3>
            <div class="mv-grid">
                <article class="mv-card">
                    <a href="works/talk-video/channel-intro.php" class="mv-thumbnail-link">
                        <img src="https://via.placeholder.com/400x225.png/101010/FF69B4?text=チャンネル紹介" alt="チャンネル紹介">
                        <div class="play-icon-overlay"><svg class="play-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    </a>
                    <div class="mv-info">
                        <h4><a href="works/talk-video/channel-intro.php">チャンネル紹介 and 自己紹介：RYA</a></h4>
                        <p class="artist">RYA</p>
                    </div>
                </article>
                <article class="mv-card">
                    <a href="works/talk-video/mahou-no-kaze.php" class="mv-thumbnail-link">
                        <img src="https://via.placeholder.com/400x225.png/101010/FF69B4?text=まほうのかぜ" alt="まほうのかぜ">
                        <div class="play-icon-overlay"><svg class="play-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    </a>
                    <div class="mv-info">
                        <h4><a href="works/talk-video/mahou-no-kaze.php">「まほうのかぜ」を熱演！アコースティックギターを調べ隊！【くましら第9回】</a></h4>
                        <p class="artist">くましら</p>
                    </div>
                </article>
                <article class="mv-card">
                    <a href="works/talk-video/momen-no-handkerchief.php" class="mv-thumbnail-link">
                        <img src="https://via.placeholder.com/400x225.png/101010/FF69B4?text=木綿のハンカチーフ" alt="木綿のハンカチーフ">
                        <div class="play-icon-overlay"><svg class="play-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    </a>
                    <div class="mv-info">
                        <h4><a href="works/talk-video/momen-no-handkerchief.php">【弾き語り】木綿のハンカチーフ / 太田裕美 ~ Covered by 駒形友梨 ~</a></h4>
                        <p class="artist">駒形友梨</p>
                    </div>
                </article>
            </div>
            <div class="more-button-container">
                <a href="talk-videos.php" class="modern-button">
                    Discover Talk Videos <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>
</main>

<?php
// フッターをインクルード
include 'includes/footer.php';
?> 