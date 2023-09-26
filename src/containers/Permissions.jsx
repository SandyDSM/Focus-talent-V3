import React from 'react'
import HeadAdmin from "../components/HeadAdmin";
import { Heading, Divider, SearchField } from "@aws-amplify/ui-react";
import SearchBoss from '../components/SearchBoss';
import CollaboratorsContext from "../context/collaborators";
import { useContext, useEffect, useState } from "react";
import { API } from 'aws-amplify';



function Permissions() {

    const {fetchCollAllClic, resultsComplete} = useContext(CollaboratorsContext);
    const [busqueda, setBusqueda] = useState('')
    const [tablePermission, setTablePermission] = useState([])


    function getPermissions() {
      const apiName = 'Usuarios';
      const path = '/getusersearch';
      const myInit = {
        headers: {}, // OPTIONAL
      };
    
      return API.get(apiName, path, myInit);
    }
  
    const fetchPermissions = async () => {
      try{
        const response = await getPermissions();
        //console.log("Permissions",response)
        setTablePermission(response)
      }catch (error) {
        console.log("error:", error);
      }
    };

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
      fetchPermissions();
  }, []);

    useEffect(() => { 
        fetchCollAllClic(busqueda);
    }, [busqueda]);

  return (
    <div className="flex flex-col gap-6">
    <HeadAdmin title={"Administrar permisos de busqueda"} />
    <div className='px-11'>
    <div className="card flex flex-col gap-6 w-full mb-8 overflow-x-scroll">
        
      <SearchBoss tablePermission={tablePermission} handleChange={handleChange} onClear={onClear}/>
    </div>
    </div>
  </div>

  )
}

export default Permissions