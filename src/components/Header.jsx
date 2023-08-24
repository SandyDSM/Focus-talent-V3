/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import IconMenuHam from "../ui-components/IconMenuHam";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        gb_min: {},
        FrameLogo: {},
        iconMenuHam: {},
        "GB Talent": {},
        Vector: {},
        "material-symbols:keyboard-return-rounded": {},
        "Frame 13982": {},
        Header: {},
      },
      variantValues: { type: "noMenu" },
    },
    {
      overrides: {
        gb_min: {},
        FrameLogo: {},
        iconMenuHam: { display: "flex" },
        "GB Talent": {},
        Vector: {},
        "material-symbols:keyboard-return-rounded": {},
        "Frame 13982": { display: "none" },
        Header: {},
      },
      variantValues: { type: "menu" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const gBTalentOnClick = useNavigateAction({
    type: "url",
    url: "https://grupobimbo.csod.com/LMS/catalog/Welcome.aspx?tab_page_id=-67&tab_id=-1",
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1441px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="11px 24px 11px 24px"
      backgroundColor="rgba(84,131,232,1)"
      display="flex"
      {...getOverrideProps(overrides, "Header")}
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
        padding="10px 10px 10px 10px"
        display="flex"
        {...getOverrideProps(overrides, "FrameLogo")}
      >
       <Link to="/">

        <Image
          width="47px"
          height="38px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "gb_min")}
        ></Image>
        </Link>
      </Flex>
      <IconMenuHam
        display="none"
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "iconMenuHam")}
      ></IconMenuHam>
      <Flex
        gap="4px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        onClick={() => {
          gBTalentOnClick();
        }}
        {...getOverrideProps(overrides, "Frame 13982")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="14.522727012634277px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="GB Talent"
          onClick={() => {
            gBTalentOnClick();
          }}
          {...getOverrideProps(overrides, "GB Talent")}
        ></Text>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "material-symbols:keyboard-return-rounded"
          )}
        >
          <Icon
            width="17.58px"
            height="11.16px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 17.5751953125,
              height: 11.1634521484375,
            }}
            paths={[
              {
                d: "M4.875 10.8885L0.275 6.2885C0.175 6.1885 0.104333 6.08017 0.063 5.9635C0.021 5.84683 0 5.72183 0 5.5885C0 5.45517 0.021 5.33017 0.063 5.2135C0.104333 5.09683 0.175 4.9885 0.275 4.8885L4.9 0.263502C5.08333 0.0801684 5.31233 -0.00749826 5.587 0.000501742C5.86233 0.00916841 6.09167 0.105168 6.275 0.288501C6.45833 0.471835 6.55 0.705168 6.55 0.988502C6.55 1.27183 6.45833 1.50517 6.275 1.6885L3.375 4.5885L15.575 4.5885L15.575 1.5885C15.575 1.30517 15.671 1.0675 15.863 0.875502C16.0543 0.684168 16.2917 0.588502 16.575 0.588502C16.8583 0.588502 17.0957 0.684168 17.287 0.875502C17.479 1.0675 17.575 1.30517 17.575 1.5885L17.575 5.5885C17.575 5.87183 17.479 6.10917 17.287 6.3005C17.0957 6.4925 16.8583 6.5885 16.575 6.5885L3.375 6.5885L6.3 9.5135C6.48333 9.69684 6.571 9.92583 6.563 10.2005C6.55433 10.4758 6.45833 10.7052 6.275 10.8885C6.09167 11.0718 5.85833 11.1635 5.575 11.1635C5.29167 11.1635 5.05833 11.0718 4.875 10.8885Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="26.71%"
            bottom="26.77%"
            left="14.27%"
            right="12.5%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
      </Flex>
    </Flex>
  );
}
