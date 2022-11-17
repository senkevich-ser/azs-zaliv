/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Header from '../Header/Header';
import NavTab from '../Main/NavTab/NavTab';
import action from '../../images/frankl.pdf';
import { Link } from 'react-router-dom'
import './ActionInfo.css';

function ActionInfo() {
  return (
    <>
      <Header>{<NavTab />}</Header>
      <section className="actionInfo">
        <h3 className='actionInfo__title'>Программа лояльности "Залив-бонус"</h3>
        {/* <iframe title="" src={action} className="actionInfo__button"></iframe> */}
        <Link to="/"><button className="actionInfo__button">Главная</button></Link>
      </section >
    </>
  );
}

export default ActionInfo;
