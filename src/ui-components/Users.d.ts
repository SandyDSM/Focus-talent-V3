/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersOverridesProps = {
    Users?: PrimitiveOverrideProps<FlexProps>;
    "image 4"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type UsersProps = React.PropsWithChildren<Partial<FlexProps> & {
    type?: "h1" | "h10" | "h11" | "h12" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8" | "h9" | "m1" | "m2" | "m3" | "m4" | "m5" | "m6" | "m7" | "m8";
} & {
    overrides?: UsersOverridesProps | undefined | null;
}>;
export default function Users(props: UsersProps): React.ReactElement;
