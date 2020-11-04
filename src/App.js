import React from 'react';
import Translate from './components/Translate/Translate';
import "./App.css"


export default () => {

  return (
    <div className='app'>
      <div className="container">
        <h2>Cheap version of Google translate</h2>
        <Translate className='translate' />
      </div>
    </div>
  );
};
