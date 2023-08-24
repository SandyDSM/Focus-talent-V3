/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { LoginProps } from "./Login";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginPageOverridesProps = {
    LoginPage?: PrimitiveOverrideProps<FlexProps>;
    "Frame 422"?: PrimitiveOverrideProps<FlexProps>;
    "Group 28"?: PrimitiveOverrideProps<FlexProps>;
    "image 2"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 481"?: PrimitiveOverrideProps<FlexProps>;
    Login?: LoginProps;
} & EscapeHatchProps;
export declare type LoginPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LoginPageOverridesProps | undefined | null;
}>;
export default function LoginPage(props: LoginPageProps): React.ReactElement;
