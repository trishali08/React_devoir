import React, { Component } from 'react';

const Display= (props)=>{
  const { displayInfos } = props
  console.log(props);
  const displayList = displayInfos.map(info=> {
    return(

      <div className="container">
        <div className="row">
         <div className="col s12">
           <div className="card grey darken-2">
            <div className="card-content white-text">
              <div key={info.id} >
                <p>Name: {info.name}</p>
                <p>Age: {info.age}</p>
                <p>Contact: {info.contact}</p>
                <p>Address: {info.address}</p>
              </div>
            </div>
           </div>
         </div>
        </div>
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
