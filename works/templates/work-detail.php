<?php
// 作品ページのテンプレート
// 使用例: 
// $workTitle = "作品タイトル";
// $workCategory = "MUSIC VIDEO"; // カテゴリ：MUSIC VIDEO, PR VIDEO, TALK VIDEO
// $workThumb = "https://via.placeholder.com/1280x720.png"; // サムネイル画像URL
// $videoId = "VIDEO_ID"; // YouTube動画ID
// $client = "クライアント名";
// $artist = "アーティスト名";
// $date = "2024"; // 制作年
// $role = "Direction / Camera / Video Edit"; // 担当した役割
// $description = "作品説明テキスト";
// $credits = array(
//     "Direction" => "千葉明文",
//     "Camera" => "千葉明文",
//     "Edit" => "千葉明文",
//     "Vocal" => "駒形友梨"
// );
// $behindTheScenes = array(
//     "https://via.placeholder.com/400x300.png/101010/FF69B4?text=BTS+1",
//     "https://via.placeholder.com/400x300.png/101010/FF69B4?text=BTS+2",
//     "https://via.placeholder.com/400x300.png/101010/FF69B4?text=BTS+3"
// );

// ページの設定
$pageTitle = $workTitle ?? "作品詳細";
$currentPage = strtolower(preg_replace('/\s+/', '-', $workCategory ?? ""));
$isHomePage = false;
$rootPath = "../../";

// ヘッダーをインクルード
include $rootPath . 'includes/header.php';
?>

<main>
    <section class="work-detail-section">
        <div class="container">
            <div class="work-header">
                <h2 class="work-title"><?php echo $workTitle ?? "作品タイトル"; ?></h2>
                <p class="work-category"><?php echo $workCategory ?? "WORK"; ?></p>
            </div>
            
            <div class="work-content">
                <div class="work-video">
                    <div class="video-container">
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/<?php echo $videoId ?? "VIDEO_ID"; ?>" data-src="https://www.youtube.com/embed/<?php echo $videoId ?? "VIDEO_ID"; ?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                
                <div class="work-info">
                    <div class="info-section">
                        <h3>Project Details</h3>
                        <ul>
                            <?php if (isset($client) && !empty($client)): ?>
                            <li><strong>Client:</strong> <?php echo $client; ?></li>
                            <?php endif; ?>
                            
                            <?php if (isset($artist) && !empty($artist)): ?>
                            <li><strong>Artist:</strong> <?php echo $artist; ?></li>
                            <?php endif; ?>
                            
                            <?php if (isset($original) && !empty($original)): ?>
                            <li><strong>Original:</strong> <?php echo $original; ?></li>
                            <?php endif; ?>
                            
                            <?php if (isset($date) && !empty($date)): ?>
                            <li><strong>Date:</strong> <?php echo $date; ?></li>
                            <?php endif; ?>
                            
                            <?php if (isset($role) && !empty($role)): ?>
                            <li><strong>Role:</strong> <?php echo $role; ?></li>
                            <?php endif; ?>
                        </ul>
                    </div>
                    
                    <?php if (isset($description) && !empty($description)): ?>
                    <div class="info-section">
                        <h3>Description</h3>
                        <p><?php echo $description; ?></p>
                    </div>
                    <?php endif; ?>
                    
                    <?php if (isset($credits) && !empty($credits)): ?>
                    <div class="info-section">
                        <h3>Credits</h3>
                        <ul>
                            <?php foreach ($credits as $role => $person): ?>
                            <li><strong><?php echo $role; ?>:</strong> <?php echo $person; ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
            
            <?php if (isset($behindTheScenes) && !empty($behindTheScenes)): ?>
            <div class="work-gallery">
                <h3>Behind the Scenes</h3>
                <div class="gallery-grid">
                    <?php foreach ($behindTheScenes as $image): ?>
                    <img src="<?php echo $image; ?>" alt="Behind the Scenes">
                    <?php endforeach; ?>
                </div>
            </div>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php
// フッターをインクルード
include $rootPath . 'includes/footer.php';
?> 