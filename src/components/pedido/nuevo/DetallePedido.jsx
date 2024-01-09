import RadioButton from "@/components/pedido/nuevo/RadioButton";
import InputField from "@/components/pedido/nuevo/InputField";
import { useState } from "react";

export default function DetallePedido() {
  const [envioType, setEnvioType] = useState(0);

  return (
    <>
      <div className="flex flex-col md:w-1/2">
        <h2 className="text-xl font-bold">Envío</h2>
        <div className="flex flex-col mt-3 gap-2">
          <RadioButton
            groupId={1}
            id={2}
            checked={envioType == 0}
            onClick={() => setEnvioType(0)}
          >
            Envío a domicilio
          </RadioButton>
          <RadioButton
            groupId={1}
            id={1}
            checked={envioType == 1}
            onClick={() => setEnvioType(1)}
          >
            Retiro en local
          </RadioButton>
        </div>

        <div className="flex flex-col mt-3 gap-2">
          {envioType == 0 && (
            <div className="flex flex-col gap-2">
              <InputField id={1} placeholder="Ingrese su calle">
                Calle
              </InputField>

              <InputField id={1} placeholder="Ingrese su número">
                Número
              </InputField>
              <InputField id={1} placeholder="Ingrese su piso">
                Piso
              </InputField>
            </div>
          )}

          <div className="w-full h-[1px] bg-white mt-3"></div>
          <InputField id={1} placeholder="Ingrese su nombre">
            Cupón
          </InputField>
        </div>

        <div className="flex flex-col items-end mt-5">
          <p className="text-sm">Total</p>
          <p className="text-3xl font-bold">$8000</p>
        </div>

        <div className="w-full flex justify-center bg-chineseBlack py-1 rounded-md text-lg font-semibold mt-4">
          Comprar
        </div>
      </div>
    </>
  );
}
