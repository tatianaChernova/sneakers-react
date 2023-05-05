

function App() {
  return (
    <div className="wrapper">

      <header className="header">
        <div className="header__left">
          <img className="header__logo" src="/img/logo.png" alt="logo" />
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
          <li className="header__item">
            <img className="header__icon" src="/img/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li className="header__item">
            <img className="header__icon" src="/img/favorite.svg" alt="" />
          </li>
          <li className="header__item">
            <img className="header__icon" src="/img/user.svg" alt="" />
          </li>
        </ul>

      </header>

      <div className="content">
        <h1 className="content__title">Все кроссовки</h1>

        <div className="content__cards">

          <div className="content__card">
            <img className="content__img" src="/img/sneakers/img-1.jpg" alt="product" />
            <h5 className="content__text">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="content__inner">
              <div className="content__price">
                <span>Цена:</span>
                <p>12 999 руб.</p>
              </div>
              <button className="content__btn">
                <img className="content__btn-img" src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="content__card">
            <img className="content__img" src="/img/sneakers/img-2.jpg" alt="product" />
            <h5 className="content__text">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="content__inner">
              <div className="content__price">
                <span>Цена:</span>
                <p>12 999 руб.</p>
              </div>
              <button className="content__btn">
                <img className="content__btn-img" src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="content__card">
            <img className="content__img" src="/img/sneakers/img-3.jpg" alt="product" />
            <h5 className="content__text">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="content__inner">
              <div className="content__price">
                <span>Цена:</span>
                <p>12 999 руб.</p>
              </div>
              <button className="content__btn">
                <img className="content__btn-img" src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="content__card">
            <img className="content__img" src="/img/sneakers/img-4.jpg" alt="product" />
            <h5 className="content__text">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="content__inner">
              <div className="content__price">
                <span>Цена:</span>
                <p>12 999 руб.</p>
              </div>
              <button className="content__btn">
                <img className="content__btn-img" src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
