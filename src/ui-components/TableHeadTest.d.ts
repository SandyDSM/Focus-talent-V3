/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type TableHeadTestOverridesProps = {
    TableHeadTest?: PrimitiveOverrideProps<FlexProps>;
    "Group 13955"?: PrimitiveOverrideProps<FlexProps>;
    Status37904371?: PrimitiveOverrideProps<TextProps>;
    Status37904372?: PrimitiveOverrideProps<TextProps>;
    Nombre?: PrimitiveOverrideProps<TextProps>;
    Monto?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type TableHeadTestProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TableHeadTestOverridesProps | undefined | null;
}>;
export default function TableHeadTest(props: TableHeadTestProps): React.ReactElement;
