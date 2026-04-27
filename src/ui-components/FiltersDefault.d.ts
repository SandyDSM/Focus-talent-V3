/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { ListProps } from "./List";
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
export declare type FiltersDefaultOverridesProps = {
    FiltersDefault?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    FILTROS?: PrimitiveOverrideProps<TextProps>;
    List34663348?: ListProps;
    List34663355?: ListProps;
} & EscapeHatchProps;
export declare type FiltersDefaultProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FiltersDefaultOverridesProps | undefined | null;
}>;
export default function FiltersDefault(props: FiltersDefaultProps): React.ReactElement;
