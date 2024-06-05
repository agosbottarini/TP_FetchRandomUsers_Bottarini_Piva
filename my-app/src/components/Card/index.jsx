import React, { useState } from 'react';
import Modal from "../../views/Modals";


const Cards = ({user}) => {

  const [isOpen, setOpen] = useState(false);

  return (
    <div style={{ padding: "2vw", border: "2px solid black", margin: "0.4vw", textAlign: "center", width: "351.47px", height: "365px"}}>
      <div className="container">
        <h2><b>{user.name.title + " " + user.name.first + " " + user.name.last}</b></h2>
        <img src={user.picture.large} alt="img" />
        <p>{user.email}</p>
        <button className="primary" onClick={ () => setOpen(!isOpen)}>Ver más</button>
        {
          isOpen && 
          (<div className="modal-content">
          
            <p>{"Location: " + user.location.city + ", " + user.location.state + ", " + user.location.country}</p>
            <p>{"Username: " + user.login.username}</p>
            <p>{"Phone: " + user.phone}</p>
            {/* <p>{"Cell: " + users.cell}</p>  */}
        </div>)  
          
        }
      </div>
    </div>
  );
}


export default Cards;