/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { TableRowsDivisonProps } from "./TableRowsDivison";
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
export declare type TableDivisionOverridesProps = {
    TableDivision?: PrimitiveOverrideProps<FlexProps>;
    "Frame 458"?: PrimitiveOverrideProps<FlexProps>;
    "Group 13955"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 460"?: PrimitiveOverrideProps<FlexProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    Nombre?: PrimitiveOverrideProps<TextProps>;
    Monto?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 459"?: PrimitiveOverrideProps<FlexProps>;
    TableRowsDivison34813062?: TableRowsDivisonProps;
    TableRowsDivison34813103?: TableRowsDivisonProps;
    TableRowsDivison34813115?: TableRowsDivisonProps;
} & EscapeHatchProps;
export declare type TableDivisionProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TableDivisionOverridesProps | undefined | null;
}>;
export default function TableDivision(props: TableDivisionProps): React.ReactElement;
