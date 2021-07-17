import React, { useState } from 'react';
import * as S from './styled';
import { link } from 'react-scroll';

export default function Home() {

    const [click, setClick] = useState(false);
    const [email, setEmail] = useState();

    function itsValid() {
        const senhaRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let response = senhaRegex.test(String(email).toLowerCase());

        if(response === false) {
            alert('E-mail inválido! Digite novamente...');
        }
        else {
            alert('E-mail Válido! Operação feita com sucesso! Obrigado pelo cadastro!');
            localStorage.setItem('email', email);
        }
    }

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

                        <form className={click === false ? 'notAppear' : 'appear'}>
                            <label htmlFor="cadastrar-email">Receber novidades no E-mail</label>
                            <div>
                                <input type="email" autoComplete="none" name="cadatrar-email" placeholder="informe seu e-mail" value={email} onChange={e => {setEmail(e.target.value)}}/>
                                <input type="submit" value="cadastrar" onClick={(e) => {
                                    e.preventDefault();
                                    itsValid();
                                }}/>
                            </div>
                        </form>

                        <S.socialMedias>
                            <a href=""><i className='bx bxl-facebook-circle'></i></a>
                            <a href=""><i className='bx bxl-twitter' ></i></a>
                            <a href=""><i className='bx bxl-linkedin' ></i></a>
                            <a href=""><i className='bx bxl-instagram' ></i></a>
                        </S.socialMedias>
                    </div>
               </S.content>

               <S.boxImage>
                   <S.image src="/img/discount.svg" alt="imagem ilustrativa de desconto"/>
               </S.boxImage>
            </S.homeContainer>
        </S.Home>
    );
}