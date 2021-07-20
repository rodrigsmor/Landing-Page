import React from 'react';
import * as S from './styled';

export default function Countdown() {
    return (
        <S.section>
            <S.countdownWrapper>
                <div className="titleSection">
                    <h1>Contagem regressiva para o <strong>Black Friday</strong></h1>
                    <h5>Falta apenas:</h5>
                </div>

                <div className="countdown">
                    <S.box>
                        <h3>80</h3>
                        <p>Dias</p>
                    </S.box>
                    <span>:</span>

                    <S.box>
                        <h3>80</h3>
                        <p>Horas</p>
                    </S.box>
                    <span>:</span>

                    <S.box>
                        <h3>80</h3>
                        <p>Minutos</p>
                    </S.box>
                    <span>:</span>

                    <S.box>
                        <h3>80</h3>
                        <p>Segundos</p>
                    </S.box>
                </div>
            </S.countdownWrapper>
        </S.section>
    );
}