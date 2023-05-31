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
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);   

    return (
        <header className="header">
            <div className="header__left">
                <Link to="/sneakers-react" onClick={closeMobileMenu}>
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
            <div className="header__menu-icon" onClick={handleClick}>

                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'header__list active' : 'header__list'}>
                <li onClick={props.onClickCart} className="header__item">
                    <Link className="header__link" onClick={closeMobileMenu}>
                        <img className="header__icon" src={cart} alt="Cart" />
                        <span>{totalPrice} руб.</span>
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="/sneakers-react/favorites" className="header__link" onClick={closeMobileMenu}>
                        <img className="header__icon" src={favorite} alt="Favorite" />
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="/sneakers-react/orders" className="header__link" onClick={closeMobileMenu}>
                        <img className="header__icon" src={user} alt="User" />
                    </Link>
                </li>
            </ul>

        </header>
    );
}

export default Header;