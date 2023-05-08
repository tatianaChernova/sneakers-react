import React from 'react';

function Card() {
    return (
        <div className="content__card">
            <button className="content__btn">
                <img className="content__heart" src="/img/heart-unlike.svg" alt="Unlike" />
            </button>
            <img className="content__img" src="/img/sneakers/img-1.jpg" alt="Sneakers" />
            <h5 className="content__text">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="content__inner">
                <div className="content__price">
                    <span>Цена:</span>
                    <p>12 999 руб.</p>
                </div>
                <button className="content__btn">
                    <img className="content__btn-img" src="/img/btn-plus.svg" alt="Add to basket" />
                </button>
            </div>
        </div>
    );
}

export default Card;