/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Heading,
  SearchField,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function BannerSearch(props) {

  
  
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Heading: {},
        "Frame 479": {},
        SearchField: {},
        "Frame 480": {},
        BannerSearch: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        Heading: {},
        "Frame 479": { shrink: "0", alignSelf: "stretch" },
        SearchField: { alignSelf: "stretch" },
        "Frame 480": { alignSelf: "stretch" },
        BannerSearch: {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    medium: "medium",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );

  

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
        respnotaply
    } = useContext(CollaboratorsContext);











  const onChange = (filtro) => {
    restauraUserClasif(props.OpcionSelect);
  
if(props.OpcionSelect===1){
  if(futleader==respfutleader){
 const filBusqueda=futleader.filter(f=>f.NOMBRE.includes(filtro) || f.APELLIDOS.includes(filtro))
 actualizaBusqueda(filBusqueda,1);
  }else{
  const filBusqueda=respfutleader.filter(f=>f.NOMBRE.includes(filtro) || f.APELLIDOS.includes(filtro))
 actualizaBusqueda(filBusqueda,1);
  }
}else if(props.OpcionSelect===2){
  if(pillbusiness==resppillbusiness){
  const filBusqueda=pillbusiness.filter(f=>f.NOMBRE.includes(filtro) || f.APELLIDOS.includes(filtro))
  actualizaBusqueda(filBusqueda,2); 
  }else{
    const filBusqueda=resppillbusiness.filter(f=>f.NOMBRE.includes(filtro) || f.APELLIDOS.includes(filtro))
    actualizaBusqueda(filBusqueda,2);  
  }
}else if(props.OpcionSelect===3){
  if(basebusiness==respbasebusiness){
  const filBusqueda=basebusiness.filter(f=>f.NOMBRE.includes(filtro) || f.APELLIDOS.includes(filtro))
  actualizaBusqueda(filBusqueda,3); 
  }else{
    const filBusqueda=respbasebusiness.filter(f=>f.NOMBRE.includes(filtro) || f.APELLIDOS.includes(filtro))
    actualizaBusqueda(filBusqueda,3);   
  }
}else if(props.OpcionSelect===4){
  if(noteval==respnoteval){
  const filBusqueda=noteval.filter(f=>f.NOMBRE.includes(filtro) || f.APELLIDOS.includes(filtro))
  actualizaBusqueda(filBusqueda,4);
  }else{
    const filBusqueda=respnoteval.filter(f=>f.NOMBRE.includes(filtro) || f.APELLIDOS.includes(filtro))
  actualizaBusqueda(filBusqueda,4);
  }

}else if(props.OpcionSelect===5){
if(notaply==respnotaply){
  const filBusqueda=notaply.filter(f=>f.NOMBRE.includes(filtro) || f.APELLIDOS.includes(filtro))
  actualizaBusqueda(filBusqueda,5);
}else{
  const filBusqueda=respnotaply.filter(f=>f.NOMBRE.includes(filtro) || f.APELLIDOS.includes(filtro))
  actualizaBusqueda(filBusqueda,5);
}
}
};

  const onClear=()=>{
    restauraUserClasif(props.OpcionSelect);
   
  };
  


  

  return (
    <Flex
      gap="12px"
      direction="row"
      width="1441px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.25)"
      borderRadius="4px"
      padding="12px 24px 12px 24px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "BannerSearch")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 479")}
      >
        <Heading
          shrink="0"
          alignSelf="stretch"
          level="3"
          children="Mi equipo"
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 480")}
      >

        
        <SearchField
          placeholder="sdasaddsasda"
          width="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          label="search"
          onChange={(e)=>onChange(e.target.value)}
          onClear={()=>onClear()}
          id="busqueda"

          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
      </Flex>
    </Flex>
  );
}
