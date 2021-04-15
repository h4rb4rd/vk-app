import React from 'react';
import './preloader.css';

import img from '../../assets/images/preloader.svg';

const Preloader = () => {
  return <img src={img} alt="preloader" className="preloader" />;
};
export default Preloader;
