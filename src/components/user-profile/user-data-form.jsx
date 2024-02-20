import { GET_USUARIO, UPDATE_USUARIO } from '@/services/apollo/queries/usuario';
import { useMutation, useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import Loading from '../producto/loading';


export default function UserDataForm() {

    const [nombresValue, setNombresValue] = useState()
    const [apellidosValue, setApellidosValue] = useState()


    const { data: usuarioData } = useQuery(GET_USUARIO);
    console.log(usuarioData)
    const [updateUserData, { loading: loadingUpdate, data: dataUpdate }] =
    useMutation(UPDATE_USUARIO, {refetchQueries: [GET_USUARIO]});

    function handleSubmit(e) {
        e.preventDefault()

        updateUserData({variables:{input:{nombres: nombresValue, apellidos: apellidosValue}}})
    }

    console.log(dataUpdate)
    return(
        <>
            <div className="bg-gradient">
                <div className="container min-h-[75vh] md:max-w-screen-xl mx-auto pt-10 pb-16 px-5 md:px-32">
                    <div>
                        <form id="dataForm" onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full md:w-[30rem]">
                                <h4 className="text-2xl font-bold">Tus datos</h4>
                                
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-normal text-white mt-2"
                                >
                                    Nombre
                                </label>
                                <input
                                    onChange={(e) => setNombresValue(e.target.value)}
                                    type="text"
                                    id="first_name"
                                    className="bg-transparent border-2 border-white text-white placeholder:text-slate-300 text-sm rounded-lg focus:ring-white block w-full p-2.5"
                                    placeholder="Nombre"
                                    value={nombresValue ?? usuarioData?.usuario.nombres}
                                    required
                                />

                                <label
                                    htmlFor="Apellidos"
                                    className="block mb-2 text-sm font-normal text-white mt-2"
                                >
                                    Apellidos
                                </label>
                                <input
                                    onChange={(e) => setApellidosValue(e.target.value)}
                                    type="text"
                                    id="apellidos"
                                    className="bg-transparent border-2 border-white text-white placeholder:text-slate-300 text-sm rounded-lg focus:ring-white block w-full p-2.5"
                                    placeholder="Apellidos"
                                    value={apellidosValue ?? usuarioData?.usuario.apellidos}
                                    required
                                />

                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-normal text-white mt-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className="bg-transparent border-2 border-white text-white placeholder:text-slate-300 text-sm rounded-lg focus:ring-white block w-full p-2.5 max-h-36"
                                    placeholder="email"
                                    value={usuarioData?.usuario.email}
                                    disabled
                                ></input>

                                <button
                                    id="updateBtn"
                                    type="submit"
                                    className="bg-chineseBlack my-6 py-2 w-full rounded-xl"
                                    disabled = {!nombresValue && !apellidosValue}
                                    >
                                    {!loadingUpdate ? "Actualizar" : <Loading />}

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
      </>
    )
}