import React from 'react';
import ColorChanger from '../HOC/ColorChanger';

const About = (props) => {
  /*console.log('Inside About Page ', props);
  setTimeout(() => {
    props.history.push('/contact');
  },2000)*/
  return(
    <div className='center'>
     <h4>About </h4>
     <p>This is my about page.</p>
    </div>
  );
}

export default ColorChanger(About);
