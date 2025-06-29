# 디자인 시스템 가이드

## 🎨 색상 팔레트

### 주요 색상
- **Primary Blue**: `#0066ff` - 메인 브랜드 색상
- **Secondary Blue**: `#004ac7` - 호버 및 액티브 상태
- **Accent Cyan**: `#00d4ff` - 강조 및 그라데이션

### 배경 색상
- **Dark Background**: `#0a0b0f` - 메인 배경
- **Darker Background**: `#050507` - 깊은 배경
- **Border Color**: `#1a1d24` - 테두리 및 구분선

### 텍스트 색상
- **Light Text**: `#ffffff` - 주요 텍스트
- **Gray Text**: `#b4b8c0` - 보조 텍스트

### 상태 색상
- **Success Green**: `#00d466` - 성공/긍정
- **Warning Orange**: `#ff8c00` - 경고/주의

## 📝 타이포그래피

### 폰트 패밀리
- **Main Font**: 'Inter' - 본문 및 제목
- **Mono Font**: 'JetBrains Mono' - 코드 및 데이터

### 폰트 크기 체계
- **Hero Title**: 4rem (64px)
- **Section Title**: 2.5rem (40px)  
- **Sub Title**: 1.8rem (28.8px)
- **Body Text**: 1rem (16px)
- **Small Text**: 0.9rem (14.4px)

### 폰트 두께
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## 📐 간격 시스템

### 표준 간격
- **xs**: 0.5rem (8px)
- **sm**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 3rem (48px)

## 🎭 애니메이션

### 지속 시간
- **Fast**: 0.2s - 마이크로 인터랙션
- **Normal**: 0.3s - 일반적인 전환
- **Slow**: 0.5s - 슬라이드 전환

### Easing 함수
- **Ease**: 기본 전환
- **Ease-out**: 진입 애니메이션
- **Ease-in-out**: 복잡한 전환

## 🎯 컴포넌트 스타일

### 버튼
- **Primary**: 파란색 배경, 흰색 텍스트
- **Ghost**: 투명 배경, 테두리만
- **Size**: 40px 높이 표준

### 카드
- **Background**: 반투명 어두운 배경
- **Border**: 1px solid border-color
- **Radius**: 16px
- **Shadow**: 소프트 블루 그림자

### 차트
- **Bar Color**: Primary blue gradient
- **Success Color**: Green
- **Warning Color**: Orange
- **Animation**: 1s ease-out

## 📱 반응형 디자인

### 브레이크포인트
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### 모바일 최적화
- 터치 친화적 버튼 크기 (최소 44px)
- 스와이프 제스처 지원
- 읽기 쉬운 폰트 크기

## 🚀 성능 가이드라인

### 이미지
- WebP 형식 우선 사용
- 적절한 압축 및 크기 최적화
- Lazy loading 적용

### 애니메이션
- CSS 애니메이션 우선 사용
- 60fps 유지
- will-change 속성 적절히 활용

## ♿ 접근성

### 색상 대비
- 최소 4.5:1 대비율 준수
- 색상만으로 정보 전달 금지

### 키보드 네비게이션
- Tab 순서 논리적 구성
- 포커스 표시 명확히

### 스크린 리더
- 의미있는 alt 텍스트
- 적절한 ARIA 라벨 사용
