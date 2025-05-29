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

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset;
                    const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
                    
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
                    
                    lastScrollTop = scrollTop;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // === Enhanced Card Animations ===
    function initCardAnimations() {
        const cards = document.querySelectorAll('.mv-card, .skill-item, .service-item, .stat-item, .highlight-item');
        if (cards.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('in-view');
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.transitionDelay = `${(index % 3) * 0.1}s`;
                    }, index * 50);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        cards.forEach(card => {
            if (!card.style.opacity) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            }
            observer.observe(card);
        });
    }

    // === 3D Magnetic Effects ===
    function initMagneticEffects() {
        const magneticElements = document.querySelectorAll('.cta-button, .modern-button, .mv-card, .submit-button');
        
        magneticElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-5px) scale(1.02)';
                element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = '';
                element.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });

            // 3D card effects
            if (element.classList.contains('mv-card')) {
                element.addEventListener('mousemove', (e) => {
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (y - centerY) / 8;
                    const rotateY = (centerX - x) / 8;
                    
                    element.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                });
            }
        });
    }

    // === Advanced Scroll Animations ===
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
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });

        animatedElements.forEach((element, index) => {
            if (!element.style.opacity) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(40px)';
                element.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
            }
            observer.observe(element);
        });
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

        // Scroll-based active navigation
        const sections = document.querySelectorAll('main section[id], footer[id]');
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
            const scrollBuffer = 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - currentHeaderHeight - scrollBuffer;
            if (pageYOffset >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        });
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