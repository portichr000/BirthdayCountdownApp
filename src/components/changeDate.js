import React, { Component } from 'react';

const changeDate = (title, callback) => {
  return (
      <button key={1} className="change-date" onClick= {callback}>
        <i className="fas fa-calendar-alt"> </i>
        {title}
      </button>
    )
}  
    
    
export default changeDate;