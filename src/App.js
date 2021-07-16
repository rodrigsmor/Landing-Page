import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Presentation from './components/presentation';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <> 
      <Header/>
      <Home/>
      <Presentation/>
      <Testimonials/>
      <Footer/>
    </>
  );
}