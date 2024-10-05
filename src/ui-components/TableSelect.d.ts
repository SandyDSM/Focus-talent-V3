/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { RowsRemoveProps } from "./RowsRemove";
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
export declare type TableSelectOverridesProps = {
    TableSelect?: PrimitiveOverrideProps<FlexProps>;
    "Frame 458"?: PrimitiveOverrideProps<FlexProps>;
    "Group 13955"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 462"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 476"?: PrimitiveOverrideProps<FlexProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    Nombre?: PrimitiveOverrideProps<TextProps>;
    Monto35003235?: PrimitiveOverrideProps<TextProps>;
    Monto35003299?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 459"?: PrimitiveOverrideProps<FlexProps>;
    rowsRemove35003238?: RowsRemoveProps;
    rowsRemove35003239?: RowsRemoveProps;
    rowsRemove35003240?: RowsRemoveProps;
    rowsRemove35003536?: RowsRemoveProps;
    rowsRemove35003555?: RowsRemoveProps;
} & EscapeHatchProps;
export declare type TableSelectProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TableSelectOverridesProps | undefined | null;
}>;
export default function TableSelect(props: TableSelectProps): React.ReactElement;
