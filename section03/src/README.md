### 1. start, type 설정 package.json 파일

```
{
  "name": "section03",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js"  // npm run start하면 해당 경로 파일 실행
  },
  "author": "",
  "license": "ISC",
  "type": "module" // 모듈시스템을 사용하겠다 설정
}
```

### "start": "node src/index.js"

> npm run start하면 해당 경로 파일 실행

### "type": "module"

> ES모듈시스템을 사용하기 위해 설정

> .js 파일이 ES 모듈로 처리되므로 import와 export 구문을 사용할 수 있다.

<br/><hr/><br/>

### 2. 라이브러리 설치 후 packge.json 파일

```
{
  "name": "section03",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "section03",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "randomcolor": "^0.6.2"
      }
    },
    "node_modules/randomcolor": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/randomcolor/-/randomcolor-0.6.2.tgz",
      "integrity": "sha512-Mn6TbyYpFgwFuQ8KJKqf3bqqY9O1y37/0jgSK/61PUxV4QfIMv0+K2ioq8DfOjkBslcjwSzRfIDEXfzA9aCx7A=="
    }
  }
}
```

```
"dependencies": {
    "randomcolor": "^0.6.2"
}
```

> 라이브러리코드를 보관하는 Node Modules 폴더를 삭제했어도 package.json에 정보만 가지고 있어도
> `npm install(또는 npm i)`로 다시 설치하면 된다.
