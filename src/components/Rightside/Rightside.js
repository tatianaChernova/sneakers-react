import React from 'react';
import axios from 'axios';

import Info from '../Info/Info';
import { useCart } from '../../hooks/useCart';

import btnClose from '../../img/btn-close.svg';
import btnRemove from '../../img/btn-remove.svg';
import arrow from '../../img/arrow.svg';
import emptyBox from '../../img/empty-box.png';
import completeOrder from '../../img/complete-order.jpg';

import './styles.scss';

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

function Rightside({ onClose, onRemove, items = [], opened }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(`http://localhost:3001/orders`, {
                items: cartItems,
            });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`http://localhost:3001/cart/${item.id}`);
                await delay();
            }
        }
        catch (error) {
            alert('Ошибка при создании заказа :(');
        }
        setIsLoading(false);
    };

    return (
        <div className={`rightside ${opened ? "rightside__visible" : ''}`}>
            <div className="rightside__inner">
                <div className="rightside__title-wrapper">
                    <h2 className="rightside__title">Корзина</h2>
                    <img onClick={onClose} className="rightside__close-btn" src={btnClose} alt="Close cart" />
                </div>
                {
                    items.length > 0 ? (
                        <div className="rightside__cart-wrapper">
                            <div className="rightside__cart-items">
                                {items.map((obj) => (
                                    <div key={obj.id} className="rightside__cart-item">
                                        <img className="rightside__cart-img" src={obj.image} alt="Sneakers" />
                                        <div className="rightside__cart-inner">
                                            <p>{obj.name}</p>
                                            <span>{obj.price} руб.</span>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="rightside__remove-btn" src={btnRemove} alt="Remove from cart" />
                                    </div>
                                ))
                                }
                            </div>

                            <ul className="rightside__list">
                                <li className="rightside__list-item">
                                    <span>Итого:</span>
                                    <div className="rightside__list-line"></div>
                                    <span>{totalPrice} руб.</span>
                                </li>
                                <li className="rightside__list-item">
                                    <span>Налог 5%:</span>
                                    <div className="rightside__list-line"></div>
                                    <span>{(totalPrice / 100 * 5).toFixed(2)} руб.</span>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="green-btn rightside__btn">
                                Оформить заказ
                                <img className="rightside__btn-arrow" src={arrow} alt="Arrow" />
                            </button>
                        </div>
                    ) : (
                        <Info
                            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                            description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : `Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.`}
                            image={isOrderComplete ? `${completeOrder}` : `${emptyBox}`}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Rightside;