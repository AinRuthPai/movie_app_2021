import React from "react";

function Food({name, number}) {
  return <div>
    <h2>I like {name}</h2>
    <h3>this number is {number}</h3>
  </div>
}

const foodILike = [{name: "kimchi", num: "1"}, {name: "ramen", num: "2"}, {name: "kimbab", num: "3"}];

function App() {
  return (
    <div>
    {foodILike.map(dish => <Food name={dish.name} number={dish.num}/>)}
    </div>
  );
}

export default App;
