import React from 'react';
import Card from "../components/Card/Card";
import AppContext from '../context';

function Favorites() {
    const { favorites, onAddToFavorite, onAddToCart } = React.useContext(AppContext);
    return (
        <>
            <div className="content">
                <div className="content__top">
                    <h1 className="content__title">Мои закладки</h1>
                </div>
                <div className="content__cards">
                    {favorites.map((item, index = 0) => {
                        return (
                            <Card
                                key={index}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                index={index}
                                favorited={true}
                                onClickFavorite={(obj) => onAddToFavorite(obj)}
                                onClickAdd={(obj) => onAddToCart(obj)}
                            />);
                    })}
                </div>
            </div>
        </>
    );
}

export default Favorites;