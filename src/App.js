import React from 'react';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Rightside from "./components/Rightside/Rightside";
import './reset.css';

const cards = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12 999 руб.',
    image: "img/sneakers/img-1.jpg"
  }, {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: '12 999 руб.',
    image: "img/sneakers/img-2.jpg"
  }, {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '8 499 руб.',
    image: "img/sneakers/img-3.jpg"
  }, {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '8 999 руб.',
    image: "img/sneakers/img-4.jpg"
  }, {
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: '15 199 руб.',
    image: "img/sneakers/img-5.jpg"
  }, {
    title: 'Мужские Кроссовки Nike Kyrie 7',
    price: '11 299 руб.',
    image: "img/sneakers/img-6.jpg"
  }, {
    title: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: '10 799 руб.',
    image: "img/sneakers/img-7.jpg"
  }, {
    title: 'Мужские Кроссовки Nike LeBron XVIII',
    price: '16 499 руб.',
    image: "img/sneakers/img-8.jpg"
  }
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  return (
    <div className="wrapper">

      {cartOpened && <Rightside onClose={()=>setCartOpened(false)} /> }
      <Header onClickCart={() => setCartOpened(true)} />

      {/* Slider */}

      <div className="content">
        <div className="content__top">
          <h1 className="content__title">Все кроссовки</h1>
          <div className="content__search">
            <img className="content__search-icon" src="/img/search.svg" alt="Search" />
            <input className="content__input" type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="content__cards">
          {cards.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              image={obj.image}
              onClickFavorite={() => console.log("Добавили в закладки")}
              onClickAdd={() => console.log("Добавили в корзину")} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
