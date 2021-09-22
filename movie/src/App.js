import logo from './logo.svg';
import './App.css';

function Food({fav}){
  return <h1>I like {fav}</h1>
}


function renderFood(dish){
  console.log(dish);
  return <Food name = {dish.name} picture = {dish.image}/>
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
