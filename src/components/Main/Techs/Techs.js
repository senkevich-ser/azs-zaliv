import React from 'react';

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

        <ul className="techs__table">
          <li className="techs__item">Акции</li>
          <li className="techs__item">Преимущества</li>
          <li className="techs__item">Вопрос ответ</li>
          <li className="techs__item">Гарантии качества</li>
          <li className="techs__item">Дисконтная карта</li>
        </ul>

      </div>

    </section>
  );
}

export default Techs;
