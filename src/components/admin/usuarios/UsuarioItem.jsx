import Loading from "@/components/producto/loading";
import {
  GET_FB_USUARIO,
  UPDATE_FB_USUARIO,
} from "@/services/apollo/queries/usuario";
import { useMutation, useQuery } from "@apollo/client";

export default function UsuarioItem({ usuario }) {
  const { data, loading: getLoading } = useQuery(GET_FB_USUARIO, {
    variables: {
      uid: usuario.authId,
    },
  });
  const [setFbUsuario, { loading: updateLoading }] = useMutation(
    UPDATE_FB_USUARIO,
    {
      refetchQueries: [GET_FB_USUARIO],
    }
  );

  return (
    <>
      <tr className="bg-black/10 border-b" key={usuario.id}>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-white whitespace-nowrap"
        >
          {usuario.id}
        </th>
        <td className="px-6 py-4">{usuario.email}</td>
        <td className="px-6 py-4">
          {usuario.nombres} {usuario.apellidos}
        </td>
        <td className="px-6 py-3">
          {!updateLoading && !getLoading && (
            <input
              id="default-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              checked={!data?.usuarioFb.disabled}
              onChange={(e) =>
                setFbUsuario({
                  variables: {
                    uid: usuario.authId,
                    input: {
                      disabled: !data?.usuarioFb.disabled,
                    },
                  },
                })
              }
            />
          )}

          {(updateLoading || getLoading) && <Loading />}
        </td>
      </tr>
    </>
  );
}
