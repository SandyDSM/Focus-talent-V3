/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PiramideOverridesProps = {
    Piramide?: PrimitiveOverrideProps<ViewProps>;
    Vector45102679?: PrimitiveOverrideProps<IconProps>;
    Vector45192262?: PrimitiveOverrideProps<IconProps>;
    Vector45192088?: PrimitiveOverrideProps<IconProps>;
    Vector45102681?: PrimitiveOverrideProps<IconProps>;
    Group45102682?: PrimitiveOverrideProps<ViewProps>;
    Vector45192363?: PrimitiveOverrideProps<IconProps>;
    Vector45192364?: PrimitiveOverrideProps<IconProps>;
    Group45102685?: PrimitiveOverrideProps<ViewProps>;
    Vector45192365?: PrimitiveOverrideProps<IconProps>;
    Vector45192366?: PrimitiveOverrideProps<IconProps>;
    Group45102688?: PrimitiveOverrideProps<ViewProps>;
    Vector45192375?: PrimitiveOverrideProps<IconProps>;
    Vector45192376?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type PiramideProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "E-0" | "E-ET" | "E-HP" | "E-PT" | "S-0" | "S-AP" | "S-TE" | "S-TP";
} & {
    overrides?: PiramideOverridesProps | undefined | null;
}>;
export default function Piramide(props: PiramideProps): React.ReactElement;
