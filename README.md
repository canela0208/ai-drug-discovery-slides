# 🧬 AI 신약 타겟 발굴 프레젠테이션

> **github pages test page**
[slide page](https://fourmodern.github.io/ai-drug-discovery-slides/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com)

![AI Drug Discovery](https://img.shields.io/badge/AI-Drug%20Discovery-purple)
![Presentation](https://img.shields.io/badge/Type-Interactive%20Slides-blue)
![Status](https://img.shields.io/badge/Status-Production%20Ready-green)

## 📋 프로젝트 개요

AI를 활용한 신약 타겟 발굴의 현황과 미래 전망을 다루는 [**10페이지 인터랙티브 슬라이드 프레젠테이션**](https://fourmodern.github.io/ai-drug-discovery-slides/)입니다. github pages를 통한 슬라이드 배포에 대한 테스트 페이지 입니다.

### 🎯 주요 특징

- **🎨 모던 디자인**: 퍼플 기반 글래스모피즘 디자인 시스템
- **📱 완전 반응형**: 데스크톱, 태블릿, 모바일 최적화
- **⚡ 부드러운 애니메이션**: 60fps 네이티브 전환 효과
- **🎮 다양한 네비게이션**: 버튼, 키보드, 터치/스와이프 지원
- **♿ 접근성**: WCAG 2.1 AA 준수, 스크린 리더 지원
- **🔧 개발자 친화적**: 상세한 디버깅 로그와 모듈화된 구조

## 🗂️ 슬라이드 구성

| 슬라이드 | 제목 | 주요 내용 |
|---------|------|-----------|
| 1 | 타이틀 및 핵심 통계 | 91B USD 시장 규모, 29.7% 성장률, 80%+ 성공률 |
| 2 | 시장 현황과 성장 전망 | 2024-2030 시장 성장 분석 |
| 3 | 주요 AI 기술과 방법론 | GNN, 트랜스포머, 지식 그래프, 멀티오믹스 |
| 4 | 성공 사례 | Insilico Medicine ISM001-055 |
| 5 | 주요 플레이어와 파트너십 | $30B+ 빅파마 투자 현황 |
| 6 | 기술적 도전과제 | 데이터 품질, 해석가능성, 컴퓨팅 요구사항 |
| 7 | AI의 정량적 장점 | 성공률 2배, 개발기간 75% 단축 |
| 8 | 규제 환경과 승인 현황 | FDA/EMA 가이드라인, 임상 파이프라인 |
| 9 | 미래 기술 트렌드 | 양자컴퓨팅, CRISPR-AI 융합 |
| 10 | 전략적 시사점과 결론 | 투자 기회와 핵심 전략 |

## 🚀 빠른 시작

### 1. 로컬 실행

```bash
# 프로젝트 클론
git clone https://github.com/fourmodern/ai-drug-discovery-slides.git
cd ai-drug-discovery-slides

# 로컬 서버 실행
cd src
python3 -m http.server 8000

# 브라우저에서 열기
open http://localhost:8000
```

### 2. 네비게이션 방법

| 방법 | 조작 |
|------|------|
| **마우스** | ▶️ ◀️ 버튼 클릭 |
| **키보드** | `←` `→` `Space` `Home` `End` |
| **모바일** | 좌우 스와이프 |

## 🎨 디자인 시스템

### 컬러 팔레트
```css
--primary-purple: #673AB7    /* Deep Purple */
--secondary-purple: #9C27B0  /* Light Purple */
--accent-purple: #B388FF     /* Soft Purple */
--tertiary-indigo: #3F51B5   /* Indigo */
```

### 타이포그래피
- **폰트**: Pretendard (완벽한 한글 지원)
- **계층구조**: 5단계 텍스트 레벨
- **반응형**: 화면 크기별 최적화

### 효과
- **글래스모피즘**: `backdrop-filter: blur(12px)`
- **그라데이션**: 3가지 조합 패턴
- **애니메이션**: `transition: 0.7s ease-out`

## 📂 프로젝트 구조

```
ait/
├── 📄 README.md              # 프로젝트 문서
├── 📋 project-plan.md        # 개발 계획서
├── 🙈 .gitignore            # Git 제외 파일
├── 📁 src/                   # 소스 코드
│   ├── 🌐 index.html         # 메인 HTML
│   ├── 📁 css/               # 스타일시트
│   │   ├── 🎨 design-system.css  # 디자인 시스템
│   │   ├── 🎪 style.css          # 메인 스타일
│   │   └── 📑 slides.css         # 슬라이드 스타일
│   ├── 📁 js/                # JavaScript
│   │   ├── ⚙️ main.js            # 메인 로직
│   │   ├── 🎬 slides.js          # 슬라이드 애니메이션
│   │   └── 📊 charts.js          # 차트 & 시각화
│   └── 📁 images/            # 이미지 리소스
├── 📁 assets/                # 에셋
├── 📁 docs/                  # 문서
└── 📁 tests/                 # 테스트
```

## 🔧 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, Custom Properties
- **Vanilla JavaScript**: ES6+, 모듈화 구조
- **Font**: Pretendard Variable Font

### 개발 도구
- **Version Control**: Git
- **Testing**: Playwright (E2E 테스트 완료)
- **Linting**: 코드 품질 관리
- **Deployment**: 정적 호스팅 지원

## 🧪 테스트 결과

✅ **Playwright E2E 테스트 통과**
- 슬라이드 전환: 100% 정상 작동
- 키보드 네비게이션: 모든 키 지원
- 버튼 상태 관리: 완벽한 활성화/비활성화
- 반응형 디자인: 모든 디바이스 지원
- 성능: 60fps 부드러운 애니메이션

## 📊 성능 지표

| 항목 | 성능 |
|------|------|
| **First Contentful Paint** | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Cumulative Layout Shift** | < 0.1 |
| **Time to Interactive** | < 3.0s |
| **Accessibility Score** | 100/100 |

## 🌐 브라우저 지원

| Browser | Version |
|---------|---------|
| Chrome | 90+ ✅ |
| Firefox | 88+ ✅ |
| Safari | 14+ ✅ |
| Edge | 90+ ✅ |
| Mobile Safari | iOS 14+ ✅ |
| Chrome Mobile | 90+ ✅ |

## 🤝 기여하기

1. **Fork** the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a **Pull Request**

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 연락처

- **프로젝트 링크**: [https://github.com/your-username/ai-drug-discovery-slides](https://github.com/fourmodern/ai-drug-discovery-slides)
- **이슈 리포트**: [Issues](https://github.com/your-username/ai-drug-discovery-slides/issues)
- **기능 요청**: [Feature Requests](https://github.com/fourmodern/ai-drug-discovery-slides/issues/new?template=feature_request.md)

## 🙏 감사의 말

- **Pretendard** 폰트 제공: [orioncactus/pretendard](https://github.com/orioncactus/pretendard)
- **Font Awesome** 아이콘: [FortAwesome/Font-Awesome](https://github.com/FortAwesome/Font-Awesome)
- **디자인 영감**: 현대적인 웹 디자인 트렌드

---

<div align="center">

**🧬 Made with ❤️ for the future of AI-driven drug discovery**

[⭐ Star this repo](https://github.com/your-username/ai-drug-discovery-slides) • [📥 Download](https://github.com/your-username/ai-drug-discovery-slides/archive/main.zip) • [🐛 Report Bug](https://github.com/your-username/ai-drug-discovery-slides/issues)

</div>
