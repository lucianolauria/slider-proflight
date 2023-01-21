import React, { useState } from 'react';
import image from './img/logo.png'
import botonatras from './img/botonatras.png'
import botonsiguiente from './img/botonsiguiente.png'
import './Slider.css'

const Logos = () => {
  const logos = [
    {id:1, url: image},
    {id:2, url: image},
    {id:3, url: image},
    {id:4, url: image},
  ];

  const [selected, setSelected] = useState(logos[0]);

  const handleNext = () => {
    if (selected.id === logos[logos.length-1].id) {
      setSelected(logos[0]);
    } else {
      setSelected(logos[logos.findIndex(elem => elem.id === selected.id)+1]);
    }
  };

  const handlePrev = () => {
    if (selected.id === logos[0].id) {
      setSelected(logos[logos.length-1]);
    } else {
      setSelected(logos[logos.findIndex(elem => elem.id === selected.id)-1]);
    }
  };

  return (
    <div className="container">
        <img src={botonatras} onClick={handlePrev} alt="" className='botones'/>
        <div className='logos-container'>
      {logos.map(logo => (
        <img
          src={logo.url}
          alt="Logo"
          key={logo.id}
          className={logo.id === selected.id ? 'selected' : ''}
          onClick={() => setSelected(logo)}
        />
      ))}
      </div>
      <img src={botonsiguiente} onClick={handleNext} alt="" className='botones' />
    </div>
  );
};

export default Logos;