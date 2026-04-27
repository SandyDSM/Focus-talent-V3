/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconActionsProps } from "./IconActions";
import { IconAddsecProps } from "./IconAddsec";
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
export declare type TableRowsDivisonOverridesProps = {
    TableRowsDivison?: PrimitiveOverrideProps<FlexProps>;
    "Frame 454"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 456"?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Actions"?: IconActionsProps;
    "Frame 455"?: PrimitiveOverrideProps<FlexProps>;
    "icon_Add-sec"?: IconAddsecProps;
    "BIM CEDIS METROPOLITANO"?: PrimitiveOverrideProps<TextProps>;
    las?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type TableRowsDivisonProps = React.PropsWithChildren<Partial<FlexProps> & {
    type?: "add" | "less";
} & {
    overrides?: TableRowsDivisonOverridesProps | undefined | null;
}>;
export default function TableRowsDivison(props: TableRowsDivisonProps): React.ReactElement;
