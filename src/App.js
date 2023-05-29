import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import AppContext from './context';

import Header from "./components/Header/Header";
import Rightside from "./components/Rightside/Rightside";

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

import './reset.css';

function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('http://localhost:3001/cart'),
          axios.get('http://localhost:3001/favorites'),
          axios.get('http://localhost:3001/items')
        ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
        console.error(error.response.data);
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`http://localhost:3001/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(`http://localhost:3001/cart`, obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    }
    catch (error) {
      alert("Не удалось добавить в корзину");
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`http://localhost:3001/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert("Не удалось удалить из корзины");
      console.error(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`http://localhost:3001/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(`http://localhost:3001/favorites`, obj);
        setFavorites((prev) => [...prev, data]);
      }
    }
    catch (error) {
      alert('Не удалось добавить в закладки');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <div v-if="items !== null">
      <AppContext.Provider value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems
      }}>

        <div className="wrapper">
          <Rightside
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
            opened={cartOpened}
          />
          <Header onClickCart={() => setCartOpened(true)} />

          <Routes>
            <Route path="/sneakers-react" element={
              <Home
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                cartItems={setCartItems}
                isLoading={isLoading}
              />}
            />
            <Route path="/sneakers-react/favorites" element={<Favorites />} />
            <Route path="/sneakers-react/orders" element={<Orders />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
