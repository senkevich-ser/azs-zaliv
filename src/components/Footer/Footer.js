import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">

    <p className="footer__text footer__info">
      Сайт принадлежит ООО "ТК Ресурс"
    </p>

    <div className="footer__row">
      <p className="footer__copyright footer__info">&#169; {new Date().getFullYear()}</p>
      <nav>
        <ul className="footer__row-links">

          <li className="footer__row-link">
            <a className="footer__link footer__info"
              href="https://vk.com"
              target="_blank" rel="noreferrer noopener"
            >
              ВКонтакте
            </a>
          </li>

          <li className="footer__row-link">
            <a className="footer__link footer__info"
              href="https://instagram.com"
              target="_blank" rel="noreferrer noopener"
            >
              Instagram
            </a>
          </li>

          <li className="footer__row-link">
            <a className="footer__link footer__info"
              href="https://www.facebook.com"
              target="_blank" rel="noreferrer noopener"
            >
              Facebook
            </a>
          </li>

        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
