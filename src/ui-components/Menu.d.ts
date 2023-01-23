/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenuOverridesProps = {
    Menu?: PrimitiveOverrideProps<FlexProps>;
    "Frame 415"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 484"?: PrimitiveOverrideProps<FlexProps>;
    "image 3"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 32137744291"?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    puesto?: PrimitiveOverrideProps<TextProps>;
    "ep:close-bold"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Frame 32137744296"?: PrimitiveOverrideProps<FlexProps>;
    FrameTextos?: PrimitiveOverrideProps<FlexProps>;
    FraHome?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Subtemas?: PrimitiveOverrideProps<FlexProps>;
    FraTest?: PrimitiveOverrideProps<FlexProps>;
    Test?: PrimitiveOverrideProps<TextProps>;
    FraTags?: PrimitiveOverrideProps<FlexProps>;
    Tags?: PrimitiveOverrideProps<TextProps>;
    FraNotif?: PrimitiveOverrideProps<FlexProps>;
    Notif?: PrimitiveOverrideProps<TextProps>;
    FraTeam?: PrimitiveOverrideProps<FlexProps>;
    Team?: PrimitiveOverrideProps<TextProps>;
    "Frame 451"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    Cerrar?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MenuOverridesProps | undefined | null;
}>;
export default function Menu(props: MenuProps): React.ReactElement;
