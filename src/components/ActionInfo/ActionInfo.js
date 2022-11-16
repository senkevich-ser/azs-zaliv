import React from 'react';
import Header from '../Header/Header';
import NavTab from '../Main/NavTab/NavTab';
import action from '../../images/frankl.pdf';
import './ActionInfo.css';

function ActionInfo() {
  return (
    <>
    <Header>{<NavTab />}</Header>
    <section className="actionInfo">
      <h3 className='actionInfo__title'>Программа лояльности "Залив-бонус"</h3>
      <iframe src={action}  className="actionInfo__text"></iframe>

    </section >
    </>
  );
}

export default ActionInfo;
