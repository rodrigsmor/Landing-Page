import React from 'react';
import * as S from './styled';

export default function Header() {
  return (
    <S.header>
      <div className="headerContainer">
        <S.headerFixed>
          <div className="logo_Icon"> 
            <i class="bx bxs-shopping-bags"></i>
            <h1>Market<span>Lify</span></h1>
          </div>
          <button className="toggleButton"> 
            <span></span>
            <span></span>
            <span></span>
          </button>
        </S.headerFixed>
        
        <S.nav>
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Quem somos?</li></a>
            <a href="#"><li>Testimonials</li></a>
            <a href="#"><li>Contato</li></a>
          </ul>
          <S.searchBar>
            <S.input type="search" placeholder="Pesquise..."/>
            <S.button type="search"><i class="bi bi-search"></i></S.button>
          </S.searchBar>
        </S.nav>
      </div>
    </S.header>
  );
}