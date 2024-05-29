import Cards from "../../components/Card"
import { useEffect, useState } from "react"



const Index = () => {
        const urlApi = "https://randomuser.me/api/?results=5"
        const [users, setUsers] = useState([])
        useEffect(() => {
            fetch(urlApi)
            .then(response => response.json())
            .then(data => setUsers(data.results))
            .catch(error => console.log('Hubo un error ' + error))
        }, [])
    
    return(
            <div style={{width: "100%"}}>
            <ul style={{display: "flex", justifyContent: "space-around", alignContent: "center", flexWrap: "wrap"}}> {users.map((user, index) =>         
                    <Cards
                    name={user.name.first + " " + user.name.last}
                    email={user.email}
                    img={user.picture.large}
                    key={index}
                    />
            )}
            </ul>
        </div>

    )
}

export default Index