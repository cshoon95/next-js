# next.js
Framework라고 생각. <br/>
next js가 내가 작성한 코드를 호출하고 있음.
## pages 
함수의 이름은 중요하지 않고, 중요한 것은 함수가 default로 export된다는 점. <br/>
파일명에 따라 Url이 결정된다. index와 같은 예외가 있긴하지만, pages안에 register.ts인 경우 localhost:3000/register


## Client Side Rendering vs Server Side Rendering
### react-create-app -> CSR <br/>
    📌 나의 브라우저가 유저가 보는 UI를 만드는 모든 것을 한다는 것을 의미
    📌 브라우저가 자바스크립트, React 등 모든 것을 fetch한 후에야 UI가 보임
    📌 예를 들어 이미 렌더링 된 것 중 로고나 네비게이션이나 유저가 보는 HTML 소스코드 안에 들어있지 않음.
    * noscript : 유저가 브라우저에서 자바스크립트를 비활성화 했을 때만 나오는 태그

### next-js          -> SSR <br/> 
    📌 Pre Rendering
    📌 유저가 페이지를 요청하면 진짜 HTML을 얻게 됨. (유저들의 연결 속도가 느리거나 자바스크립트가 비활성화 되어있더라도.)
    📌 Hydrate는 Server Side 단에서 렌더링 된 정적 페이지와 번들링된 JS파일을 클라이언트에게 보낸 뒤, 클라이언트 단에서 HTML 코드와 React인 JS코드를 서로 매칭 시키는 과정
    📌 react.js를 백엔드에서 동작시켜서 페이지를 미리 만듦

## styled jsx
```javascript
<style jsx global>{`
nav {
    background-color: tomato;
}
a {
    text-decoration: none;
}`}</style>
```

## _app.ts
    📌 Next.js는 현재 프로젝트 기준으로 about이 렌더링되기 전에 먼저 app을 봄 (app -> about -> index)
    📌 app = bluepoint
    📌 _app -> param -> {Componrnt, props}
    📌 global prop is applied in all components in a sigle page and css imported in _app.js is applied in all components in all pages.