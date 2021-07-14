import React from 'react';
import * as S from './styled';

export default function Home() {
    return (
        <S.Home id="HOME">
            <S.homeContainer>
                <S.headline>
                    <h3>É promoção que você queria?</h3>
                    <p> Mais de 2.000 clientes consultaram os preços e saíram satisfeitos com suas compras! </p>
                </S.headline>

                <S.contentWrapper> 
                    <p>
                        A <strong><span>Market</span>Lify</strong> está com promoções bombástica nesse Black Friday, hein? Vai perder essa oportunidade, não, né? O gerente ficou loucooo, está ofertando os produtos com descontos de até 50%, vê se não é uma oportunidade imperdível?! mas não se acanha não, hein? Porque é por tempo limitado!

                        <br/>
                        <br/>

                        Fique por dentro das novidades! 
                    </p>

                    <button>Fique por dentro das novidades</button>
                </S.contentWrapper>

                <S.boxImage>
                    <S.image src="/img/shopping1.svg"/>
                </S.boxImage>

                <S.socialMedias>
                    <a href=""><i class='bx bxl-facebook-circle'></i></a>
                    <a href=""><i class='bx bxl-twitter' ></i></a>
                    <a href=""><i class='bx bxl-linkedin' ></i></a>
                    <a href=""><i class='bx bxl-instagram' ></i></a>
                </S.socialMedias>
            </S.homeContainer>
        </S.Home>
    );
}