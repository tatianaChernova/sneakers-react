//info part for empty pages: favorites and orders
import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../img/arrow.svg';
import './styles.scss';

const EmptyPage = ({ image, title, description }) => {
    return (
        <div className="empty-page__cart">
            <img className="empty-page__img" src={image} alt="" />
            <h2 className="empty-page__title">{title}</h2>
            <p className="empty-page__text">{description}</p>
            <Link to="/sneakers-react">
                <button className="green-btn empty-page__btn" type="submit">
                    Вернуться назад
                    <img className="empty-page__back-arrow" src={arrow} alt="Go back" />
                </button>
            </Link>
        </div>
    )
}

export default EmptyPage;