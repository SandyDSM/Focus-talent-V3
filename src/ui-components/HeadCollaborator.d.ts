/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { IconProfileProps } from "./IconProfile";
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
export declare type HeadCollaboratorOverridesProps = {
    HeadCollaborator?: PrimitiveOverrideProps<FlexProps>;
    "Frame 457"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 452"?: PrimitiveOverrideProps<FlexProps>;
    txt?: PrimitiveOverrideProps<TextProps>;
    NameColl?: PrimitiveOverrideProps<TextProps>;
    "Frame 453"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 423"?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Profile38284537"?: IconProfileProps;
    Id?: PrimitiveOverrideProps<TextProps>;
    "Frame 425"?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Profile38284540"?: IconProfileProps;
    Job?: PrimitiveOverrideProps<TextProps>;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Profile38284543"?: IconProfileProps;
    Organitation?: PrimitiveOverrideProps<TextProps>;
    ButtonPDF?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HeadCollaboratorProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: HeadCollaboratorOverridesProps | undefined | null;
}>;
export default function HeadCollaborator(props: HeadCollaboratorProps): React.ReactElement;
