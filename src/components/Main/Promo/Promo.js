import React from 'react';
import './Promo.css';

function Promo(props) {
  return (
    <section className="promo">
      {props.children}
      <div className="promo__module promo__tank">
        <h1 className="promo__module promo__title">
          Создаем<br></br> устойчивое <br></br>энергетическое <br></br>будущее.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
