import { useContext } from "react";
import MyContext from "../myContext";

export default function Favoritos() {
  const { favoritas } = useContext(MyContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritas.map((favorita) => (
          <div className="fotos zoom" key={favorita.id}>
            <img src={favorita.src.tiny} className="sombra " alt=""></img>
            <p>{favorita.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
