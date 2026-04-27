import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

function Filter({ ListaPuestos, ListaOrganizacion, cargaFiltrado, DATOS }) {
  function filtaPuesto(dtos) {
    let dfilter = [];
    let j = 0;
    let dfil;
    if (ListaPuestos.length > 0) {
      for (let i = 0; i < ListaPuestos.length; i++) {
        if (document.getElementsByName(ListaPuestos[i])[0].checked) {
          dfilter[j] = dtos?.filter(
            (c) => c.PUESTO === document.getElementsByName(ListaPuestos[i])[0].value
          );
          j++;
        }
      }
      dfil = dfilter[0];
      for (let k = 1; k < dfilter.length; k++) {
        dfil = dfil.concat(dfilter[k]);
      }
      if (j > 0) return dfil;
      else return dtos;
    } else {
      return dtos;
    }
  }

  function filtraOrg() {
    let dfilter = [];
    let j = 0;
    let dfil;
    let datFilPuesto = filtaPuesto(DATOS);
    if (ListaOrganizacion.length > 0) {
      for (let i = 0; i < ListaOrganizacion.length; i++) {
        if (document.getElementsByName(ListaOrganizacion[i])[0] !== undefined) {
          if (document.getElementsByName(ListaOrganizacion[i])[0].checked) {
            dfilter[j] = datFilPuesto?.filter(
              (c) =>
                c.ORGANIZACION === document.getElementsByName(ListaOrganizacion[i])[0].value
            );
            j++;
          }
        }
      }
      dfil = dfilter[0];
      for (let k = 1; k < dfilter.length; k++) {
        dfil = dfil.concat(dfilter[k]);
      }
      if (j > 0) cargaFiltrado(dfil);
      else cargaFiltrado(datFilPuesto);
    } else {
      cargaFiltrado(datFilPuesto);
    }
  }

  return (
    <div className="card">
      <div className="m-4">
        <h2 className="text-xl">FILTROS</h2>
      </div>

      <div className="divide-y divide-gray-200 border border-gray-200 rounded">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <span>PUESTO</span>
                <ChevronDownIcon
                  size={16}
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-3 flex flex-col gap-2">
                {ListaPuestos.map((lista, index) => (
                  <label key={index} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      name={lista}
                      value={lista}
                      id={index}
                      className="w-4 h-4 accent-bmb-blue"
                    />
                    {lista}
                  </label>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <span>ORGANIZACIÓN</span>
                <ChevronDownIcon
                  size={16}
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-3 flex flex-col gap-2">
                {ListaOrganizacion.map((org, index) => (
                  <label key={index} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      name={org}
                      value={org}
                      className="w-4 h-4 accent-bmb-blue"
                    />
                    {org}
                  </label>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      <div className="flex gap-4 my-4">
        <button className="flex-1 border border-gray-300 text-gray-700 text-sm px-3 py-1.5 rounded hover:bg-gray-50 transition-colors">
          Limpiar
        </button>
        <button
          className="flex-1 bg-bmb-blue text-white text-sm px-3 py-1.5 rounded hover:bg-bmb-secundary transition-colors"
          onClick={() => filtraOrg()}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
}

export default Filter;
