import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {    
  return (
    <div>
      <h2>I like { name }</h2>
      <h4>{rating}/10.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/%EC%82%BC%EA%B2%B9%EC%82%B4%EA%B3%BC_%EC%83%81%EC%B6%94%EC%8C%88_20150313%EA%B3%84%EC%A0%88%EB%B0%A5%EC%83%81_%EC%9D%B8%EC%82%AC%EB%8F%99%EC%A0%9043.jpg/560px-%EC%82%BC%EA%B2%B9%EC%82%B4%EA%B3%BC_%EC%83%81%EC%B6%94%EC%8C%88_20150313%EA%B3%84%EC%A0%88%EB%B0%A5%EC%83%81_%EC%9D%B8%EC%82%AC%EB%8F%99%EC%A0%9043.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/440px-Dolsot-bibimbap.jpg',
    rating: 7,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dongaseu_4.jpg/440px-Dongaseu_4.jpg',
    rating: 4,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Korean.food-Kimbap-03.jpg/480px-Korean.food-Kimbap-03.jpg',
    rating: 9.8,
  },
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
}


function App() {  
  console.log(foodILike.map(renderFood));
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;