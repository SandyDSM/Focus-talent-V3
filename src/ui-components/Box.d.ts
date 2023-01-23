/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, HeadingProps, PlaceholderProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BoxOverridesProps = {
    Box?: PrimitiveOverrideProps<FlexProps>;
    "Frame 467"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Placeholder?: PrimitiveOverrideProps<PlaceholderProps>;
} & EscapeHatchProps;
export declare type BoxProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BoxOverridesProps | undefined | null;
}>;
export default function Box(props: BoxProps): React.ReactElement;
