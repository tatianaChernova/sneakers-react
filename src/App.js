import React from 'react';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Rightside from "./components/Rightside/Rightside";
import './reset.css';

function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(
    () => {
      fetch('https://6459d48695624ceb21f076f5.mockapi.io/items').then(res => {
        return res.json();
      }).then(json => {
        setItems(json);
      }); 
    }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
    console.log(obj);
  }; 

  return (
    <div className="wrapper">

      {cartOpened && <Rightside items={cartItems} onClose={() => setCartOpened(false)} />}
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
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              image={item.image}
              onClickFavorite={() => console.log("Добавили в закладки")}
              onClickAdd={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
