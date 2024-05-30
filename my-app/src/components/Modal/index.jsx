import Cards from "../../components/Card"
import { useEffect, useState } from "react"


const Modal = () => {
    const urlApi = "https://randomuser.me/api/?results=5"
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(urlApi)
        .then(response => response.json())
        .then(data => setUsers(data.results))
        .catch(error => console.log('Hubo un error ' + error))
    }, [])

    return(
    <ul>{users.map((user, index) =>
        // REVISAR ESTA PARTE PORQUE ESTA MAL
        <div> 

            <h2>{users.name.title + " " + users.name.first + " " + users.name.last}</h2>
            <p>{"Location: " + users.location.city + ", " + users.location.state + ", " + users.location.country}}</p>
            <p>{"Username: " + user.login.username}</p>

            <p>{"Phone: " + users.phone}</p>
            <p>{"Cell: " + users.cell}</p>
        </div>
    )}
    </ul>
    )
}

export default Modal