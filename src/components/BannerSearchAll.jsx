/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useContext, useEffect, useState, useRef, useCallback  } from "react";
import CollaboratorsContext from "../context/collaborators";
import { API } from 'aws-amplify';
import CardSerch from "../components/CardSerch";

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
export default function BannerSearchAll(props) {

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

    function getData(busqueda) {
      const apiName = 'Usuarios';
      const path = '/busq_limit';
      const myInit = {
        headers: {}, // OPTIONAL
        queryStringParameters: {
          BUSQUEDA: `${busqueda}`,
        }
      };
    
      return API.get(apiName, path, myInit);
    }
  
    const fetchCollAll = async (busqueda) => {
      try{
        const response = await getData(busqueda);
        //console.log(response);
        setResults(response)
      }catch (error) {
        console.log("error:", error);
      }
    };

    ////////////////////////////////////////////////////////////////
    
    const inputRef = useRef(null);
    const searchButtonRef = useRef(null);

  const onClick = useCallback(() => {
    inputRef.current.focus();
    const search = inputRef.current.value
    fetchCollAllClic(search);
  }, []);

  useEffect(() => {
    const searchButtonRefCurrent = searchButtonRef.current;
    if (searchButtonRef && searchButtonRefCurrent) {
      searchButtonRefCurrent.addEventListener('click', onClick, false);
      return () => {
        searchButtonRefCurrent.removeEventListener('click', onClick, false);
      };
    }
  }, [onClick]);

    ////////////////////////////////////////////////////////////////

    useEffect(() => { 
        fetchCollAll(busqueda);
    }, [busqueda]);

    //console.log(busqueda)

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
          placeholder="Buscar Colaraborador"
          width="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          label="search"
          onChange={handleChange}
          onClear={()=>onClear()}
          ref={inputRef}
          searchButtonRef={searchButtonRef}
          id="busqueda"

          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
      </Flex>
      {busqueda && <CardSerch collaborators={results} />}
    </Flex>
  );
}
