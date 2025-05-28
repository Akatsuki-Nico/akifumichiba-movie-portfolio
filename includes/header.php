<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?> | AKIFUMI CHIBA</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="<?php echo $rootPath; ?>css/style.css">
</head>
<body>
    <div id="page-content" <?php if ($isHomePage) echo 'class="hidden-initially"'; ?>>
        <header>
            <div class="container header-container">
                <h1 class="logo"><a href="<?php echo $rootPath; ?>index.php">AKIFUMI CHIBA</a></h1>
                <nav class="main-nav">
                    <ul>
                        <li><a href="<?php echo $rootPath; ?>music-videos.php" <?php if ($currentPage === 'music-video') echo 'class="active"'; ?>>MUSIC VIDEO</a></li>
                        <li><a href="<?php echo $rootPath; ?>pr-videos.php" <?php if ($currentPage === 'pr-video') echo 'class="active"'; ?>>PR VIDEO</a></li>
                        <li><a href="<?php echo $rootPath; ?>talk-videos.php" <?php if ($currentPage === 'talk-video') echo 'class="active"'; ?>>TALK VIDEO</a></li>
                        <li><a href="<?php echo $rootPath; ?>index.php#contact">CONTACT</a></li>
                    </ul>
                </nav>
                <button class="hamburger-menu" aria-label="メニューを開く" aria-expanded="false">
                    <span class="hamburger-menu-bar"></span>
                    <span class="hamburger-menu-bar"></span>
                    <span class="hamburger-menu-bar"></span>
                </button>
            </div>
        </header>
    </div>
</body>
</html> 