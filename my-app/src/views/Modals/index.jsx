import { useEffect, useState } from "react";
import React from "react";

const Modal = () => {
  const urlApi = "https://randomuser.me/api/?results=5";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.log("Hubo un error " + error));
  }, []);



  /*const openModal = () => {
    setOpen(true);
    handleOpen(isOpen);
}

const closeModal = () => {
    setOpen(false);
}
*/

      return (
        {})
        
};

export default Modal;
