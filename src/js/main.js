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
    
    // 초기 슬라이드 설정
    updateSlideDisplay();
    
    // 이벤트 리스너 등록
    setupEventListeners();
    
    // 키보드 이벤트 설정
    setupKeyboardNavigation();
    
    // 애니메이션 초기화
    if (typeof initializeAnimations === 'function') {
        initializeAnimations();
    }
});

// 이벤트 리스너 설정
function setupEventListeners() {
    // 네비게이션 버튼
    prevBtn.addEventListener('click', previousSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // 터치/스와이프 이벤트 (모바일 지원)
    let startX = 0;
    let endX = 0;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    document.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
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
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
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
            triggerSlideSpecificAnimations(slideNumber);
        }
    }
}

// UI 업데이트 함수들
function updateSlideDisplay() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        
        if (index + 1 === currentSlide) {
            slide.classList.add('active');
        } else if (index + 1 < currentSlide) {
            slide.classList.add('prev');
        }
    });
    
    slideCounter.textContent = `${currentSlide} / ${totalSlides}`;
}

function updateProgress() {
    const progressPercentage = (currentSlide / totalSlides) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function updateButtons() {
    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === totalSlides;
}
