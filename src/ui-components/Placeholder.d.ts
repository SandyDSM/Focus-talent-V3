/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, HeadingProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PlaceholderOverridesProps = {
    Placeholder?: PrimitiveOverrideProps<FlexProps>;
    "Frame 473"?: PrimitiveOverrideProps<FlexProps>;
    "Group 17284"?: PrimitiveOverrideProps<FlexProps>;
    "Background Shape"?: PrimitiveOverrideProps<IconProps>;
    Container35603782?: PrimitiveOverrideProps<ViewProps>;
    Label35603784?: PrimitiveOverrideProps<ViewProps>;
    Label35603785?: PrimitiveOverrideProps<ViewProps>;
    Check35603786?: PrimitiveOverrideProps<ViewProps>;
    Background35603787?: PrimitiveOverrideProps<IconProps>;
    Indicator35603788?: PrimitiveOverrideProps<IconProps>;
    Container35603790?: PrimitiveOverrideProps<ViewProps>;
    Label35603792?: PrimitiveOverrideProps<ViewProps>;
    Label35603793?: PrimitiveOverrideProps<ViewProps>;
    Check35603794?: PrimitiveOverrideProps<ViewProps>;
    Background35603795?: PrimitiveOverrideProps<IconProps>;
    Indicator35603796?: PrimitiveOverrideProps<IconProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
} & EscapeHatchProps;
export declare type PlaceholderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PlaceholderOverridesProps | undefined | null;
}>;
export default function Placeholder(props: PlaceholderProps): React.ReactElement;
