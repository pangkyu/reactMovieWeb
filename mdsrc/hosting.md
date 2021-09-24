# 깃 허브에 호스팅 시키기

1.  터미널에서 npm i gh-pages
2.  package.json에서 아래와 같이 입력
    ```js
    "homepage" : "https://{your Github Username}.github.io/{the name of your project in github}"
    ```
3.  package.json에서 다음과 같이 입력

    ```js
    "scripts" : {
        "deploy" : "gh-pages -d build",
        "predeploy" : "npm run build"
    }
    ```

    터미널에서 npm run build

    - deploy : build폴더를 업로드
      - build 폴더를 얻는 방법 : num run build를 해야함. 그래서 predeploy도 넣어줘야함(predeploy를 먼저 실행함)

※업데이트가 되었을 때는 터미널에 npm run deploy입력
