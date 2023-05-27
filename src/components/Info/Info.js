import React from 'react';
import AppContext from '../../context';
import arrow from '../../img/arrow.svg';
import './styles.scss';


const Info = ({ image, title, description }) => {
    const { setCartOpened } = React.useContext(AppContext);
    return (
        <div className="rightside__empty-cart">
            <img className="rightside__empty-img" src={image} alt="" />
            <h2 className="rightside__empty-title">{title}</h2>
            <p className="rightside__empty-text">{description}</p>
            <button onClick={() => setCartOpened(false)} className="green-btn rightside__empty-btn" type="submit">
                Вернуться назад
                <img className="rightside__back-arrow" src={arrow} alt="Go back" />
            </button>
        </div>
    )
}

export default Info;