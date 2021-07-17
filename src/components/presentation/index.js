import React from 'react';
import * as S from './styled';

export default function Home() {

    return (
        <S.presentation id="quem-somos">
            <S.container> 
                <S.sectionTitle>
                    <h2>Quem somos?</h2>
                    <span></span>

                    <p>A <strong>marketlify</strong> é uma loja digital de produtos diversos que oferta os melhores preços do mercado. Se liga em alguns dos nososs valores e benefícios:</p>
                </S.sectionTitle>

                <S.boxCards>
                    <S.cards>
                        <div className="imagem">
                            <img src="./img/client-rage.svg" alt="imagem ilustrativa que representa um cliente avaliando o site"/>
                            <h3>Prioridade ao Cliente</h3>
                        </div>

                        <p>Possuímos uma cultura de atender aos interesses do cliente e proporcionamos o máximo de satisfação, priorizando a melhor experiência de navegação e o cumprimento de todas as legislações e direitos dos consumidores.</p>
                    </S.cards>

                    <S.cards>
                        <div className="imagem">
                            <img src="./img/delivery.svg" alt="imagem ilustrativa que representa uma entrega. Há uma caixa de entrega com riscos que indicam movimento."/>
                            <h3>Entrega rápida e segura</h3>
                        </div>

                        <p>Oferecemos um serviço de entrega particular que nos permite fazer entregas em um período muito mais curto que a maioria dos e-commerces do mercado, além de o atendimento ao usuário sempre está em constante melhoria.</p>
                    </S.cards>
                    
                    <S.cards>
                        <div className="imagem">
                            <img src="./img/user-interface.svg" alt="imagem ilustrativa que representa uma interface de usuário. Há um layout de usuário na imagem."/>
                            <h3>Fácil e rápido de usar</h3>
                        </div>

                        <p>A aplicação é rápida e leve, possui uma interface de usuário limpa e intuitiva, e os nossos desenvolvedores sempre visam proporcionar que o cliente tenha a melhor das experiências possíveis.</p>
                    </S.cards>
                </S.boxCards>
            </S.container>
        </S.presentation>
    );
}