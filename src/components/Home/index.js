import React, { useState } from 'react';
import * as S from './styled';
import { link } from 'react-scroll';

export default function Home() {

    const [click, setClick] = useState(false);

    return (
        <S.Home id="home">
            <S.homeContainer>
               <S.content>
                    <S.headline>
                        <h2>BLACK</h2> 
                        <h2>FRIDAY</h2>
                        <h3>ERA PROMOÇÃO QUE VOCÊS QUERIAM?</h3>
                    </S.headline>

                    <div className="textBox">
                        <h4>Mais de 2.000 clientes consultaram as promoções e saíram satisfeitos!</h4>
                        <p> 
                            A <strong>MarketLify</strong> está com promoções bombásticas nesse Black Friday, hein? Estamos ofertando os produtos com descontos de até <strong>50%</strong>, vê se não é uma oportunidade imperdível?! mas não se acanha não, hein? Porque é por tempo limitado! Vai perder essa oportunidade, não, né? 
                        </p>

                        <button className={click === false ? 'CTA' : 'notAppear'} onClick={() => setClick(true)}>
                            Receber novidades no e-mail
                        </button>

                        <div class={click === false ? 'notAppear' : 'appear'}>
                            <label for="cadastrar-email">Receber novidades no E-mail</label>
                            <div>
                                <input type="email" autocomplete="none" name="cadatrar-email" placeholder="informe seu e-mail"/>
                                <input type="submit" value="cadastrar"/>
                            </div>
                        </div>

                        <S.socialMedias>
                            <a href=""><i class='bx bxl-facebook-circle'></i></a>
                            <a href=""><i class='bx bxl-twitter' ></i></a>
                            <a href=""><i class='bx bxl-linkedin' ></i></a>
                            <a href=""><i class='bx bxl-instagram' ></i></a>
                        </S.socialMedias>
                    </div>
               </S.content>

               <S.boxImage>
                   <S.image src="/img/discount.svg"/>
               </S.boxImage>
            </S.homeContainer>
        </S.Home>
    );
}