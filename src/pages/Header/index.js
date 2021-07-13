import React from 'react';
import * as S from './styled';

export default function Header() {
    return (
      <S.header>
        <div className="headerContainer">
          <div className="logo">
            <i class="bx bxs-shopping-bags"></i>
            <h1>Market<span>Lify</span></h1>
          </div>

          <S.nav>
            <ul>
              <a href=""><li>Home</li></a>
              <a href=""><li>Quem somos?</li></a>
              <a href=""><li>Testimonials</li></a>
              <a href=""><li>Contato</li></a>
            </ul>
          </S.nav>
        </div>
      </S.header>
  );
}