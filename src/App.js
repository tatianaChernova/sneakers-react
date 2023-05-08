import Card from "./components/Card";
import Header from "./components/Header";
import Rightside from "./components/Rightside";

function App() {
  return (
    <div className="wrapper">

      <Rightside />
      <Header />

      <div className="content">
        <div className="content__top">
          <h1 className="content__title">Все кроссовки</h1>
          <div className="content__search">
            <img src="/img/search.svg" alt="Search" />
            <input className="content__input" type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="content__cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
