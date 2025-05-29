document.addEventListener('DOMContentLoaded', () => {
    console.log("AKIFUMI CHIBA Portfolio - Enhanced Version Loaded");

    // === Core Elements ===
    const loaderWrapper = document.getElementById('loader-wrapper');
    const pageContent = document.getElementById('page-content');
    const header = document.querySelector('header');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link, .main-nav a');

    // === Check if this is the index page ===
    const pathname = window.location.pathname;
    const isIndexPage = pathname === '/' || 
                       pathname.includes('index.html') || 
                       pathname === '' ||
                       pathname.endsWith('/') ||
                       (pathname.split('/').filter(segment => segment).length <= 1);

    // === Performance Optimization ===
    let ticking = false;
    let lastScrollTop = 0;
    let isHeaderVisible = true;

    // === Session Management (only for index page) ===
    const hasVisited = sessionStorage.getItem('hasVisited');
    const shouldShowLoader = isIndexPage && !hasVisited;
    
    console.log("[Page Check] isIndexPage:", isIndexPage, "shouldShowLoader:", shouldShowLoader);

    // === Enhanced Loader Creation (only for index page) ===
    function createEnhancedLoader() {
        if (!loaderWrapper || !isIndexPage) return;
                        
        // Check if loader content already exists
        if (loaderWrapper.querySelector('.film-strip')) {
            console.log("Loader content already exists");
            return;
                }

        loaderWrapper.innerHTML = `
            <div class="loader-content">
                <div class="film-strip"></div>
                <div class="camera-icon"></div>
                <div class="loader-text">AKIFUMI CHIBA</div>
                <div class="loader-progress"></div>
                <div class="loader-subtitle">映像制作ポートフォリオを読み込み中...</div>
            </div>
        `;
    }

    // === Smart Header with Scroll Direction Detection ===
    function initSmartHeader() {
        if (!header) return;
        
        const scrollThreshold = 100;
        const sections = document.querySelectorAll('main section[id], footer[id]');
        const currentHeaderHeight = header ? header.offsetHeight : 80;

        // 統合されたスクロールハンドラー
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset;
                    const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
                    
                    // ヘッダーアニメーション
                    if (scrollTop > scrollThreshold) {
                        header.classList.add('scrolled');
                    
                        if (scrollDirection === 'down' && isHeaderVisible && scrollTop > lastScrollTop + 10) {
                            header.classList.add('hidden');
                            isHeaderVisible = false;
                        } else if (scrollDirection === 'up' && !isHeaderVisible) {
                            header.classList.remove('hidden');
                            isHeaderVisible = true;
                        }
                    } else {
                        header.classList.remove('scrolled', 'hidden');
                        isHeaderVisible = true;
                    }
                    
                    // ナビゲーション更新（統合）
                    let currentSectionId = '';
                    const scrollBuffer = 100;

                    sections.forEach(section => {
                        const sectionTop = section.offsetTop - currentHeaderHeight - scrollBuffer;
                        if (scrollTop >= sectionTop) {
                            currentSectionId = section.getAttribute('id');
                        }
                    });

                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${currentSectionId}`) {
                            link.classList.add('active');
                    }
                    });
                    
                    lastScrollTop = scrollTop;
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true }); // passive: true でスクロール性能向上
    }

    // === 超軽量カードアニメーション（ユーザビリティ最優先） ===
    function initCardAnimations() {
        const cards = document.querySelectorAll('.mv-card, .skill-item, .service-item, .stat-item, .highlight-item');
        if (cards.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 遅延なしで即座に表示
                    entry.target.classList.add('in-view');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -20px 0px" // より早くトリガー
        });

        cards.forEach(card => {
            if (!card.style.opacity) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(15px)'; // 20px → 15px でより軽く
                card.style.transition = 'all 0.3s ease'; // シンプルなeaseに変更、0.4s → 0.3s
            }
            observer.observe(card);
        });
    }

    // === 軽量ホバーエフェクト（3D削除、ユーザビリティ重視） ===
    function initMagneticEffects() {
        const magneticElements = document.querySelectorAll('.cta-button, .modern-button, .mv-card, .submit-button');
        
        magneticElements.forEach(element => {
            // シンプルなホバーエフェクトのみ
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-3px)'; // 軽量化：-5px → -3px
                element.style.transition = 'transform 0.2s ease'; // 高速化：0.3s → 0.2s
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = '';
                element.style.transition = 'transform 0.2s ease';
            });

            // 3Dエフェクトは完全に削除（mousemoveイベント削除）
        });
    }

    // === 超軽量スクロールアニメーション（ユーザビリティ最優先） ===
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.section-title, .hero-content h2, .hero-content p, .cta-button, .profile-description, .contact-intro');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // 0.2 → 0.1 でさらに早くトリガー
            rootMargin: '0px 0px -30px 0px' // -50px → -30px で軽く
        });

        animatedElements.forEach((element) => {
            if (!element.style.opacity) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)'; // 25px → 20px で軽く
                element.style.transition = 'all 0.4s ease'; // シンプルなease、遅延削除
            }
            observer.observe(element);
        });
    }

    // === かっこいいヒーローアニメーション ===
    function initHeroAnimations() {
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent || !isIndexPage) return;

        // ヒーロー要素を取得
        const heroTitle = heroContent.querySelector('h1');
        const heroSubtitle = heroContent.querySelector('p');
        const heroButton = heroContent.querySelector('.cta-button');

        // 初期状態を設定
        [heroTitle, heroSubtitle, heroButton].forEach(el => {
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(50px)';
            }
        });

        // 順次アニメーション実行
        setTimeout(() => {
            // タイトルのアニメーション
            if (heroTitle) {
                heroTitle.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
                
                // タイピングエフェクト風の文字表示
                const text = heroTitle.textContent;
                heroTitle.textContent = '';
                let i = 0;
                const typeEffect = setInterval(() => {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                    if (i >= text.length) {
                        clearInterval(typeEffect);
                    }
                }, 100);
            }

            // サブタイトルのアニメーション（0.5秒遅れ）
            setTimeout(() => {
                if (heroSubtitle) {
                    heroSubtitle.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    heroSubtitle.style.opacity = '1';
                    heroSubtitle.style.transform = 'translateY(0)';
                }
            }, 500);

            // ボタンのアニメーション（1秒遅れ）
            setTimeout(() => {
                if (heroButton) {
                    heroButton.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    heroButton.style.opacity = '1';
                    heroButton.style.transform = 'translateY(0) scale(1)';
                    
                    // バウンスエフェクト
                    setTimeout(() => {
                        heroButton.style.transform = 'translateY(0) scale(1.05)';
                        setTimeout(() => {
                            heroButton.style.transform = 'translateY(0) scale(1)';
                        }, 200);
                    }, 100);
                }
            }, 1000);

        }, 200); // ページ読み込み後少し待ってから開始
    }

    // === Smooth Navigation ===
    function initSmoothNavigation() {
        const currentHeaderHeight = header ? header.offsetHeight : 80;

        // Internal navigation links
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
                const targetId = this.getAttribute('href');
                
            if (targetId === '#' || targetId === '#top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                updateActiveNav(this);
                return;
            }
                
                const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - currentHeaderHeight - 20;
                    
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                updateActiveNav(this);
            }
        });
    });

        // Active navigation highlighting
    function updateActiveNav(clickedLink) {
        if (clickedLink && clickedLink.closest('nav')) {
                navLinks.forEach(nav => nav.classList.remove('active'));
            clickedLink.classList.add('active');
        }
    }
    }

    // === Mobile Menu ===
    function initMobileMenu() {
        if (!hamburgerMenu || !mainNav) return;

        hamburgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // Accessibility
            const isExpanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && hamburgerMenu.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !hamburgerMenu.contains(e.target) && mainNav.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // === FAQ Toggle Function (for contact page) ===
    function initFAQ() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    faqItem.classList.add('active');
        }
    });
        });
    }

    // === Page Content Display (for index page only) ===
    function showPageContent() {
        console.log("Showing enhanced page content");
        if (pageContent && isIndexPage) {
            pageContent.classList.remove('hidden-initially');
            pageContent.classList.add('visible');
            
            // Force immediate visibility
            pageContent.style.opacity = '1';
            pageContent.style.visibility = 'visible';
        }
        
        // Initialize features for all pages
        setTimeout(() => {
            initScrollAnimations();
            initCardAnimations();
            initMagneticEffects();
            initSmartHeader();
            initSmoothNavigation();
            initMobileMenu();
            initFAQ();
            initHeroAnimations();
        }, 200);
    }

    // === Loader Management (index page only) ===
    if (shouldShowLoader && loaderWrapper && isIndexPage) {
        console.log("Showing enhanced loader animation");
        
        createEnhancedLoader();
        loaderWrapper.style.display = 'flex';
        loaderWrapper.style.opacity = '1';
        loaderWrapper.style.visibility = 'visible';

        // Hide loader after 3.5 seconds
        setTimeout(() => {
            loaderWrapper.classList.add('loaded');

            setTimeout(() => {
                loaderWrapper.style.display = 'none';
                showPageContent();
                sessionStorage.setItem('hasVisited', 'true');
            }, 800);
        }, 3500);
    } else {
        // Show content immediately if no loader or not index page
        if (loaderWrapper && isIndexPage) {
            loaderWrapper.style.display = 'none';
        }
        showPageContent();
    }

    // === Year Update ===
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // === Hash Link Handling ===
    if (window.location.hash) {
        const targetId = window.location.hash;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            setTimeout(() => {
                const headerHeight = header ? header.offsetHeight : 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
                window.scrollTo({ top: offsetPosition, behavior: "auto" });
            }, shouldShowLoader ? 4000 : 100);
        }
    }

    // === Performance Monitoring ===
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`[Performance] Page load time: ${loadTime}ms`);
        });
    }

    // === Error Handling ===
    window.addEventListener('error', (e) => {
        console.error('[Error]', e.error);
    });

    console.log("All enhanced features initialized successfully for", isIndexPage ? "index page" : "other page");
    });

// === Global FAQ Toggle Function (for contact page) ===
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}