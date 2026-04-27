/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Page2ArrowProps } from "./Page2Arrow";
import { PageArrowProps } from "./PageArrow";
import { PageProps } from "./Page";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type ContbarraOverridesProps = {
    Contbarra?: PrimitiveOverrideProps<FlexProps>;
    Page2Arrow34652790?: Page2ArrowProps;
    PageArrow34662792?: PageArrowProps;
    Page34662797?: PageProps;
    Page34662799?: PageProps;
    Page34662801?: PageProps;
    PageArrow34662803?: PageArrowProps;
    Page2Arrow34662805?: Page2ArrowProps;
} & EscapeHatchProps;
export declare type ContbarraProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContbarraOverridesProps | undefined | null;
}>;
export default function Contbarra(props: ContbarraProps): React.ReactElement;
