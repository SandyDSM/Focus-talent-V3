import React from "react";
import { useContext } from "react";
import CreateTags from "../components/CreateTags";
import HeadAdmin from "../components/HeadAdmin";
import ShowTags from "../components/ShowTags";
import CollaboratorsContext from "../context/collaborators";
import { Loader } from "@aws-amplify/ui-react";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "aws-amplify";

function Tags() {
  const [etiquetas, setEtiquetas] = useState([]);
  const [etiquetasmod, setetiquetasmod] = useState(["", "", "", "", "", ""]);
  const [buttonavailable, setButtonavailable] = useState(true);
  const [reloadTags, setReloadTags] = useState(true);

  useEffect(() => {
    gettags();
  }, [reloadTags]);


  function getData() {
    const apiName = 'API Behaviors';
    const path = '/admintags';
    const myInit = {
   
    };
  
    return API.get(apiName, path, myInit);
  }
  
  const gettags = async () => {
    try{
      const response = await getData();
  setEtiquetas(response);
  
    }catch (error) {
    setEtiquetas([]);
      console.log("error:", error);
    }
  };



  //const {isLoading, setIsLoading}=useContext(CollaboratorsContext)
  /*
  const gettags = async () => {
    try {
      const respdesemp = await fetch(
        `https://talento-itzahuia.com/SAC/etiquetas.php`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const datos = await respdesemp.json();
      setEtiquetas(datos);
      //console.log(datos[0])
    } catch (error) {
      setEtiquetas([]);
    }
  };
*/
  return (
    <div className="flex flex-col gap-6">
      <HeadAdmin title={"Administrar etiquetas"} />
      <div className="flex flex-col gap-6 px-11">
        <CreateTags
          etiquetasamod={etiquetasmod}
          setetiquetasmod={setetiquetasmod}
          botonhabilitado={buttonavailable}
          reloadTags ={reloadTags}
          setReloadTags = {setReloadTags}
        />
        <ShowTags
          etiquetas={etiquetas}
          etiquetasmod={setetiquetasmod}
          buttonhabilitado={setButtonavailable}
        />
      </div>
    </div>
  );
}

export default Tags;
