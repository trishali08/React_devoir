import React from 'react';
import ColorChanger from '../HOC/ColorChanger';


const Home = () => {
  return(
    <div className='center'>
     <h4> Home </h4>
     <p>Hey There</p>
    </div>
  );
}

export default ColorChanger(Home);
