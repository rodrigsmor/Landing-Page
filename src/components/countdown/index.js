import React, { useEffect, useRef, useState } from 'react';
import * as S from './styled';

export default function Countdown() {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval = useRef();
    const startTimer = () => {
        const countdownDate = new Date('November 26 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes)
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <S.section>
            <S.countdownWrapper>
                <div className="titleSection">
                    <h1>Contagem regressiva para o <strong>Black Friday</strong></h1>
                    <h5>Falta apenas:</h5>
                </div>

                <div className="countdown">
                    <S.box>
                        <h3>{timerDays}</h3>
                        <p>Dias</p>
                    </S.box>
                    <span>:</span>

                    <S.box>
                        <h3>{timerHours}</h3>
                        <p>Horas</p>
                    </S.box>
                    <span>:</span>

                    <S.box>
                        <h3>{timerMinutes}</h3>
                        <p>Minutos</p>
                    </S.box>
                    <span>:</span>

                    <S.box>
                        <h3>{timerSeconds}</h3>
                        <p>Segundos</p>
                    </S.box>
                </div>
            </S.countdownWrapper>
        </S.section>
    );
}