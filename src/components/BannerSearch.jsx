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
    <div className="flex flex-col sm:flex-row items-center gap-3 mx-4 md:mx-5 px-4 py-3 bg-white rounded-lg shadow-panel border border-border-subtle">
      <h3 className="flex-1 text-base font-semibold text-text-primary">Mi equipo</h3>
      <input
        id="busqueda"
        type="search"
        placeholder="Buscar colaborador"
        onChange={(e) => onChange(e.target.value)}
        onInput={(e) => { if (e.target.value === "") onClear(); }}
        className="border border-border-subtle rounded-lg px-3 py-2 text-sm text-text-primary
                   placeholder:text-text-muted bg-surface-muted
                   focus:outline-none focus:ring-2 focus:ring-bmb-blue/30 focus:border-bmb-blue
                   transition-colors duration-180 w-60"
      />
    </div>
  );
}
