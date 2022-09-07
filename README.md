Created at 2022. 09.
<br />
<br />
nest, cra 세팅

```
  $ npm i -g @nestjs/cli
  $ nest new [project-name]

  $ npx create-react-app [project-name] --template typescript
```

기본 Url 제거

```
  "baseUrl": "./src" >> tsconfig.json
```

CRA의 기본 린팅 속성을 삭제.

```
  "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
```

현재 설정으로 모듈 재설치.

```
  $ rm -rf node_modules package-lock.json && yarn
```

eslint 세팅

```
  $ yarn add -D eslint
  $ npx eslint --init
```

install 설정 값.

```
  √ style(fix problem and code style)
  √ esm(javascript)
  √ react(react)
  √ yes(this project use typescript)
  √ browser(browser)
  √ guide(popular)
  √ standard-with-typescript(standard)
  √ JSON
  √ yes(install now)
  √ yarn(yarn)
```

prettier 세팅

```
  yarn add -D prettier
  yarn add -D eslint-config-prettier eslint-plugin-prettier
```

```
  "extends": [
    ...,
    "plugin:@typescript-eslint/recommand",
    "plugin:prettier/recommand",
  ],
  "parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
    ...
  },
  "plugins": [..., "react-hooks", "@typescript-eslint"],
  "settings": {
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx", ".ts", ".tsx"],
				"moduleDirectory": ["node_modules", "@types"]
			},
			"typescript": {}
		}
  }
```

```
  ⌘(command) + shift + p => settings.json
  { 
    ...
    
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "eslint.alwaysShowStatus": true,
    "eslint.enable": true,
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact"
    ],
    
  ...
  }
```

```
  $ npx lerna init --independent
```

```
  $ npx lerna run start
```