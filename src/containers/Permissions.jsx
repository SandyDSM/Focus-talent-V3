import React from 'react'
import HeadAdmin from "../components/HeadAdmin";
import { Heading, Divider, SearchField } from "@aws-amplify/ui-react";
import SearchBoss from '../components/SearchBoss';
import CollaboratorsContext from "../context/collaborators";
import { useContext, useEffect, useState } from "react";


function Permissions() {

    const {fetchCollAllClic, resultsComplete} = useContext(CollaboratorsContext);
    const [busqueda, setBusqueda] = useState('')
    const [results, setResults] = useState([])


    const handleChange=(e)=>{
        let busqueda = e.target.value
        if(busqueda.length >= 3){
          setBusqueda(busqueda.toUpperCase());
        }else{
          setBusqueda('');
        }
    }
    const onClear = () => {
      setBusqueda('');
    };

    useEffect(() => { 
        fetchCollAllClic(busqueda);
    }, [busqueda]);

  return (
    <div className="flex flex-col gap-6">
    <HeadAdmin title={"Administrar permisos de busqueda"} />
    <div className='px-11'>
    <div className="card flex flex-col gap-6 w-full mb-8 overflow-x-scroll">
        <div className="flex flex-col gap-1 my-2">
            <Heading level={6}> Realiza la busqueda del colaborador y seleccionalo para activar el buscador</Heading>
        <Divider />
      </div>
      <div>
        <SearchField
        placeholder="Buscar colaborador"
        width="300px"
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        onChange={handleChange}
        onClear={()=>onClear()}
        hasSearchButton={false}
        hasSearchIcon={true}
        />
      </div>
      <SearchBoss/>
    </div>
    </div>
  </div>

  )
}

export default Permissions