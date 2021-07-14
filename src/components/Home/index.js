import React from 'react';
import * as S from './styled';

export default function Home() {
    return (
        <S.Home id="HOME">
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

                        <button className="CTA">
                            Receber novidades no e-mail
                        </button>
                    </div>
               </S.content>

               <S.boxImage>
                   <S.image src="/img/shopping1.svg"/>
               </S.boxImage>
            </S.homeContainer>
        </S.Home>
    );
}