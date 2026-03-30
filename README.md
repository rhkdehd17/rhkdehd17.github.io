# GitHub Pages Developer Portfolio

GitHub Pages에 바로 배포할 수 있는 정적 개발자 포트폴리오 웹사이트입니다.

## 파일 구성

- `index.html`: 페이지 구조
- `styles.css`: 전체 디자인과 반응형 스타일
- `script.js`: 포트폴리오 데이터와 동적 렌더링
- `.github/workflows/deploy.yml`: GitHub Pages 자동 배포 워크플로

## 내 정보로 바꾸는 방법

`script.js` 상단의 `portfolio` 객체만 수정하면 됩니다.

- `brand`, `role`, `title`, `summary`
- `heroStats`
- `strengths`
- `projects`
- `timeline`
- `stack`
- `contact`

특히 아래 항목은 반드시 본인 정보로 교체하세요.

- `hello@example.com`
- `https://github.com/your-id`
- `https://www.linkedin.com/in/your-id`
- `https://your-site.example.com`

## GitHub Pages 배포 방법

1. 이 폴더를 GitHub 저장소에 올립니다.
2. 기본 브랜치를 `main`으로 사용합니다.
3. GitHub 저장소의 `Settings > Pages`로 이동합니다.
4. `Build and deployment`에서 `Source`를 `GitHub Actions`로 선택합니다.
5. `main` 브랜치에 푸시하면 자동으로 배포됩니다.

## 로컬에서 확인하기

정적 사이트라서 간단한 서버만 있으면 됩니다.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 열어 확인할 수 있습니다.
