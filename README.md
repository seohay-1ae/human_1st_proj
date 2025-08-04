# 📦 Team Project Starter

이 저장소는 **VS Code 기반의 팀 프로젝트 개발 환경**을 빠르게 설정하기 위한 기본 설정을 포함합니다.  
Prettier와 ESLint를 이용한 **통일된 코드 스타일**, 추천 확장, 자동 포맷 기능이 모두 준비되어 있어요.

---

## 🧑‍💻 팀원 작업 가이드

### ✅ 기본 작업 순서 (숙지)

1. Node.js 설치 확인
2. 저장소 클론 및 VS Code로 열기
3. `npm install` 실행
4. 코드 저장 시 자동 포맷 및 ESLint 적용
5. 브랜치 생성 후 기능 개발 시작

> VS Code로 열면 추천 확장은 자동 설치됩니다.  
> 저장만 해도 Prettier 포맷 + ESLint 자동 수정 적용!

---

## 🚀 자동세팅 사용법 (최초 1회) ⚠️⚠️⚠️ (따라하세요)

### 1. Node.js 설치 확인

**CMD**에서 다음 명령어를 입력:

```bash
node -v
```

버전이 출력되지 않으면 Node.js 공식 사이트에서 설치하세요.  
**LTS(Long-Term Support)** 버전을 선택하면 안정적입니다.  
설치 후 다시 명령어 입력하여 버전 출력되는지 확인.

---

### 2. 저장소 클론

아래 명령어를 **CMD**에서 한 줄씩 입력하세요 **⚠️(띄어쓰기 주의)**

```bash
d:
mkdir sidemenu
cd sidemenu
git clone https://github.com/seohay-1ae/sidemenu.git .
code .
```

> `.`은 현재 디렉토리에 저장소를 복제하겠다는 의미입니다.  
> `code .` 후 엔터를 치면 `d:\sidemenu` 루트로 **자동으로 VSCode가 실행됩니다.**  
> **"이 워크스페이스에서 추천하는 확장 기능이 있습니다."**라는 팝업이 뜨면  
> **⚠️⚠️ 설치❌, 닫기❌ 일단 두고 다음 단계 진행**

---

### 3. 의존 패키지 설치

VS Code에서 ESLint, Prettier, 자동 포맷 등이 제대로 작동하려면 아래 설정이 필요해요.

✅ 실행 방법

1. 자동으로 실행된 VSCode에서 `Ctrl + ~` (터미널 열기)
2. 아래 명령어 입력

```bash
npm install
```

> ⚠️ 루트 폴더(sidemenu)에 `package.json` 파일이 생성되었는지 확인하세요.

---

### 4. 확장 프로그램 설치

아까 떴던 팝업  
**"이 워크스페이스에서 추천하는 확장 기능이 있습니다."**

✅ **"모두 설치"** 를 클릭하세요.  
이후 **파일 저장만 해도 자동 포맷/ESLint 수정**이 적용됩니다!

---

## 💻 개발 환경 자동 설정 (세팅값 설명)

### 📂 주요 설정 파일

| 파일명                    | 설명                                        |
| ------------------------- | ------------------------------------------- |
| `.vscode/settings.json`   | 저장 시 자동 포맷, ESLint 연동 설정         |
| `.vscode/extensions.json` | 추천 확장 목록                              |
| `.prettierrc`             | 코드 포맷 스타일 설정                       |
| `.eslintrc.js`            | 코드 검사 및 규칙 설정 (Prettier 연동 포함) |

---

### `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": false,
  "eslint.validate": ["javascript", "javascriptreact"],
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "prettier.requireConfig": true,
  "prettier.singleQuote": true,
  "prettier.printWidth": 100,
  "prettier.tabWidth": 2,
  "prettier.useTabs": true,
  "files.exclude": {
    "**/node_modules": true
  },
  "search.exclude": {
    "**/node_modules": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

### `.vscode/extensions.json`

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "donjayamanne.jquerysnippets",
    "ecmel.vscode-html-css",
    "esbenp.prettier-vscode",
    "formulahendry.auto-rename-tag",
    "formulahendry.code-runner",
    "kisstkondoros.vscode-gutter-preview",
    "ms-ceintl.vscode-language-pack-ko",
    "ms-vscode.live-server",
    "naumovs.color-highlight",
    "oderwat.indent-rainbow",
    "pranaygp.vscode-css-peek",
    "ritwickdey.liveserver",
    "solnurkarim.html-to-css-autocompletion",
    "streetsidesoftware.code-spell-checker",
    "vincaslt.highlight-matching-tag",
    "zignd.html-css-class-completion"
  ]
}
```

---

### `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": true,
  "printWidth": 100,
  "bracketSpacing": true,
  "trailingComma": "all"
}
```

---

### `.eslintrc.js`

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        printWidth: 100,
        tabWidth: 2,
        useTabs: true,
        bracketSpacing: true,
        trailingComma: 'all',
      },
    ],
    semi: ['error', 'always'],
    'no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
```

---

Happy Coding! ✨
