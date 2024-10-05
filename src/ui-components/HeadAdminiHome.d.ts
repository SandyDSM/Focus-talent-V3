/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { IlustrationProps } from "./Ilustration";
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
export declare type HeadAdminiHomeOverridesProps = {
    HeadAdminiHome?: PrimitiveOverrideProps<FlexProps>;
    "Frame 483"?: PrimitiveOverrideProps<FlexProps>;
    ImgCol?: PrimitiveOverrideProps<ImageProps>;
    FrameDates?: PrimitiveOverrideProps<FlexProps>;
    Welcome?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Job?: PrimitiveOverrideProps<TextProps>;
    "Frame 482"?: PrimitiveOverrideProps<FlexProps>;
    ilustration?: IlustrationProps;
} & EscapeHatchProps;
export declare type HeadAdminiHomeProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: HeadAdminiHomeOverridesProps | undefined | null;
}>;
export default function HeadAdminiHome(props: HeadAdminiHomeProps): React.ReactElement;
