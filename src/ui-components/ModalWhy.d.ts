/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, HeadingProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ModalWhyOverridesProps = {
    ModalWhy?: PrimitiveOverrideProps<FlexProps>;
    "Frame 457"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 467"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    "Frame 463"?: PrimitiveOverrideProps<FlexProps>;
    Button35595152?: PrimitiveOverrideProps<ButtonProps>;
    Button35595153?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ModalWhyProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ModalWhyOverridesProps | undefined | null;
}>;
export default function ModalWhy(props: ModalWhyProps): React.ReactElement;
