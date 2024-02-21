import Sidebar from "@/components/common/sidebar";
import Loading from "@/components/producto/loading";
import { GET_USUARIOS } from "@/services/apollo/queries/usuario";
import { useQuery } from "@apollo/client";
import UsuarioItem from "./UsuarioItem";

export default function UsuariosSection() {
  const { data: usuariosData, loading: usuariosLoading } = useQuery(
    GET_USUARIOS,
    { variables: { rolId: 1 } }
  );

  return (
    <>
      <div className="flex bg-gradient min-h-screen">
        <Sidebar />

        <div className="container mx-8 flex flex-col ml-20 md:ml-72">
          <h1 className="text-xl md:text-3xl font-black mt-12 mb-2 md:mb-4 uppercase">
            Usuarios
          </h1>
          <div className="grid grid-cols-1 gap-1 md:gap-2 mb-16">
            {usuariosLoading && <Loading className="mx-auto" />}
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-white">
                <thead className="text-xs text-white uppercase bg-black/20">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Habilitado
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {usuariosData?.usuarios.map((usuario) => (
                    <UsuarioItem usuario={usuario} key={usuario.id} />
                  ))}
                </tbody>
              </table>
            </div>

            {usuariosData?.usuarios.length === 0 && (
              <p>No hay usuarios disponibles</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
