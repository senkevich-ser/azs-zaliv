import React from 'react';

import './Portfolio.css';

const Portfolio = () => (
  <section className="portfolio portfolio__container">
    <h4 className="portfolio__container portfolio__title">Раздел клиента</h4>

    <ul className="portfolio__container projects__table">
      <li className="portfolio__container projects__element">
        <p className="portfolio__container projects__info">
          Акции
        </p>
        <a
          className="projects__link"
          href="https://github.com/senkevich-ser/how-to-learn"
          target="_blank" rel="noreferrer noopener"
        >
          ↗
        </a>
      </li>

      <li className="portfolio__container projects__element">
        <p className="portfolio__container projects__info">
          Преимущества
        </p>
        <a
          className="projects__link"
          href="https://github.com/senkevich-ser/russian-travel"
          target="_blank" rel="noreferrer noopener"
        >
          ↗
        </a>
      </li>

      <li className="portfolio__container projects__element">
        <p className="portfolio__container projects__info">
          Вопрос ответ
        </p>
        <a
          className="projects__link"
          href="https://github.com/senkevich-ser/mesto"
          target="_blank" rel="noreferrer noopener"
        >
          ↗
        </a>
      </li>
    </ul>
  </section>
);

export default Portfolio;
