import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import logo from "../../img/logo.png";
import cart from "../../img/cart.svg";
import favorite from "../../img/favorite.svg";
import user from "../../img/user.svg";
import './styles.scss';

function Header(props) {

    const { totalPrice } = useCart();

    return (
        <header className="header">
            <div className="header__left">
                <Link to="/sneakers-react">
                    <img className="header__logo" src={logo} alt="Logo" />
                </Link>
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
                    <img className="header__icon" src={cart} alt="Cart" />
                    <span>{totalPrice} руб.</span>
                </li>
                <li className="header__item">
                    <Link to="/sneakers-react/favorites">
                        <img className="header__icon" src={favorite} alt="Favorite" />
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="/sneakers-react/orders">
                        <img className="header__icon" src={user} alt="User" />
                    </Link>
                </li>
            </ul>

        </header>
    );
}

export default Header;