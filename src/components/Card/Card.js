import React from 'react';
import "./styles.scss";

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    };

    return (
        <div className="content__card">
            <button className="content__btn" onClick={props.onClickFavorite}>
                <img className="content__heart" src="/img/heart-unlike.svg" alt="Unlike" />
            </button>
            <img className="content__img" src={props.image} alt="Sneakers" />
            <h5 className="content__text">{props.title}</h5>
            <div className="content__inner">
                <div className="content__price">
                    <span>Цена:</span>
                    <p>{props.price}</p>
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