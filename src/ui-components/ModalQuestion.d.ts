/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, HeadingProps } from "@aws-amplify/ui-react";
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
export declare type ModalQuestionOverridesProps = {
    ModalQuestion?: PrimitiveOverrideProps<FlexProps>;
    "Frame 472"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 463"?: PrimitiveOverrideProps<FlexProps>;
    Button35595832?: PrimitiveOverrideProps<ButtonProps>;
    Button35595831?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ModalQuestionProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "Alert" | "Info";
} & {
    overrides?: ModalQuestionOverridesProps | undefined | null;
}>;
export default function ModalQuestion(props: ModalQuestionProps): React.ReactElement;
