/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, HeadingProps, PasswordFieldProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { MenuTextEditorProps } from "./MenuTextEditor";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TextEditorOverridesProps = {
    TextEditor?: PrimitiveOverrideProps<FlexProps>;
    "Frame 467"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 471"?: PrimitiveOverrideProps<FlexProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 469"?: PrimitiveOverrideProps<FlexProps>;
    "menu-TextEditor"?: MenuTextEditorProps;
    "Frame 463"?: PrimitiveOverrideProps<FlexProps>;
    Button35595572?: PrimitiveOverrideProps<ButtonProps>;
    Button35595573?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type TextEditorProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TextEditorOverridesProps | undefined | null;
}>;
export default function TextEditor(props: TextEditorProps): React.ReactElement;
