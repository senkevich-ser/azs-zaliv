import React from 'react';
import './Promo.css';

function Promo(props) {
  return (
    <section className="promo promo__module">
      {props.children}
      <div className="promo__module promo__tank">
        <h1 className="promo__module promo__title">
          Создаем устойчивое энергетическое будущее.
        </h1>
        <div className="promo__module promo__image" />
      </div>
    </section>
  );
}

export default Promo;
