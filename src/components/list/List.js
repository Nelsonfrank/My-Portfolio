import React, { Component } from 'react';
import './List.css'


const List =({name, status}) =>{
    return(
    <div class="card">
        <div class="container">
          <h4><b>{name}</b></h4> 
          <p>{status } Level</p> 
        </div>
     </div>
    );
}

export default List;