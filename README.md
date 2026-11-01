# EMCS Lab Website

Eco-friendly Mobility Control & Systems Lab, Chungnam National University.
정적 사이트(HTML/CSS/JS)이며 GitHub Pages로 배포합니다. `main`에 푸시하면 1–2분 내 자동 반영됩니다.

## 구조

```
index.html               홈 (News · Research 요약 · Team · 최근 논문 · Join · Lectures)
research/index.html      연구 분야 개요
research/<slug>.html     연구 분야 상세 (torque, nvh, heating, sensorless, pcs, autonomy)
publications/index.html  전체 논문·특허 목록
data/publications.js     ★ 논문·특허 데이터 (여기만 고치면 홈/논문 페이지에 모두 반영)
data/research.js         ★ 연구 분야 데이터 (제목, 소개, 본문, 키워드, 관련 논문, 멤버)
assets/style.css         스타일
assets/site.js           공통 스크립트 (렌더링, 히어로 파형, 복사 버튼)
assets/images/           사진·그림 (직접 추가)
```

## 자주 하는 수정

**논문 추가** — `data/publications.js`의 해당 배열(J, IC, DC, PT) **맨 위**에 한 줄 추가:
```js
['J29',2026,'Kim, D., Sung, H., & Kim, Y.*','Paper title','IEEE Transactions on ...'],
```
키(`J29`)는 고유하면 되고, 연구 분야 페이지의 "Related publications"에서 이 키로 참조합니다.
심사중 논문은 `JREVIEW` 배열에, 6번째 칸에 `'under review'`를 적습니다.
`publications/index.html` 상단 탭의 숫자(`<small>28</small>`)와 `pubstats`는 수동으로 맞춰 주세요.

**멤버 추가/졸업** — `index.html`의 `<section id="team">`에서 해당 블록을 복사해 수정합니다.
사진은 `assets/images/`에 넣고 `<div class="photo">photo</div>`를
`<img class="photo" src="assets/images/name.jpg" alt="Name">`로 바꿉니다.

**뉴스** — `index.html`의 `<section id="news">`에 `<li>`를 추가합니다 (최신이 위).

**연구 분야 추가** — `data/research.js`의 `RESEARCH` 배열에 항목을 추가하고,
`research/torque.html`을 복사해 `research/<새slug>.html`로 저장한 뒤
`<body data-research="torque">`의 값을 새 slug로 바꿉니다.

## 로컬에서 확인

브라우저에서 `index.html`을 바로 열어도 되고, 또는:
```
python3 -m http.server 8000   # 후 http://localhost:8000
```

## 배포 (최초 1회)

1. GitHub에서 저장소를 만듭니다. 사용자/조직 이름이 `emcslab`이면 저장소 이름을 `emcslab.github.io`로 하면 `https://emcslab.github.io/`가 주소가 됩니다.
   (다른 이름이면 `https://<계정>.github.io/<저장소>/`가 됩니다. 링크는 모두 상대경로라 둘 다 동작합니다.)
2. 이 폴더의 내용을 올립니다:
   ```
   git init
   git add .
   git commit -m "EMCS Lab website"
   git branch -M main
   git remote add origin https://github.com/<계정>/<저장소>.git
   git push -u origin main
   ```
3. 저장소 **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, Branch: `main` / `/ (root)` 선택 후 Save.
4. 1–2분 뒤 표시되는 주소로 접속합니다.

이후에는 파일을 고치고 `git add . && git commit -m "..." && git push` 하면 자동으로 갱신됩니다.

## 학교 도메인 연결 (선택)

`emcslab.cnu.ac.kr` 같은 주소를 쓰려면 정보화본부에 CNAME 레코드(`<계정>.github.io` 로 향하도록)를 신청하고,
Settings → Pages → Custom domain에 그 주소를 입력합니다. 저장소 루트에 `CNAME` 파일이 자동 생성됩니다.
