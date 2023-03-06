/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { IconMenuHamProps } from "./IconMenuHam";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderOverridesProps = {
    Header?: PrimitiveOverrideProps<FlexProps>;
    FrameLogo?: PrimitiveOverrideProps<FlexProps>;
    gb_min?: PrimitiveOverrideProps<ImageProps>;
    iconMenuHam?: IconMenuHamProps;
    "Frame 13982"?: PrimitiveOverrideProps<FlexProps>;
    "GB Talent"?: PrimitiveOverrideProps<TextProps>;
    "material-symbols:keyboard-return-rounded"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type HeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    type?: "menu" | "noMenu";
} & {
    overrides?: HeaderOverridesProps | undefined | null;
}>;
export default function Header(props: HeaderProps): React.ReactElement;
