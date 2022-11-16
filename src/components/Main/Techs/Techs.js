import React from 'react';
import { Link } from 'react-router-dom';

import '../AboutProject/AboutProject.css';
import './Techs.css';

function Techs() {
  return (
    <section className="techs">

      <h3 className='aboutProject__title'>Информация для клиента</h3>

      <div className="techs__tank">

        <h3 className='techs__title'>Розничная сеть АЗС Залив</h3>

        <p className="techs__subtitle">
        Топливная компания "Залив" – один из крупнейших операторов на рынке нефтепродуктов Саратовской области.
        </p>

        <nav className="techs__table">
          <Link to='/action' className="techs__item">Акции</Link>
          <Link to='/advantage' className="techs__item">Преимущества</Link>
          <Link to='/response' className="techs__item">Вопрос ответ</Link>
          <Link to='/guarantees' className="techs__item">Гарантии качества</Link>
          <Link to='/discount' className="techs__item">Дисконтная карта</Link>
        </nav>

      </div>

    </section>
  );
}

export default Techs;
