/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PageArrowOverridesProps = {
    PageArrow?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type PageArrowProps = React.PropsWithChildren<Partial<FlexProps> & {
    type?: "Back" | "Go";
} & {
    overrides?: PageArrowOverridesProps | undefined | null;
}>;
export default function PageArrow(props: PageArrowProps): React.ReactElement;
