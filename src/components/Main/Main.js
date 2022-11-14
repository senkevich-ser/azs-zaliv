import React from 'react';
import Header from '../Header/Header';
import NavTab from './NavTab/NavTab';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Footer from '../Footer/Footer';
import './Main.css';

const Main = () => (
  <div className="main">
    <Promo>{<Header>{<NavTab />}</Header>}</Promo>
    <AboutProject />
    <Techs />
    <Footer />
  </div>
);

export default Main;
