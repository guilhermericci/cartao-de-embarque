import { QRCodeSVG } from "qrcode.react";
import { TbPlane } from "react-icons/tb";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center [width:327px]">
        <div
          className="w-full flex flex-col space-y-4 [padding:25px] [border-radius:20px_20px_0_0]"
          id="boarding-pass-start"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-primary-100">Voo</span>
              <span className="font-medium">RS995</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-primary-100">Data</span>
              <span className="font-medium">23/05/2023</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-primary-100">São Paulo, Brasil</span>
              <span className="text-4xl font-medium">GRU</span>
              <span className="font-medium text-sm">17:00</span>
            </div>
            <TbPlane className="-rotate-45 shrink-0" size={32} />
            <div className="flex flex-col text-end">
              <span className="text-primary-100">São Francisco, EUA</span>
              <span className="text-4xl font-medium">SFO</span>
              <div className="flex space-x-0.5 self-end">
                <span className="font-medium text-sm">04:48</span>
                <span className="text-primary-100 text-xs">+1</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white border border-dashed border-black/30 [max-width:300px]" />
        <div
          className="w-full flex flex-items justify-between [padding:25px]"
          id="boarding-pass-center"
        >
          <div className="flex flex-col">
            <span className="text-primary-100">Passageiro</span>
            <span className="font-medium">Guilherme Ricci</span>
          </div>
          <div className="flex flex-col text-end">
            <span className="text-primary-100">Assento</span>
            <span className="font-medium">28A</span>
          </div>
        </div>
        <div className="w-full bg-white border border-dashed border-black/30 [max-width:300px]" />
        <div
          className="w-full flex flex-col space-y-4 [padding:25px] [border-radius:0_0_20px_20px]"
          id="boarding-pass-end"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <span className="text-primary-100">Embarque</span>
                <span className="text-white text-sm font-medium w-max bg-primary-500 px-2 py-1 rounded-lg">
                  16:15
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary-100">Terminal</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary-100">Portão</span>
                <span className="font-medium">15</span>
              </div>
            </div>
            <div className="flex flex-col space-y-1 text-end">
              <QRCodeSVG
                className="self-end"
                value="https://github.com/guilhermericci"
              />
              <div className="flex flex-col">
                <span className="text-primary-100">Grupo de embarque</span>
                <span className="font-medium">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
