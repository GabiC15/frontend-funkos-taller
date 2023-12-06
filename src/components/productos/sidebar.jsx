import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import RadioButton from "./radio-button";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const sideNavRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
  }

  return (
    <div ref={sideNavRef}>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="flex w-min items-center p-2 mt-2 text-sm text-white rounded-lg border-[1px] border-white sm:hidden focus:outline-none gap-2 ml-auto"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <FontAwesomeIcon icon={faFilter} className="w-4 h-4 text-white" />
        Filtrar
      </button>

      <aside
        id="default-sidebar"
        className={`fixed md:static top-0 left-0 z-40 w-56 h-full md:h-min md:py-2 md:mt-0 transition-transform sm:translate-x-0 ${
          !showSidebar ? "-translate-x-full" : ""
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-5 pt-20 md:pt-6 pb-8 overflow-y-auto bg-chineseBlack md:rounded-lg">
          <ul className="space-y-6 font-medium">
            <li>
              <p>Ordenar</p>
              <RadioButton key={1} groupKey={1} title="Mas Relevantes" />
              <RadioButton key={2} groupKey={1} title="Mas Recientes" />
            </li>
            <li className="mt-10">
              <p>Precio</p>
              <RadioButton key={1} groupKey={2} title="Menor a $10000" />
              <RadioButton key={2} groupKey={2} title="$10000 - $15000" />
              <RadioButton key={3} groupKey={2} title="$15000 - $2000" />
              <RadioButton key={4} groupKey={2} title="Mayor a $20000" />
            </li>
            <li className="mt-10">
              <p>Valoración</p>
              <RadioButton key={1} groupKey={3} title="1 estrella" />
              <RadioButton key={2} groupKey={3} title="2 estrellas" />
              <RadioButton key={3} groupKey={3} title="3 estrellas" />
              <RadioButton key={4} groupKey={3} title="4 estrellas" />
              <RadioButton key={5} groupKey={3} title="5 estrellas" />
            </li>
            <li className="mt-10">
              <p>Licencia</p>
              <RadioButton key={1} groupKey={4} title="Disney" />
              <RadioButton key={2} groupKey={4} title="Marvel" />
              <RadioButton key={3} groupKey={4} title="Star Wars" />
              <RadioButton key={4} groupKey={4} title="Harry Potter" />
              <RadioButton key={5} groupKey={4} title="The Walking Dead" />
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
