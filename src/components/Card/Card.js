import React from 'react';
import "./styles.scss";

function Card({ title, image, price, onClickFavorite, onClickAdd }) {
    // like/unlike
    const [isAddedFav, setIsAddedFav] = React.useState(false);

    const onClickFav = () => {
        // onClickAdd({ title, image, price });
        setIsAddedFav(!isAddedFav);
    };

    // add to cart
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onClickAdd({ title, image, price });
        setIsAdded(!isAdded);
    };

    return (
        <div className="content__card">
            {/* <button className="content__btn" onClick={onClickFavorite}> */}
                <img
                    className="content__heart"
                    onClick={onClickFav}
                    src={isAddedFav ? '/img/heart-like.jpg' : '/img/heart-unlike.jpg'}
                    alt="Unlike"
                />
            {/* </button> */}
            <img className="content__img" src={image} alt="Sneakers" />
            <h5 className="content__text">{title}</h5>
            <div className="content__inner">
                <div className="content__price">
                    <span>Цена:</span>
                    <p>{price}</p>
                </div>
                <img
                    className="content__btn-img"
                    onClick={onClickPlus}
                    src={isAdded ? '/img/btn-add.svg' : '/img/btn-plus.svg'}
                    alt="Add to basket"
                />
            </div>
        </div>
    );
}

export default Card;