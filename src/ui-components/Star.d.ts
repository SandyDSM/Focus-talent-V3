/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StarOverridesProps = {
    Star?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type StarProps = React.PropsWithChildren<Partial<IconProps> & {
    type?: "active" | "default";
} & {
    overrides?: StarOverridesProps | undefined | null;
}>;
export default function Star(props: StarProps): React.ReactElement;
