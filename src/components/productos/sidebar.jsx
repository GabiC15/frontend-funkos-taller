import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import RadioButton from "./radio-button";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  GET_CATEGORIAS,
  GET_SUBCATEGORIAS,
} from "@/services/apollo/queries/categoria";
import { GET_CARACTERISTICAS } from "@/services/apollo/queries/caracteristica";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  const { data: caracteristicasData, error } = useQuery(GET_CARACTERISTICAS);
  const { data: categoriasData } = useQuery(GET_CATEGORIAS);
  const [getSubcategorias, { data: subCategoriasData }] =
    useLazyQuery(GET_SUBCATEGORIAS);

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

  function setParam(array) {
    const currentParams = {};
    params.forEach((v, k) => (currentParams[k] = v));
    const query = { ...router.query, ...currentParams };
    array.forEach((i) => (query[i[0]] = i[1]));
    router.replace({ query }, { query }, { scroll: false });
  }

  useEffect(() => {
    const categoriaId = Number.parseInt(params.get("categoria"));
    getSubcategorias({ variables: { id: categoriaId } });
  }, [params, getSubcategorias]);

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
              <p>Ordernar</p>
              <RadioButton
                key={1}
                groupKey={1}
                title="Mas Recientes"
                checked={
                  !params.get("order") || params.get("order") === "RECIENTES"
                }
                onClick={() => setParam([["order", "RECIENTES"]])}
              />
              <RadioButton
                key={2}
                groupKey={1}
                title="Precio mayor"
                checked={params.get("order") === "PRECIO_DESC"}
                onClick={() => setParam([["order", "PRECIO_DESC"]])}
              />
              <RadioButton
                key={2}
                groupKey={1}
                title="Precio menor"
                checked={params.get("order") === "PRECIO_ASC"}
                onClick={() => setParam([["order", "PRECIO_ASC"]])}
              />
            </li>
            <li className="mt-10">
              <div className="flex justify-between items-center">
                <p>Precio</p>
                {params.get("min") || params.get("max") ? (
                  <button
                    className="text-xs font-light"
                    onClick={() => setParam([["min"], ["max"]])}
                  >
                    Quitar
                  </button>
                ) : (
                  <></>
                )}
              </div>

              <RadioButton
                key={1}
                groupKey={2}
                title="Todos los precios"
                checked={!params.get("max") && !params.get("max")}
                onClick={() => setParam([["max"], ["min"]])}
              />
              <RadioButton
                key={1}
                groupKey={2}
                title="Menor a $10000"
                checked={params.get("max") == 10000}
                onClick={() => setParam([["max", 10000], ["min"]])}
              />
              <RadioButton
                key={2}
                groupKey={2}
                title="$10000 - $15000"
                checked={
                  params.get("min") == 10000 && params.get("max") == 15000
                }
                onClick={() => {
                  setParam([
                    ["min", 10000],
                    ["max", 15000],
                  ]);
                }}
              />
              <RadioButton
                key={3}
                groupKey={2}
                title="$15000 - $20000"
                checked={
                  params.get("min") == 15000 && params.get("max") == 20000
                }
                onClick={() => {
                  setParam([
                    ["min", 15000],
                    ["max", 20000],
                  ]);
                }}
              />
              <RadioButton
                key={4}
                groupKey={2}
                title="Mayor a $20000"
                checked={params.get("min") == 20000}
                onClick={() => {
                  setParam([["min", 20000], ["max"]]);
                }}
              />
            </li>
            <li className="mt-10">
              <div className="flex justify-between items-center">
                <p>Característica</p>
                {params.get("caracteristica") && (
                  <button
                    className="text-xs font-light"
                    onClick={() => setParam([["caracteristica"]])}
                  >
                    Quitar
                  </button>
                )}
              </div>
              <div className="max-h-[14rem] overflow-y-auto side-scrollbar">
                <RadioButton
                  key={0}
                  groupKey={4}
                  title="Todas las características"
                  checked={!params.get("caracteristica")}
                  onClick={() => setParam([["caracteristica"]])}
                />
                {caracteristicasData?.caracteristicas.map((car, i) => (
                  <RadioButton
                    key={i}
                    groupKey={4}
                    title={car.nombre}
                    checked={car.id == params.get("caracteristica")}
                    onClick={() => setParam([["caracteristica", car.id]])}
                  />
                ))}
              </div>
            </li>
            <li className="mt-10">
              <div className="flex justify-between items-center">
                <p>Fandom</p>
                {params.get("categoria") && (
                  <button
                    className="text-xs font-light"
                    onClick={() => setParam([["categoria"], ["subcategoria"]])}
                  >
                    Quitar
                  </button>
                )}
              </div>
              <div className="max-h-[14rem] overflow-y-auto side-scrollbar">
                <RadioButton
                  key={0}
                  groupKey={5}
                  title="Todos los fandoms"
                  checked={!params.get("categoria")}
                  onClick={() => setParam([["categoria"], ["subcategoria"]])}
                />
                {categoriasData?.categorias.map((cat, i) => (
                  <RadioButton
                    key={i}
                    groupKey={5}
                    title={cat.nombre}
                    checked={cat.id == params.get("categoria")}
                    onClick={() =>
                      setParam([["categoria", cat.id], ["subcategoria"]])
                    }
                  />
                ))}
              </div>
            </li>
            {subCategoriasData?.subcategorias && (
              <li className="mt-10">
                <div className="flex justify-between items-center">
                  <p>Licencia</p>
                  {params.get("subcategoria") && (
                    <button
                      className="text-xs font-light"
                      onClick={() => setParam([["subcategoria"]])}
                    >
                      Quitar
                    </button>
                  )}
                </div>
                <div className="max-h-[14rem] overflow-y-auto side-scrollbar">
                  <RadioButton
                    key={0}
                    groupKey={6}
                    title="Todas las licencias"
                    checked={!params.get("subcategoria")}
                    onClick={() => setParam([["subcategoria"]])}
                  />
                  {subCategoriasData?.subcategorias.map((cat, i) => (
                    <RadioButton
                      key={i}
                      groupKey={6}
                      title={cat.nombre}
                      checked={cat.id == params.get("subcategoria")}
                      onClick={() => setParam([["subcategoria", cat.id]])}
                    />
                  ))}
                </div>
              </li>
            )}
          </ul>
        </div>
      </aside>
    </div>
  );
}
