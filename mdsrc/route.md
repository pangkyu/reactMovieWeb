# 라우팅

- 본 프로젝트에 구현하지는 않았음.

---

- react-router-dom
  - 네비게이션을 만들어주는 패키지
  - 터미널에서 npm install react-router-dom
- 라우터

  - url을 가지고 이동해줌

  - HashRouter

  ```js
  import { HashRouter, Route } from "react-router-dom";

  //다음 import는 예시 임포트

  import About from "./routes/About";
  import Home from "./routes/Home";

  function App() {
    return (
      <HashRouter>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </HashRouter>
    );
  }
  ```

  - 위와 같이 코드를 작성후 path경로를 /about으로 잡으면 두 컴포넌트가 동시에 모두 렌더링이 된다.
    ==> 이유 : 리액트 라우터는 기본적으로 url을 가져오는데 / 에서 매칭이 된 home이 렌더링되고 그 후 about까지 가서 /about로 렌더링을 함께 시킨다.

    ==> 해결방법

    ```js
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
      </HashRouter>
    );
    ```

  - Route 안에는 중요한 props(렌더링할 스크린)이 들어감. 다른 props는 뭘 할지 정한다.

---

- Build navigation

```js
import Navigation from "./Navigation";
//...
return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
);
```

```js
//./Navigation.js
import React from "react";

function Navigation() {
  return (
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </div>
  );
}
export default Navigation;
```

- 위와 같이 하면 페이지를 강제로 새로고침하고 리액트가 죽음

※ 해결방법)
`js import Navigation from "./Navigation"; //... return <HashRouter> <Navigation /> <Route path = "/" exact = {true} component = {Home}/> <Route path = "/about" component = {About}/> </HashRouter> `
```js
//./Navigation.js
import React from "react";
import { Link } from "react-router-dom";

        function Navigation(){
            return <div>
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
            </div>
        }
        export default Navigation;
    ```

- 단, router밖에서 Link를 사용할 수는 없다.
- HashRouter대신 BrowserRouter를 사용할 수도 있다.

- 모든 컴포넌트는 props를 갖는다 (router-dom으로 인해)
  ==> 클릭 한번으로 정보를 전달할 수 있다.

  - Link를 다음과 같이 수정할 수 있다.

  ```js
  <Link
    to={{
      pathname: "/courses",
      search: "?sort=name",
      hash: "#the-hash",
      state: { fromDashboard: true },
    }}
  />
  ```

  - 그래서 다음과 같이 변경

  ```js
  // Navigation.js
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link
        to={{
          pathname: "/about",
          state: {
            fromNavigation: true,
          },
        }}
      >
        About
      </Link>
    </div>
  );
  ```

  - route로 정보를 보내줌

---

- 무비 컴포넌트로 정보를 보내는 법

```js
    // Moives.js
   //...
   import { Link } from "react-router-dom";
   //...
   return (
       <Link to = ({
           pathname : '/movie-detail',
           state : {
               year, title, summary, poster, genres
           }
       })>
           //...
       </Link>
   )
```

```js
// Detail.js
import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    return <span>{location.state.title}</span>;
  }
}
export default Detail;
// /movie-detail을 입력하면 홈으로 이동
```

- 위와 같이 하면 componentDidMount()가 더 늦게 실행되기 때문에 에러발생.

- 해결방안)

```js
  componentDidMount(){
    const { location } = this.props;
    if (location.state === undefined){
            history.push("/");
    }
  }
  render(){
      const { location } = this.props;
      if(location.state){
          return <span>{location.state.title}</span>;
      }else{
          return null;
      }

  }
```
