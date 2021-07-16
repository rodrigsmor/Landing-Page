import React, { useState } from 'react';
import * as S from './styled';

export default function Header() {

  const [click, setClick] = useState(false);

  return (
    <S.header>
      <div className={click === false ? 'headerContainer' : 'headerContainer active'}>
        <S.headerFixed>
          <div className="logo_Icon"> 
            <i class="bx bxs-shopping-bags"></i>
            <h1>Market<span>Lify</span></h1>
          </div>
          
          <button className={click === false ? 'toggleButton' : 'toggleButton active'} onClick={() => {
            click === true ? setClick(false) : setClick(true); 
          }}> 
            <span></span>
            <span></span>
            <span></span>
          </button>
        </S.headerFixed>
        
        <S.nav>
          <ul>
            <a href="#home"><li>Home</li></a>
            <a href="#quem-somos"><li>Quem somos?</li></a>
            <a href="#testimonials"><li>Testimonials</li></a>
            <a href="#contato"><li>Contato</li></a>
          </ul>

          <S.searchBar>
            <S.input type="search" placeholder="Pesquise..."/>
            <S.button type="search">{<i class="bi bi-search"></i>}</S.button>
          </S.searchBar>
        </S.nav>
      </div>
    </S.header>
  );
}