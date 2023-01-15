import React from 'react'
import ReactDOM from 'react-dom';
import Card from './Card';
import "./index.css"
import Sdata from './sdata';

function ncard(value){
  return(
    <Card 
    imgsrc={value.imgsrc} 
    title={value.title}
    sname={value.sname}
    links={value.links}
  />
  );
}

ReactDOM.render(
  <>
    <h1 className='heading_style'>Top Netflix Web Series</h1>
    {Sdata.map(ncard)}
  </>
  ,
  document.getElementById('root')
);
