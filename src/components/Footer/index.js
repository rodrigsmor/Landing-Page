import React from 'react';
import * as S from './styled';

export default function Footer() {
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
                    <label for="cadastrar-email">Receber novidades no E-mail</label>
                    <div>
                        <input type="email" autocomplete="none" name="cadatrar-email" placeholder="informe seu e-mail"/>
                        <input type="submit" value="cadastrar"/>
                    </div>
                </S.inputWrapper>

                <S.contacts>
                    <div className="logo_Icon"> 
                        <i class="bx bxs-shopping-bags"></i>
                        <h1>Market<span>Lify</span></h1>
                    </div>

                    <i class='bx bxs-phone'></i>
                    <p>+55 (00) 00000-0000</p>

                    <i class='bx bx-at'></i>
                    <p>marketlify.prof@market.lify.com</p>
                </S.contacts>
            </S.container>

            <div className="footer">
                    <p>Desenvolvido por <span>Rodrigo</span></p>
                    <a href=""><i class='bx bxl-github'></i></a>
                    <a href=""><i class='bx bxl-linkedin-square'></i></a>
                </div>
        </S.Footer>
    );
}