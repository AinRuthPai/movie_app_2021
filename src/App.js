import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1, 
    name: "kimchi", 
    num: 1,
    rating: "5.0"
  }, 
  {
    id: 2, 
    name: "ramen", 
    num: 2,
    rating: "3.5"
  },
  {
   id: 3, 
   name: "kimbab", 
   num: 3,
   rating: "4.5"
  }
];

function Food({name, number, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h3>{rating} / 5.0</h3>
    <h3>this number is {number}</h3>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired
};

function App() {
  return (
    <div>
    {foodILike.map(
      dish => <Food 
      key={dish.id} 
      name={dish.name} 
      number={dish.num}
      rating={dish.rating}
      />
      )}
    </div>
  );
}

export default App;
