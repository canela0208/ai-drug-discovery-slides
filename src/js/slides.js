// 슬라이드 애니메이션 및 전환 효과

// 애니메이션 초기화
function initializeAnimations() {
    // 페이지 로드 시 첫 번째 슬라이드 애니메이션
    setTimeout(() => {
        const firstSlide = document.getElementById('slide-1');
        if (firstSlide) {
            animateSlideIn(firstSlide);
        }
    }, 300);
}

// 슬라이드 전환 애니메이션
function animateSlideTransition() {
    const activeSlide = document.querySelector('.slide.active');
    if (activeSlide) {
        // 슬라이드 페이드 인 효과
        activeSlide.style.opacity = '0';
        activeSlide.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            activeSlide.style.opacity = '1';
            activeSlide.style.transform = 'translateY(0)';
            animateSlideIn(activeSlide);
        }, 100);
    }
}

// 개별 슬라이드 애니메이션
function animateSlideIn(slide) {
    const elements = slide.querySelectorAll('.slide-title, .stat-item, .content-grid > *, .market-chart, .region-stats');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// 숫자 카운트업 애니메이션
function animateCountUp(element, target, suffix = '') {
    const start = 0;
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (target - start) * easeOut;
        
        element.textContent = Math.floor(current) + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target + suffix;
        }
    }
    
    requestAnimationFrame(update);
}

// 프로그레스 바 애니메이션
function animateProgressBar(targetWidth) {
    const bar = document.getElementById('progressBar');
    const currentWidth = parseFloat(bar.style.width) || 0;
    const duration = 500;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeInOut = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        const width = currentWidth + (targetWidth - currentWidth) * easeInOut;
        bar.style.width = width + '%';
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// 슬라이드별 특별 애니메이션
function triggerSlideSpecificAnimations(slideNumber) {
    switch(slideNumber) {
        case 1:
            // 타이틀 슬라이드 - 통계 숫자 애니메이션
            setTimeout(() => {
                const statNumbers = document.querySelectorAll('#slide-1 .stat-number');
                statNumbers.forEach((stat, index) => {
                    setTimeout(() => {
                        const text = stat.textContent;
                        if (text.includes('91B')) {
                            animateCountUp(stat, 91, 'B');
                        } else if (text.includes('29.7%')) {
                            animateCountUp(stat, 29.7, '%');
                        } else if (text.includes('80%')) {
                            animateCountUp(stat, 80, '%+');
                        }
                    }, index * 300);
                });
            }, 800);
            break;
            
        case 2:
            // 시장 현황 슬라이드 - 차트 애니메이션
            setTimeout(() => {
                const bars = document.querySelectorAll('#slide-2 .bar');
                bars.forEach((bar, index) => {
                    const targetWidth = bar.style.width;
                    bar.style.width = '0%';
                    
                    setTimeout(() => {
                        bar.style.transition = 'width 1s ease-out';
                        bar.style.width = targetWidth;
                    }, index * 500);
                });
            }, 600);
            break;
    }
}

// 터치 제스처 개선
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].clientY;
    handleVerticalSwipe();
}, { passive: true });

function handleVerticalSwipe() {
    const threshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > threshold) {
        if (diff > 0) {
            // 위로 스와이프 - 다음 슬라이드
            nextSlide();
        } else {
            // 아래로 스와이프 - 이전 슬라이드
            previousSlide();
        }
    }
}
