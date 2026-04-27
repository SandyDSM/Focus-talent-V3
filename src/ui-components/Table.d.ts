/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { TablerowsProps } from "./Tablerows";
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
export declare type TableOverridesProps = {
    Table?: PrimitiveOverrideProps<FlexProps>;
    "Frame 461"?: PrimitiveOverrideProps<FlexProps>;
    "Group 13955"?: PrimitiveOverrideProps<FlexProps>;
    Status34793227?: PrimitiveOverrideProps<TextProps>;
    Status34993234?: PrimitiveOverrideProps<TextProps>;
    Nombre?: PrimitiveOverrideProps<TextProps>;
    Monto?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Tablerows34793281?: TablerowsProps;
    Tablerows35003016?: TablerowsProps;
    Tablerows35003030?: TablerowsProps;
} & EscapeHatchProps;
export declare type TableProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TableOverridesProps | undefined | null;
}>;
export default function Table(props: TableProps): React.ReactElement;
