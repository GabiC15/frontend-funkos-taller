import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

export default function Comentario() {
  return (
    <>
      <div className="flex flex-col border-b pb-5">
        <div className="flex gap-1 mt-5">
          <FontAwesomeIcon
            icon={faStarSolid}
            className="text-yellow-500 text-lg"
          />
          <FontAwesomeIcon
            icon={faStarSolid}
            className="text-yellow-500 text-lg"
          />
          <FontAwesomeIcon
            icon={faStarSolid}
            className="text-yellow-500 text-lg"
          />
          <FontAwesomeIcon
            icon={faStarSolid}
            className="text-yellow-500 text-lg"
          />
          <FontAwesomeIcon
            icon={faStarRegular}
            className="text-yellow-500 text-lg"
          />
        </div>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          hendrerit magna ut nisi eleifend ultricies. Nunc suscipit, velit
          scelerisque finibus placerat, est libero sodales ex.
        </p>
      </div>
    </>
  );
}
