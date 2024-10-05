/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { IconActionsProps } from "./IconActions";
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
export declare type RowsEtiquetasOverridesProps = {
    RowsEtiquetas?: PrimitiveOverrideProps<FlexProps>;
    "Frame 454"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 475"?: PrimitiveOverrideProps<FlexProps>;
    "Evaluaci\u00F3n35794767"?: PrimitiveOverrideProps<TextProps>;
    "Evaluaci\u00F3n35794768"?: PrimitiveOverrideProps<TextProps>;
    Test?: PrimitiveOverrideProps<TextProps>;
    "\u00C9valuation"?: PrimitiveOverrideProps<TextProps>;
    "Avalia\u00E7\u00E3o"?: PrimitiveOverrideProps<TextProps>;
    "\u8A55\u4F30"?: PrimitiveOverrideProps<TextProps>;
    "Frame 465"?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Actions35794774"?: IconActionsProps;
    "Icon-Actions35794775"?: IconActionsProps;
    Divider?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type RowsEtiquetasProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RowsEtiquetasOverridesProps | undefined | null;
}>;
export default function RowsEtiquetas(props: RowsEtiquetasProps): React.ReactElement;
