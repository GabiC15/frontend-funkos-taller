import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

export default function Comentario({ valoracion }) {
  function getEstrellas(cantidad) {
    return valoracion.cantidadEstrellas >= cantidad
      ? faStarSolid
      : faStarRegular;
  }

  return (
    <>
      <div className="flex flex-col border-b pb-5">
        <div className="flex gap-1 mt-5">
          <FontAwesomeIcon
            icon={getEstrellas(1)}
            className="text-yellow-500 text-lg"
          />
          <FontAwesomeIcon
            icon={getEstrellas(2)}
            className="text-yellow-500 text-lg"
          />
          <FontAwesomeIcon
            icon={getEstrellas(3)}
            className="text-yellow-500 text-lg"
          />
          <FontAwesomeIcon
            icon={getEstrellas(4)}
            className="text-yellow-500 text-lg"
          />
          <FontAwesomeIcon
            icon={getEstrellas(5)}
            className="text-yellow-500 text-lg"
          />
        </div>
        <p className="text-sm mt-2">{valoracion.texto}</p>
      </div>
    </>
  );
}
