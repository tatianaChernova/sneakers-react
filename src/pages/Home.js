import React from 'react';
import { Link } from 'react-router-dom';
import Card from "../components/Card/Card";
import slider from '../img/slider.png';
import sliderLogo from '../img/slider-logo.png';
import search from '../img/search.svg';
import btnClear from '../img/btn-clear.svg';

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite, isLoading }) {

    const renderItems = () => {
        const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        return (isLoading ? [...Array(8).fill(<Card loading={isLoading} />)] : filteredItems).map((item, index = 0) => {
            return (
                <Card
                    key={index}
                    index={index}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    parentId={item.parentId}
                    image={item.image && require(`./../../src/img/sneakers/${item.image}.jpg`)}
                    onClickFavorite={(obj) => onAddToFavorite(obj)}
                    onClickAdd={(obj) => onAddToCart(obj)}
                    loading={isLoading}
                />);
        })
    }
    return (
        <>
            <div className="content">
                <div className="slider__wrapper">
                    <div className="slider__left">
                        <img className="slider__logo" src={sliderLogo} alt="logo" />
                        <h2 className="slider__title">Stan Smith, <span>Forever!</span></h2>
                        <Link to="/sneakers-react/favorites">
                            <button className="green-btn slider__btn" type="submit">Купить</button>
                        </Link>
                    </div>
                    <img src={slider} alt="Slider" />
                </div>

                <div className="content__top">
                    <h1 className="content__title">{searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}</h1>
                    <div className="content__search">
                        <img className="content__search-icon" src={search} alt="Search" />

                        {searchValue && (
                            <img
                                onClick={() => setSearchValue('')}
                                className="content__search-clear"
                                src={btnClear}
                                alt="Clear" />)}

                        <input
                            onChange={onChangeSearchInput}
                            value={searchValue}
                            className="content__input"
                            type="text"
                            placeholder="Поиск..." />
                    </div>
                </div>

                <div className="content__cards">
                    {renderItems()}
                </div>
            </div>
        </>
    );
}

export default Home;