/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, PasswordFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LoginOverridesProps = {
    Login?: PrimitiveOverrideProps<FlexProps>;
    FrameImage?: PrimitiveOverrideProps<FlexProps>;
    logoImg?: PrimitiveOverrideProps<ImageProps>;
    FrameInputs?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    FrameButtons?: PrimitiveOverrideProps<FlexProps>;
    ButtonSingIn?: PrimitiveOverrideProps<ButtonProps>;
    ButtonSingAzure?: PrimitiveOverrideProps<ButtonProps>;
    ButtonForgot?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LoginProps = React.PropsWithChildren<Partial<FlexProps> & {
    frameInputs?: React.ReactNode;
} & {
    overrides?: LoginOverridesProps | undefined | null;
}>;
export default function Login(props: LoginProps): React.ReactElement;
