import React from 'react';
import * as S from './styled';

export default function Testimonials() {
    return (
        <S.Testimonials id="testimonials">
            <S.container>
                <S.sectionTitle>
                    <h1>Depoimentos</h1>
                    <span></span>
                </S.sectionTitle>

                <S.testimonialsWrapper>
                    <S.cards>
                        <i class='bx bxs-quote-left'></i>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare magna at sagittis eleifend. Morbi et congue orci. Suspendisse magna mi, tempor vitae congue vel, finibus at velit. 
                        </p>

                        
                        <div className="profile">
                            <div class="custom-shape-divider-top-1626463643">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                                </svg>
                            </div>

                            <div className="circleImage">
                                <img src="./img/pictures/testimonial1.png" alt="foto de perfil do usuário"/>
                            </div>

                            <h3>Nicolas Quina</h3>
                            <h5>Curitiba, Brasil</h5>

                            <div className="avaliacaoUsuario">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star-half'></i>
                                <i class='bx bx-star' ></i>
                            </div>
                        </div>
                    </S.cards>
                    <S.cards>
                        <i class='bx bxs-quote-left'></i>

                        <p>
                            et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing.
                        </p>

                        
                        <div className="profile">
                            <div class="custom-shape-divider-top-1626463643">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                                </svg>
                            </div>

                            <div className="circleImage">
                                <img src="./img/pictures/testimonial2.png" alt="foto de perfil do usuário"/>
                            </div>

                            <h3>Rafael Loretti</h3>
                            <h5>Curitiba, Brasil</h5>

                            <div className="avaliacaoUsuario">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star-half'></i>
                                <i class='bx bx-star' ></i>
                            </div>
                        </div>
                    </S.cards>

                    <S.cards>
                        <i class='bx bxs-quote-left'></i>

                        <p>
                            feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae.
                        </p>

                        
                        <div className="profile">
                            <div class="custom-shape-divider-top-1626463643">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                                </svg>
                            </div>

                            <div className="circleImage">
                                <img src="./img/pictures/testimonial3.png" alt="foto de perfil do usuário"/>
                            </div>

                            <h3>Giovana Brito</h3>
                            <h5>Brasília, Brasil</h5>

                            <div className="avaliacaoUsuario">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star-half'></i>
                                <i class='bx bx-star' ></i>
                            </div>
                        </div>
                    </S.cards>
                </S.testimonialsWrapper>
            </S.container>
        </S.Testimonials>
    );
}