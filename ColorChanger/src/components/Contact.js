import React from 'react';
import ColorChanger from '../HOC/ColorChanger';

const Contact = () => {
  return(
    <div className='center'>
     <h4> Contact </h4>
     <p>This is my contact page.</p>
    </div>
  );
}

export default ColorChanger(Contact);
