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
          Функционируeт с помощью высококвалифицированного персонала
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

    </section >
  );
}

export default AboutProject;
