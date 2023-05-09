import React from 'react';
import './styles.scss';

function Header(props) {
    return (
        <header className="header">
            <div className="header__left">
                <img className="header__logo" src="./../../src/img/logo.png" alt="Logo" />
                <div className="header__info">
                    <h3 className="header__title">
                        React Sneakers
                    </h3>
                    <p className="header__text">
                        Магазин лучших кроссовок
                    </p>
                </div>
            </div>

            <ul className="header__list">
                <li onClick={props.onClickCart} className="header__item">
                    <img className="header__icon" src="/img/cart.svg" alt="Cart" />
                    <span>1205 руб.</span>
                </li>
                <li className="header__item">
                    <img className="header__icon" src="/img/favorite.svg" alt="Favorite" />
                </li>
                <li className="header__item">
                    <img className="header__icon" src="/img/user.svg" alt="User" />
                </li>
            </ul>

        </header>
    );
}

export default Header;