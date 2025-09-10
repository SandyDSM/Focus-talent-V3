import React from 'react'
import BannerUser from "../components/BannerUser";
import { Search, X } from "lucide-react";
import {SearchField} from "@aws-amplify/ui-react";
import CardSerchOrg from '../components/CardSerchOrg';


function SearchOrg() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header 1 */}
      <div className="z-40">
        <BannerUser />
      </div>
      <div className='p-12 flex flex-col gap-6'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
                <Search/>
                <h3 className='font-bold text-lg'>Buscador</h3>
            </div>
            {/* Botón para cerrar el modal */}
          <button 
            //onClick={closeModal}
            className=" right-4 z-10 p-2 bg-blue-800 rounded-full shadow-md hover:bg-blue-900 transition-colors"
            aria-label="Cerrar"
          >
            <X size={24} className="text-white" />
          </button>
        </div>
        <SearchField
        placeholder="Buscar Colaraborador"
          width="50%"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          label="search"
          //onChange={handleChange}
          //onClear={()=>onClear()}
          //searchButtonRef={searchButtonRef}
          id="busqueda"

          //{...getOverrideProps(overrides, "SearchField")}
        />
        <CardSerchOrg/>
      </div>
    </div>
  )
}

export default SearchOrg