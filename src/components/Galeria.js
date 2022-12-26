import "../assets/css/galeria.css";
import { useState, useEffect, useContext } from "react";
import MyContext from "../myContext";


export default function Home() {

    const [fotos, setFotos] = useState([]);
    const {favoritas, setFavoritas} = useContext(MyContext)

    useEffect(() => {
      obtenerDatos()
    }, []);

    
    const obtenerDatos = async () => {
       try {
        // cree mi propio perfil en pexels para poder obtener mis propias fotos a traves de la API
        const response = await fetch(  "https://api.pexels.com/v1/collections/qtlog4u?per_page=15",{
          headers: {
            Authorization: "563492ad6f9170000100000174d7c9eeb45446bca4ba206eb6f86361"
          }
        });
        const data = await response.json();
        setFotos(data.media);
      } catch (error) {
        alert(error)
      } 
    }

    function favoritos(id) {
      const elemento = document.getElementById(`${id}`)
      if (elemento.style.color === 'red') {
        elemento.style.color = 'aliceblue';
      } else {
        elemento.style.color = 'red';
        fotos.map((foto) => (foto.id == id ? setFavoritas([...favoritas, foto]) : null )) 
      }
      
    }

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto) => (
        <div className="fotos zoom" key={foto.id}>
          <img src={foto.src.tiny} className='sombra ' alt=""></img>
          <p>{foto.alt}</p>   
          <i className='bx bxs-heart corazon bx-lg' id={`${foto.id}`} onClick={() => favoritos(foto.id)}></i>
        </div>
      ))} 
    </div>
  );
}




