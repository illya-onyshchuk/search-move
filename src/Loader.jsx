import React from 'react';

import cl from './Loader.module.css'

const Loader = () => {
  return (
    <div className={cl.loader}>
      <div className={cl.wrapper}>
        <span className={`${cl.side} ${cl.side1}`}></span>
        <span className={`${cl.side} ${cl.side2}`}></span>
        <span className={`${cl.side} ${cl.side3}`}></span>
        <span className={`${cl.side} ${cl.side4}`}></span>
        <span className={cl.shadow}></span>
      </div>
    </div>
  );
}

export default Loader;
