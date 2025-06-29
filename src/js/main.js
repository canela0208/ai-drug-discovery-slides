// 전역 변수
let currentSlide = 1;
const totalSlides = 10;

// DOM 요소들 (나중에 초기화)
let slideCounter, progressBar, prevBtn, nextBtn, slides;

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log('AI 타겟 발굴 프레젠테이션 로드됨');
    
    // DOM 요소들 초기화
    slideCounter = document.getElementById('slideCounter');
    progressBar = document.getElementById('progressBar');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    slides = document.querySelectorAll('.slide');
    
    // 요소 존재 확인
    if (!slideCounter || !progressBar || !prevBtn || !nextBtn || slides.length === 0) {
        console.error('필수 DOM 요소를 찾을 수 없습니다.');
        return;
    }
    
    console.log(`총 ${slides.length}개의 슬라이드를 발견했습니다.`);
    
    // 모든 슬라이드를 초기에 완전히 숨김
    slides.forEach((slide, index) => {
        slide.style.opacity = '0';
        slide.style.visibility = 'hidden';
        slide.style.pointerEvents = 'none';
        slide.style.zIndex = '1';
        slide.style.transform = 'translateX(100px)';
    });
    
    // 초기 슬라이드 설정
    updateSlideDisplay();
    updateProgress();
    updateButtons();
    
    // 이벤트 리스너 등록
    setupEventListeners();
    
    // 키보드 이벤트 설정
    setupKeyboardNavigation();
    
    // 애니메이션 초기화
    if (typeof initializeAnimations === 'function') {
        initializeAnimations();
    }
    
    console.log(`초기화 완료. 현재 슬라이드: ${currentSlide}`);
});

// 이벤트 리스너 설정
function setupEventListeners() {
    // 네비게이션 버튼
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('이전 버튼 클릭');
            previousSlide();
        });
        
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('다음 버튼 클릭');
            nextSlide();
        });
    }
    
    // 터치/스와이프 이벤트 (모바일 지원)
    let startX = 0;
    let endX = 0;
    let startY = 0;
    let endY = 0;
    let isScrolling = false;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isScrolling = false;
    }, { passive: true });
    
    document.addEventListener('touchmove', function(e) {
        if (!startX || !startY) return;
        
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        
        const diffX = Math.abs(currentX - startX);
        const diffY = Math.abs(currentY - startY);
        
        // 세로 스크롤이 더 크면 스와이프 무시
        if (diffY > diffX) {
            isScrolling = true;
        }
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        if (isScrolling) return;
        
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const threshold = 50;
        const diffX = startX - endX;
        const diffY = Math.abs(startY - endY);
        
        // 세로 움직임이 너무 크면 무시
        if (diffY > 100) return;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                console.log('오른쪽 스와이프 - 다음 슬라이드');
                nextSlide();
            } else {
                console.log('왼쪽 스와이프 - 이전 슬라이드');
                previousSlide();
            }
        }
    }
}

// 키보드 네비게이션
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                previousSlide();
                break;
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ': // 스페이스바
                e.preventDefault();
                nextSlide();
                break;
            case 'Home':
                e.preventDefault();
                goToSlide(1);
                break;
            case 'End':
                e.preventDefault();
                goToSlide(totalSlides);
                break;
        }
    });
}

// 슬라이드 이동 함수들
function nextSlide() {
    if (currentSlide < totalSlides) {
        goToSlide(currentSlide + 1);
    }
}

function previousSlide() {
    if (currentSlide > 1) {
        goToSlide(currentSlide - 1);
    }
}

function goToSlide(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= totalSlides && slideNumber !== currentSlide) {
        console.log(`슬라이드 ${currentSlide}에서 ${slideNumber}로 이동`);
        
        const previousSlide = currentSlide;
        currentSlide = slideNumber;
        
        updateSlideDisplay();
        updateProgress();
        updateButtons();
        
        // 슬라이드 변경 애니메이션
        if (typeof animateSlideTransition === 'function') {
            animateSlideTransition();
        }
        
        // 슬라이드별 특별 애니메이션
        if (typeof triggerSlideSpecificAnimations === 'function') {
            setTimeout(() => {
                triggerSlideSpecificAnimations(slideNumber);
            }, 300);
        }
        
        console.log(`슬라이드 전환 완료: ${previousSlide} → ${currentSlide}`);
    } else if (slideNumber === currentSlide) {
        console.log(`이미 슬라이드 ${slideNumber}에 있습니다.`);
    } else {
        console.warn(`잘못된 슬라이드 번호: ${slideNumber} (범위: 1-${totalSlides})`);
    }
}

// UI 업데이트 함수들
function updateSlideDisplay() {
    if (!slides || slides.length === 0) {
        console.error('슬라이드 요소들을 찾을 수 없습니다.');
        return;
    }
    
    slides.forEach((slide, index) => {
        // 모든 클래스 제거
        slide.classList.remove('active', 'prev');
        
        // 모든 슬라이드 초기 숨김 상태로 설정
        slide.style.opacity = '0';
        slide.style.visibility = 'hidden';
        slide.style.pointerEvents = 'none';
        slide.style.zIndex = '1';
        
        if (index + 1 === currentSlide) {
            // 현재 슬라이드만 표시
            slide.classList.add('active');
            slide.style.opacity = '1';
            slide.style.visibility = 'visible';
            slide.style.pointerEvents = 'auto';
            slide.style.zIndex = '10';
            slide.style.transform = 'translateX(0)';
            console.log(`슬라이드 ${index + 1} 활성화`);
        } else if (index + 1 < currentSlide) {
            // 이전 슬라이드
            slide.classList.add('prev');
            slide.style.transform = 'translateX(-100px)';
        } else {
            // 다음 슬라이드
            slide.style.transform = 'translateX(100px)';
        }
    });
    
    if (slideCounter) {
        slideCounter.textContent = `${currentSlide} / ${totalSlides}`;
    }
}

function updateProgress() {
    if (progressBar) {
        const progressPercentage = (currentSlide / totalSlides) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        console.log(`진행률 업데이트: ${progressPercentage}%`);
    }
}

function updateButtons() {
    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentSlide === 1;
        nextBtn.disabled = currentSlide === totalSlides;
        
        // 버튼 상태 시각적 피드백
        if (currentSlide === 1) {
            prevBtn.style.opacity = '0.5';
        } else {
            prevBtn.style.opacity = '1';
        }
        
        if (currentSlide === totalSlides) {
            nextBtn.style.opacity = '0.5';
        } else {
            nextBtn.style.opacity = '1';
        }
    }
}
