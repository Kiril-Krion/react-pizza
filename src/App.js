import React, { useEffect, useState } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';

import './scss/app.scss';

function App() {
  //https://6291edfbcd0c91932b6a6ef4.mockapi.io/items
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://6291edfbcd0c91932b6a6ef4.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((arr) => {
      setItems(arr);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
