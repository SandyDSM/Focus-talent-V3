/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useContext } from "react";
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
import CollaboratorsContext from "../context/collaborators";
import { useState } from "react";
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
  
    collaborators,
    collaboratorsResp,
    actualizaBusqueda,
    restauraUsuarios

   } =
    useContext(CollaboratorsContext);



    const onChange = (evento) => {
   
  console.log(evento.length); 
  restauraUsuarios();
   if(collaborators==collaboratorsResp){
    const filBusqueda=collaborators.filter(f=>f.NOMBRE.toUpperCase().includes(evento.toUpperCase()) || f.APELLIDOS.toUpperCase().includes(evento.toUpperCase()))
    actualizaBusqueda(filBusqueda);
   }else{
    const filBusqueda=collaboratorsResp.filter(f=>f.NOMBRE.toUpperCase().includes(evento.toUpperCase()) || f.APELLIDOS.toUpperCase().includes(evento.toUpperCase()))
    actualizaBusqueda(filBusqueda);
   }

    };
   
     const onClear=()=>{
       restauraUsuarios();
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
          placeholder="Buscar colaborador"
          width="unset"
          shrink="0"
          size="default"
          id="busqueda"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          onChange={(e)=>onChange(e.target.value)}
          onClear={()=>onClear()}
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
      </Flex>
    </Flex>
  );
}
