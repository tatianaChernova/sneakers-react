import React from 'react';
import axios from 'axios';
import Card from "../components/Card/Card";
import EmptyPage from '../components/EmptyPage/EmptyPage';
import noOrders from '../img/no-orders.png';

function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://64636d914dca1a66135d9230.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch {
                alert('Ошибка при запросе заказов');
                console.error("error");
            }
        })();
    }, []);

    const renderOrders = () => {

        return (
            isLoading ? [...Array(8).fill(<Card loading={isLoading} />)] : orders)
            .map((item, index = 0) => {
                return (
                    <Card
                        key={index}
                        index={index}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        loading={isLoading}
                    />);
            })
    }

    return (
        <>
            <div className="content">
                <div className="content__top">
                    <h1 className="content__title">Мои заказы</h1>
                </div>
                <div className="content__cards">
                    {
                        (orders.length <= 0 ? (
                            <EmptyPage
                                title="У вас нет заказов"
                                description="Оформите хотя бы один заказ"
                                image={noOrders}
                            />)
                            :
                            (renderOrders())
                        )}
                </div>
            </div>
        </>
    );
}

export default Orders;