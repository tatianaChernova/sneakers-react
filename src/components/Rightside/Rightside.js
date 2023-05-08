import React from 'react';
import './styles.scss';

function Rightside(props) {
    return (
        <div className="rightside">
            <div className="rightside__inner">
                <div className="rightside__title-wrapper">
                    <h2 className="rightside__title">Корзина</h2>
                    <img onClick={props.onClose} className="rightside__close-btn" src="img/btn-remove.svg" alt="Close cart" />
                </div>
                <div className="rightside__cart-items">
                    <div className="rightside__cart-item">
                        <img className="rightside__cart-img" src="img/sneakers/img-2.jpg" alt="Sneakers" />
                        <div className="rightside__cart-inner">
                            <p>
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <span>
                                12 999 руб.
                            </span>
                        </div>
                        <img className="rightside__remove-btn" src="img/btn-remove.svg" alt="Remove from cart" />
                    </div>
                    <div className="rightside__cart-item">
                        <img className="rightside__cart-img" src="img/sneakers/img-2.jpg" alt="Sneakers" />
                        <div className="rightside__cart-inner">
                            <p>
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <span>
                                12 999 руб.
                            </span>
                        </div>
                        <img className="rightside__remove-btn" src="img/btn-remove.svg" alt="Remove from cart" />
                    </div> <div className="rightside__cart-item">
                        <img className="rightside__cart-img" src="img/sneakers/img-2.jpg" alt="Sneakers" />
                        <div className="rightside__cart-inner">
                            <p>
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <span>
                                12 999 руб.
                            </span>
                        </div>
                        <img className="rightside__remove-btn" src="img/btn-remove.svg" alt="Remove from cart" />
                    </div>
                </div>

                <ul className="rightside__list">
                    <li className="rightside__list-item">
                        <span>Итого:</span>
                        <div className="rightside__list-line"></div>
                        <span>21 498 руб.</span>
                    </li>
                    <li className="rightside__list-item">
                        <span>Налог 5%:</span>
                        <div className="rightside__list-line"></div>
                        <span>1 074 руб.</span>
                    </li>
                </ul>
                <button className="green-btn rightside__btn">
                    Оформить заказ
                    <img className="rightside__btn-arrow" src="img/arrow.svg" alt="Arrow" />
                </button>
            </div>
        </div>
    );
}

export default Rightside;