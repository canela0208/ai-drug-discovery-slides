// 차트 및 데이터 시각화

// 시장 데이터
const marketData = {
    growth: [
        { year: 2024, value: 18.6, label: '18.6B USD' },
        { year: 2030, value: 91, label: '91B USD' }
    ],
    regions: [
        { name: '북미', percentage: 58, color: '#0066ff' },
        { name: '유럽', percentage: 25, color: '#00d4ff' },
        { name: '아시아-태평양', percentage: 17, color: '#4CAF50' }
    ],
    successRates: [
        { type: 'AI 발굴 신약', rate: 85, color: '#00d466' },
        { type: '전통적 방법', rate: 52, color: '#ff8c00' }
    ]
};

// 주요 플레이어 데이터
const playersData = {
    companies: [
        { name: 'Insilico Medicine', funding: 549, stage: 'Series C', programs: 31 },
        { name: 'Recursion', funding: 688, stage: 'Public', programs: 15 },
        { name: 'Atomwise', funding: 174, stage: 'Series B', programs: 235 },
        { name: 'Xaira', funding: 1000, stage: 'Series A', programs: 5 }
    ],
    partnerships: [
        { pharma: 'Eli Lilly', ai_company: 'Isomorphic Labs', value: 1.7 },
        { pharma: 'Novartis', ai_company: 'Isomorphic Labs', value: 1.2 },
        { pharma: 'Bayer', ai_company: 'Recursion', value: 1.5 },
        { pharma: 'Sanofi', ai_company: 'Atomwise', value: 0.02 }
    ]
};

// 기술 데이터
const technologyData = {
    methods: [
        { name: '그래프 신경망', adoption: 35, accuracy: 78 },
        { name: '트랜스포머', adoption: 28, accuracy: 82 },
        { name: '지식 그래프', adoption: 23, accuracy: 75 },
        { name: '멀티오믹스', adoption: 14, accuracy: 85 }
    ],
    improvements: [
        { metric: '타겟 발굴 속도', traditional: 100, ai: 400 },
        { metric: '비용 절감', traditional: 100, ai: 25 },
        { metric: '성공률', traditional: 52, ai: 85 },
        { metric: '개발 기간', traditional: 100, ai: 60 }
    ]
};

// 차트 생성 함수들

// 간단한 바 차트 생성
function createBarChart(container, data, options = {}) {
    const chart = document.createElement('div');
    chart.className = 'simple-chart';
    
    data.forEach(item => {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.innerHTML = `
            <div class="bar-label">${item.label || item.name}</div>
            <div class="bar-container">
                <div class="bar-fill" style="width: ${(item.value / options.maxValue * 100) || item.percentage}%; background-color: ${item.color || '#0066ff'}"></div>
                <span class="bar-value">${item.value}${options.suffix || '%'}</span>
            </div>
        `;
        chart.appendChild(bar);
    });
    
    if (container) {
        container.appendChild(chart);
    }
    return chart;
}

// 원형 진행률 표시기
function createCircularProgress(container, percentage, label, color = '#0066ff') {
    const circle = document.createElement('div');
    circle.className = 'circular-progress';
    circle.innerHTML = `
        <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#1a1d24" stroke-width="8"/>
            <circle cx="60" cy="60" r="50" fill="none" stroke="${color}" stroke-width="8" 
                    stroke-dasharray="${2 * Math.PI * 50}" 
                    stroke-dashoffset="${2 * Math.PI * 50 * (1 - percentage / 100)}"
                    stroke-linecap="round"
                    transform="rotate(-90 60 60)"/>
        </svg>
        <div class="progress-label">
            <div class="progress-percentage">${percentage}%</div>
            <div class="progress-text">${label}</div>
        </div>
    `;
    
    if (container) {
        container.appendChild(circle);
    }
    return circle;
}

// 타임라인 차트
function createTimeline(container, events) {
    const timeline = document.createElement('div');
    timeline.className = 'timeline-chart';
    
    events.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-year">${event.year}</div>
                <div class="timeline-event">${event.event}</div>
                <div class="timeline-description">${event.description}</div>
            </div>
        `;
        timeline.appendChild(item);
    });
    
    if (container) {
        container.appendChild(timeline);
    }
    return timeline;
}

// 비교 차트
function createComparisonChart(container, data, title) {
    const chart = document.createElement('div');
    chart.className = 'comparison-chart';
    chart.innerHTML = `<h4>${title}</h4>`;
    
    data.forEach(item => {
        const comparison = document.createElement('div');
        comparison.className = 'comparison-item';
        comparison.innerHTML = `
            <div class="comparison-label">${item.metric}</div>
            <div class="comparison-bars">
                <div class="comparison-bar traditional">
                    <span>기존</span>
                    <div class="bar" style="width: ${item.traditional}%"></div>
                    <span>${item.traditional}${item.suffix || ''}</span>
                </div>
                <div class="comparison-bar ai">
                    <span>AI</span>
                    <div class="bar" style="width: ${item.ai}%"></div>
                    <span>${item.ai}${item.suffix || ''}</span>
                </div>
            </div>
        `;
        chart.appendChild(comparison);
    });
    
    if (container) {
        container.appendChild(chart);
    }
    return chart;
}

// 실시간 데이터 업데이트 시뮬레이션
function simulateRealTimeData() {
    const updateInterval = 5000; // 5초마다 업데이트
    
    setInterval(() => {
        // 투자 금액 업데이트 시뮬레이션
        const investmentElements = document.querySelectorAll('.investment-amount');
        investmentElements.forEach(element => {
            const currentValue = parseFloat(element.textContent);
            const newValue = currentValue + (Math.random() * 10 - 5); // ±5 범위 변동
            element.textContent = newValue.toFixed(1) + 'B';
        });
        
        // 성공률 업데이트
        const successRateElements = document.querySelectorAll('.success-rate');
        successRateElements.forEach(element => {
            const currentRate = parseFloat(element.textContent);
            const newRate = Math.max(0, Math.min(100, currentRate + (Math.random() * 2 - 1)));
            element.textContent = newRate.toFixed(1) + '%';
        });
    }, updateInterval);
}

// 차트 애니메이션 초기화
function initializeCharts() {
    // 페이지 로드 후 차트 애니메이션 시작
    setTimeout(() => {
        const charts = document.querySelectorAll('.chart-bar .bar-fill');
        charts.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.transition = 'width 1s ease-out';
                bar.style.width = bar.getAttribute('data-width') || bar.style.width;
            }, index * 200);
        });
    }, 1000);
}

// 데이터 내보내기 기능
function exportData(data, filename) {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 차트 초기화 (페이지 로드 시)
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    // simulateRealTimeData(); // 실시간 데이터 업데이트 활성화 (필요시)
});
