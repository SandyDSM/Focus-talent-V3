import React from "react";
import {
    Button,
    Divider,
    Flex,
    Heading,
    Image,
    Text,
    useBreakpointValue,
  } from "@aws-amplify/ui-react";

const Preguntas=({preg})=>{
    return(
      
      
      
      <div>
     
       

      {preg.map((pre) => (
      <>
      
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
       >
      <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,0.8)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          >
      {pre.TITULO}
      </Text>
      
      <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,0.8)"
          lineHeight="17.5px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          
        >

        </Text>

        {pre.VALORES}

      </Flex>
    
    
    
    
      
    
    
    </>
  
    ))
    }
    
    </div>
    );
  }
export default Preguntas  