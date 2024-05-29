import React, { useState } from 'react';
import Modal from "../../views/Modals";

const Cards = ({img, name, email, index}) => {

  const [isOpen, setOpen] = useState(false);

  return (
    <div style={{ padding: "3vw", border: "2px solid black", margin: "0.5vw", textAlign: "center" }}>
      <div className="container">
        <h2><b>{name}</b></h2>
        <img src={img} alt="img" />
        <p>{email}</p>
        <button className="primary" onClick={ () => setOpen(!isOpen)}>Ver más</button>
        {
          isOpen && 
          (<div className="modal-content">
          <span></span>
          <h2>{"a"}</h2>
          <img src={""} alt="User" />
          <p>Email: {/*users.email*/}</p>
          <p></p>
        </div>)  
          
        }
      </div>
    </div>
  );
}


export default Cards;