멀티캠퍼스 객체지향 javascript 기본 과정

# 개발환경 구축
## 프로그램 설치
* OS 맞는 버전 다운로드 후 설치
1. Nodejs 설치 [Download Pages](https://nodejs.org/en/download/)    
2. Visual Studio Code 설치 [Download Pages](https://code.visualstudio.com/download)
3. Chrome 브라우저 설치 [Download Pages](https://www.google.com/chrome)
## Visual Studio Code 설정
1. VSCode 실행
2. Manage > Setting(좌측 하단의 톱니바퀴 모양 아이콘 클릭 후 Settings 메뉴 선택)
    * Auto Save: onFocusChange
    * Font Size: 각자 맞춰서 조절
    * Tab Size: 2
    * Detect Indentation: 체크 해제

## 소스코드 다운로드
* [Download Pages](https://github.com/uzoolove/js202010/blob/main/sample/day1.zip) 이동 후 Download 클릭해서 로컬에 다운로드
* 다운로드 받은 day1.zip 파일을 C 드라이브 root에 압축 해제
  * C:\jslab\ch03
  * C:\jslab\css
  * C:\jslab\etc
  * C:\jslab\img
  * C:\jslab\js
  * C:\jslab\index.html

## VSCode에서 작업 폴더 오픈
1. VSCode 좌측 아이콘 중 Explorer 선택
2. Open Folder 선택
3. 작업 폴더(C:\jslab) 선택

# 웹버서 구동 및 테스트
1. VSCode의 View > Terminal 메뉴 선택
2. Terminal에서 webserver.js 파일이 있는 폴더로 이동
```
> cd etc\nodejs
```
3. node-static 확장모듈 설치(최초 한번만)
```
> npm i node-static
```
4. node 명령어로 웹서버 구동
```
> node webserver.js
```
5. 크롬 브라우저 주소창에 http://localhost 입력
6. F12 눌러서 크롬 브라우저의 개발자 도구 표시
7. 각 예제 실행 결과를 개발자 도구의 Console 탭에서 확인
