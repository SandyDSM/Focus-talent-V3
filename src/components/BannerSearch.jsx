import * as React from "react";
import { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";

export default function BannerSearch({ OpcionSelect }) {
  const {
    actualizaBusqueda,
    futleader,
    restauraUserClasif,
    pillbusiness,
    basebusiness,
    noteval,
    notaply,
    respfutleader,
    resppillbusiness,
    respbasebusiness,
    respnoteval,
    respnotaply,
  } = useContext(CollaboratorsContext);

  const onChange = (filtro) => {
    restauraUserClasif(OpcionSelect);

    if (OpcionSelect === 1) {
      const src = futleader === respfutleader ? futleader : respfutleader;
      actualizaBusqueda(src.filter(f => f.NOMBRE.toLowerCase().includes(filtro.toLowerCase()) || f.APELLIDOS.toLowerCase().includes(filtro.toLowerCase())), 1);
    } else if (OpcionSelect === 2) {
      const src = pillbusiness === resppillbusiness ? pillbusiness : resppillbusiness;
      actualizaBusqueda(src.filter(f => f.NOMBRE.toLowerCase().includes(filtro.toLowerCase()) || f.APELLIDOS.toLowerCase().includes(filtro.toLowerCase())), 2);
    } else if (OpcionSelect === 3) {
      const src = basebusiness === respbasebusiness ? basebusiness : respbasebusiness;
      actualizaBusqueda(src.filter(f => f.NOMBRE.toLowerCase().includes(filtro.toLowerCase()) || f.APELLIDOS.toLowerCase().includes(filtro.toLowerCase())), 3);
    } else if (OpcionSelect === 4) {
      const src = noteval === respnoteval ? noteval : respnoteval;
      actualizaBusqueda(src.filter(f => f.NOMBRE.toLowerCase().includes(filtro.toLowerCase()) || f.APELLIDOS.toLowerCase().includes(filtro.toLowerCase())), 4);
    } else if (OpcionSelect === 5) {
      const src = notaply === respnotaply ? notaply : respnotaply;
      actualizaBusqueda(src.filter(f => f.NOMBRE.toLowerCase().includes(filtro.toLowerCase()) || f.APELLIDOS.toLowerCase().includes(filtro.toLowerCase())), 5);
    }
  };

  const onClear = () => {
    restauraUserClasif(OpcionSelect);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 bg-white rounded shadow-sm w-full transition-all">
      <div className="flex-1">
        <h3 className="text-lg font-medium">Mi equipo</h3>
      </div>
      <div className="relative">
        <input
          id="busqueda"
          type="search"
          placeholder="Buscar colaborador"
          onChange={(e) => onChange(e.target.value)}
          onInput={(e) => { if (e.target.value === "") onClear(); }}
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue w-64"
        />
      </div>
    </div>
  );
}
