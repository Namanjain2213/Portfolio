import React, { useEffect } from 'react';
import anime from 'animejs';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  useEffect(() => {
    function randomValues() {
      anime({
        targets: '.square, .circle, .triangle',
        translateX: function() {
          return anime.random(-500, 500);
        },
        translateY: function() {
          return anime.random(-300, 300);
        },
        rotate: function() {
          return anime.random(0, 360);
        },
        scale: function() {
          return anime.random(.2, 2);
        },
        duration: 1000,
        easing: 'easeInOutQuad',
        complete: randomValues,
      });
    }

    randomValues();
  }, []);

  return (
    <>
      <Navbar />
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>

      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>

      <Home />
    </>
  );
}

export default App;
