import React from 'react';

const ColorChanger = (WrappedComponent) => {
  const colors = ['red', 'yellow', 'blue', 'green', 'purple','crimson','orange','gray'];
  const randomColor = colors[Math.floor(Math.random() * 8)];
  const className = randomColor + '-text';


  return () => {
    return(
      <div className={className}>
        <WrappedComponent />
      </div>
    )
  }
}

export default ColorChanger;
