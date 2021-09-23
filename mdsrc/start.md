# start

---

    - 시작

        - 시작할 폴더에서 npm start

---

    - map
        - map은 array의 각 아이템에서 function을 실행하는 array를 가지는 js function이며, 그 function의 result를 갖는 array를 받는다.

---

    - Protextion with PropTypes
    - 부모 컴포넌트로부터 전달받은 props가 우리가 예상한 props인지를 알아야 한다.
        - npm i prop-types

    ```js
        //ex)
        Food.propTypes = {
            name : PropTypes.string.isRequired,
            picture : PropTypes.string.isRequired,
            rationg : PropTypes.number.isRequired
        };
    ```
        - 다음과 같이 체크를 할 수 있다.

---

    - state

        - class react component는 return을 갖지않는다.  ==> function 이 아니기때문
        - function component는 function이고 무언가를 return 그리고 스크린에 표시
        - class component는 react component로 부터 확장되고 스크린에 표시
        - state는 object이고, component의 data를 넣을 공간이 있고 이 데이터는 변한다.
        - 직접 state를 변경하지 말고 setState를 이용할 것
            ex)
                this.setState(current => ({count : current.count - 1}));

---

    - mounting
        - constructor()
            - 컴포넌트가 마운트될 때, 컴포넌트가 스크린에 표시될 때, 컴포넌트가 너의 웹사이트에 갈 때, 생성자를 호출
        - componentDidMount()

    - update
        - componentDidUpdate()
            - state값을 바꾸는 등 업데이트를 할떄

    - unmounting
        - componentWillUnmount()
            - 다른페이지에 가는 등 컴포넌트를 떠날때


    ==> setState() 호출 -> component 호출 -> render호출 -> 업데이트 완료후 compoentDidUpdate실행
