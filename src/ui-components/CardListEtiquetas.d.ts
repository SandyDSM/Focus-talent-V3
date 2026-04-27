/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, HeadingProps } from "@aws-amplify/ui-react";
import { TableEtiquetasProps } from "./TableEtiquetas";
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
export declare type CardListEtiquetasOverridesProps = {
    CardListEtiquetas?: PrimitiveOverrideProps<FlexProps>;
    "Frame 467"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    TableEtiquetas?: TableEtiquetasProps;
} & EscapeHatchProps;
export declare type CardListEtiquetasProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CardListEtiquetasOverridesProps | undefined | null;
}>;
export default function CardListEtiquetas(props: CardListEtiquetasProps): React.ReactElement;
