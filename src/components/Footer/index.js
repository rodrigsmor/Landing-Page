import React, { useState } from 'react';
import * as S from './styled';

export default function Footer() {

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
        <S.Footer id="contato">
            <S.container>
                <S.boxItems>
                    <div className="items">
                        <p>Suporte</p>
                        <li>FAQ</li>
                        <li>Halp Desk</li>
                        <li>Deixar feedback</li>
                        <li>Perguntas comuns</li>
                        <li>Relatar Problema</li>
                        <li>Informações de erro</li>
                    </div>

                    <div className="items">
                        <p>Sobre</p>
                        <li>Produtos</li>
                        <li>Carreira</li>
                        <li>Empresa</li>
                        <li>Parcerias</li>
                        <li>Produtos</li>
                        <li>Visão global</li>
                    </div>
                </S.boxItems>

                <S.inputWrapper>
                    <label htmlFor="cadastrar-email">Receber novidades no E-mail</label>
                    <div>
                        <input type="email" autoComplete="none" name="cadatrar-email" placeholder="informe seu e-mail" value={email} onChange={e => {setEmail(e.target.value) }}/>
                        <input type="submit" value="cadastrar" onClick={(e) => {
                            e.preventDefault();
                            itsValid();
                        }}/>
                    </div>
                </S.inputWrapper>

                <S.contacts>
                    <div className="logo_Icon"> 
                        <i className="bx bxs-shopping-bags"></i>
                        <h1>Market<span>Lify</span></h1>
                    </div>

                    <div className="items">
                        <i className='bx bxs-phone'></i>
                        <p>+55 (00) 00000-0000</p>
                    </div>

                    <div className="items">
                        <i className='bx bx-at'></i>
                        <p>marketlify.prof@market.lify.com</p>
                    </div>
                </S.contacts>
            </S.container>

            <div className="footer">
                <p>Desenvolvido por <span>Rodrigo</span></p>
                <a href="https://www.linkedin.com/in/rodrigo-m0reira-da-silva/"><i className='bx bxl-github'></i></a>
                <a href="https://github.com/rodrigsmor"><i className='bx bxl-linkedin-square'></i></a>
            </div>
        </S.Footer>
    );
}