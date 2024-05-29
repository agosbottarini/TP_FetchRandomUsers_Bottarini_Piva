const Cards = ({img, name, email}) => {
  return (
    <div class="apartado1" style={{padding: "3vw", border: "2px solid black", margin: "0.5vw"}}>
            <div class="container">
                <h2><b>{name}</b></h2>
                <img src={img} alt="img" />
                <p>{email}</p>
                <button class="primary">Ver más</button>
            </div>
    </div>
  );
}

export default Cards;