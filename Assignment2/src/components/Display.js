import React, { Component } from 'react';

const Display= (props)=>{
  const { displayInfos } = props
  console.log(props);
  const displayList = displayInfos.map(info=> {
    return(
      <div key={info.id} >
        <p>name: {info.name}</p>
        <p>age: {info.age}</p>
        <p>contact: {info.contact}</p>
        <p>address: {info.address}</p>
      </div>
    )
  })

  return(
    <div>
      {displayList}
    </div>
  );
}

  export default Display;
