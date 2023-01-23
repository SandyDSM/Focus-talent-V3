/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { RowsEtiquetasProps } from "./RowsEtiquetas";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TableEtiquetasOverridesProps = {
    TableEtiquetas?: PrimitiveOverrideProps<FlexProps>;
    "Frame 458"?: PrimitiveOverrideProps<FlexProps>;
    "Group 1395535794641"?: PrimitiveOverrideProps<FlexProps>;
    "Group 1395535794642"?: PrimitiveOverrideProps<FlexProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    Nombre35794644?: PrimitiveOverrideProps<TextProps>;
    "Frame 477"?: PrimitiveOverrideProps<FlexProps>;
    Nombre35794645?: PrimitiveOverrideProps<TextProps>;
    Nombre35794646?: PrimitiveOverrideProps<TextProps>;
    Nombre35794647?: PrimitiveOverrideProps<TextProps>;
    Nombre35794648?: PrimitiveOverrideProps<TextProps>;
    "Frame 464"?: PrimitiveOverrideProps<FlexProps>;
    Monto35794650?: PrimitiveOverrideProps<TextProps>;
    Monto35794651?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    rowsEtiquetas35794801?: RowsEtiquetasProps;
    rowsEtiquetas35794819?: RowsEtiquetasProps;
    rowsEtiquetas35794837?: RowsEtiquetasProps;
    rowsEtiquetas35794855?: RowsEtiquetasProps;
    rowsEtiquetas35794873?: RowsEtiquetasProps;
} & EscapeHatchProps;
export declare type TableEtiquetasProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TableEtiquetasOverridesProps | undefined | null;
}>;
export default function TableEtiquetas(props: TableEtiquetasProps): React.ReactElement;
