import React from 'react';
import axios from 'axios';
import Card from "../components/Card/Card";

function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:3001/orders');
                //setOrders(data.map((obj) => obj.items).flat());
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch {
                alert('Ошибка при запросе заказов');
                console.error("error");
            }


        })();
    }, []);

    return (
        <>
            <div className="content">
                <div className="content__top">
                    <h1 className="content__title">Мои заказы</h1>
                </div>
                <div className="content__cards">
                    {(isLoading ? [...Array(8).fill(<Card loading={isLoading} />)] : orders).map((item, index = 0) => {
                        return (
                            //item.image && require(`./../../src/img/sneakers/${item.image}.jpg`)
                            <Card
                                key={index}
                                index={index}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                loading={isLoading}
                            />);
                    })}
                </div>
            </div>
        </>
    );
}

export default Orders;