import React from 'react';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';

import heartLike from './../../img/heart-like.jpg';
import heartUnlike from './../../img/heart-unlike.jpg';
import btnAdd from './../../img/btn-add.svg';
import btnPlus from './../../img/btn-plus.svg';
import "./styles.scss";

function Card({ id, name, image, price, onClickFavorite, onClickAdd, favorited = false, loading = false }) {

    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = { id, parentId: id, name, image, price };

    // add to cart  
    const onClickPlus = () => {
        onClickAdd(obj);
    };
    // like/unlike  
    const onClickFav = () => {
        onClickFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="content__card">
            { //skeleton for downloading
                loading ? <ContentLoader
                    speed={2}
                    width={160}
                    height={200}
                    viewBox="0 0 160 200"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"            >
                    <rect x="0" y="107" rx="3" ry="3" width="155" height="15" />
                    <rect x="0" y="0" rx="10" ry="10" width="155" height="91" />
                    <rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
                    <rect x="1" y="164" rx="8" ry="8" width="80" height="24" />
                    <rect x="120" y="155" rx="8" ry="8" width="32" height="32" />
                </ContentLoader> :
                    <>
                        {onClickFavorite && <img
                            className="content__heart"
                            onClick={onClickFav}
                            src={isFavorite ? heartLike : heartUnlike}
                            alt="Unlike"
                        />}
                        <img className="content__img" src={image} alt="Sneakers" />
                        <h5 className="content__text">{name}</h5>
                        <div className="content__inner">
                            <div className="content__price">
                                <span>Цена:</span>
                                <p>{price} руб.</p>
                            </div>
                            {onClickAdd && <img
                                className="content__btn-img"
                                onClick={onClickPlus}
                                src={isItemAdded(id) ? btnAdd : btnPlus}
                                alt="Add to basket"
                            />}
                        </div>
                    </>
            }
        </div>

    );
}

export default Card;