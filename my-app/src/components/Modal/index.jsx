import Cards from "../../components/Card"
import { useEffect, useState } from "react"


const Modal = () => {
    const urlApi = "https://randomuser.me/api/?results=8"
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(urlApi)
        .then(response => response.json())
        .then(data => setUsers(data.results))
        .catch(error => console.log('Hubo un error ' + error))
    }, [])

    return(
    <ul>{users.map((user, index) =>
        <div> 
        </div>
    )}
    </ul>
    )
}

export default Modal