/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps } from "@aws-amplify/ui-react";
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
export declare type Page2ArrowOverridesProps = {
    Page2Arrow?: PrimitiveOverrideProps<FlexProps>;
    Vector35593185?: PrimitiveOverrideProps<IconProps>;
    Vector35593198?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Page2ArrowProps = React.PropsWithChildren<Partial<FlexProps> & {
    type?: "2Back" | "2Go";
} & {
    overrides?: Page2ArrowOverridesProps | undefined | null;
}>;
export default function Page2Arrow(props: Page2ArrowProps): React.ReactElement;
