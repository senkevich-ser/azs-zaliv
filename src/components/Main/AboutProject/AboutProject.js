import React from 'react';
/* import SectionHeader from '../SectionHeader/SectionHeader'; */

import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutProject">

      <h3 className='aboutProject__title'>О компании</h3>

      <ul className="table">
        <li className="table__column">
          <h4 className="table__title">
          Компания Залив – это сеть современных заправочных комплексов, расположенных в Саратове и Энгельсе
          </h4>
          <p className="table__text">
          Клиентоориентированный и высококвалифицированный персонал
          </p>
        </li>
        <li className="table__column">
          <h4 className="table__title">
          Высокий уровень сервиса, качества топлива и сопутствующих услуг
          </h4>
          <p className="table__text">
          Топливные талоны и карты для частных и корпоративных клиентов
          </p>
        </li>
      </ul>

      <div className="plan">
        <p className="plan__text plan__chart plan__chart_black">
        Высокий уровень сервиса
        </p>
        <p className="plan__text plan__chart plan__chart_gray">
        Клиентоориентированный персонал
        </p>
        <p className="plan__text plan__item">
        Высокое качество топлива
        </p>
        <p className="plan__text plan__item">
          Магазины с качественной продукцией
        </p>
      </div>

    </section >
  );
}

export default AboutProject;
