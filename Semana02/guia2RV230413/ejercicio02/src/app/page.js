import styles from "./page.module.css";
const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
         
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul >
            
            {equipo.plantilla.map((jugador) => (
              
              <li className={styles.container__list} key={jugador.id}>
                <img src={jugador.imagen} className={styles.imagenes}></img>
                <br></br>
                <strong>{jugador.nombre}</strong>
                <p>Altura: {jugador.Altura}m <br></br> Peso:
                  {jugador.Peso}Kg</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default function Home() {
  // Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      "id": 1,
      "nombre": "Real Madrid",
      "plantilla": [
        { "id": 1,"imagen": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.transfermarkt.es%2Fcristiano-ronaldo%2Fprofil%2Fspieler%2F8198&psig=AOvVaw067rqkDiPuhYCGAeoxE98A&ust=1707691185431000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCNi8froYQDFQAAAAAdAAAAABAE" , "nombre": "Cristiano ronaldo ", "Altura": "1.75", "Peso": "74Kg" },
        { "id": 2,"imagen": "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRykWFTS83mU3Dct2HQed3yIHj8n6axqDpVME6vRo_AOvW80Y6y2T_g4D4HBnMd-D9U" , "nombre": "Luka modric", "Altura": "1.82", "Peso": "74Kg" },
        { "id": 3,"imagen": "https://focus.belfasttelegraph.co.uk/thumbor/TdECDksW-8zsy1HUNnzlLwAzFMM=/0x8:1500x835/960x640/prod-mh-ireland/f770d732-9266-11ed-9f7b-0210609a3fe2.jpg" , "nombre": "Karim Benzema", "Altura": "1.85", "Peso": "81Kg" }
      ]
    },
    {
      "id": 2,
      "nombre": "Barcelona",
      "plantilla": [
       { "id": 1, "imagen": "https://img.a.transfermarkt.technology/portrait/big/74857-1674465246.jpg?lm=1" ,"nombre": "Marc-André ter Stegen", "Altura": "1.75", "Peso": "74Kg" },
        { "id": 2,"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHfXuYt9on-yWm9bNy8MQMrt7M_FxFX49Uq8zK1QU&s" , "nombre": "pedri", "Altura": "1.82", "Peso": "74Kg" },
        { "id": 3,"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhKUjY_sqEEzDxTe9ce2vhxPe1zzm92zMhA&usqp=CAU" , "nombre": "Gavi", "Altura": "1.85", "Peso": "81Kg" }
      ]
    },
    {
      "id": 3,
      "nombre": "Miami",
      "plantilla": [
        { "id": 1,"imagen": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" , "nombre": "Lionel Messi", "Altura": "1.7", "Peso": "72Kg" },
        { "id": 2,"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhYBk4FulT11vOpRXl1RaFs4oCpFxHQOKyngahcE&usqp=CAE&s" , "nombre": "Luis Suárez", "Altura": "1.67", "Peso": "59Kg" },
        { "id": 3,"imagen": "https://img.a.transfermarkt.technology/portrait/big/65230-1690045610.jpg?lm=1" , "nombre": "sergio Busquets", "Altura": "1.87", "Peso": "79Kg" }
      ]
    }
    // ... agregar otros equipos
  ];
  return (
    <main className={styles.main}>
      <div>
        <h1>Fútbol</h1>
        
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
