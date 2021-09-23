# fetch

---

fetch

```js
// 데이터를 fetch
class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "we are ready"}</div>;
  }
}
```

---

- axios

  - fetch 위에 있는 작은 레이어라고 생각하면 됨

  ```js
   getMovies =  async() => {
    const {
      data: { // movies.data.data.movies의 es6버전 구문
        data : {movies}
        }
      } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    console.log(movies);
  }
  componentDidMount(){
    this.getMovies();
  }

  ```

  - async를 선언함으로 axios가 끝날 때 까지 대기하게 됨

  ※ 생성자에서 안하고 componentDidMount에서 하는 이유
  => 생성자는 클ㄹ래스가 생성되는 시점에! 구성 요소가 DOM에 있을 때 componentDidMount가 호출

---

- 일반 html 에서는 class를 사용하지만 jsx에서는 리액트가 착각을 할 수 있으므로 className을 사용한다.
