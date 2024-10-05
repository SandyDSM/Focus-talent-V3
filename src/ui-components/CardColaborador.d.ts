/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { IconProfileProps } from "./IconProfile";
import { IconteamProps } from "./Iconteam";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardColaboradorOverridesProps = {
    CardColaborador?: PrimitiveOverrideProps<FlexProps>;
    FramePhoto?: PrimitiveOverrideProps<FlexProps>;
    profile?: PrimitiveOverrideProps<ImageProps>;
    FrameInfoIc?: PrimitiveOverrideProps<FlexProps>;
    FrameInfo?: PrimitiveOverrideProps<FlexProps>;
    FrameId?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Profile37474166"?: IconProfileProps;
    idEmploy?: PrimitiveOverrideProps<TextProps>;
    FrameName?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Profile37474169"?: IconProfileProps;
    NameCol?: PrimitiveOverrideProps<TextProps>;
    FrameLider?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Profile37474172"?: IconProfileProps;
    Job?: PrimitiveOverrideProps<TextProps>;
    FrameOrga?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Profile37474175"?: IconProfileProps;
    Organitation?: PrimitiveOverrideProps<TextProps>;
    "Icon-team"?: IconteamProps;
} & EscapeHatchProps;
export declare type CardColaboradorProps = React.PropsWithChildren<Partial<FlexProps> & {
    type?: "Default" | "More";
} & {
    overrides?: CardColaboradorOverridesProps | undefined | null;
}>;
export default function CardColaborador(props: CardColaboradorProps): React.ReactElement;
