/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconsTextEditorProps } from "./IconsTextEditor";
import { FlexProps, SelectFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenuTextEditorOverridesProps = {
    MenuTextEditor?: PrimitiveOverrideProps<FlexProps>;
    "Icons-TextEditor35123554"?: IconsTextEditorProps;
    "Icons-TextEditor35123556"?: IconsTextEditorProps;
    SelectField35123558?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField35593322?: PrimitiveOverrideProps<SelectFieldProps>;
    "Icons-TextEditor35123575"?: IconsTextEditorProps;
    "Icons-TextEditor35123577"?: IconsTextEditorProps;
    "Icons-TextEditor35123579"?: IconsTextEditorProps;
    "Icons-TextEditor35123581"?: IconsTextEditorProps;
    "Icons-TextEditor35123583"?: IconsTextEditorProps;
    "Icons-TextEditor35123585"?: IconsTextEditorProps;
    "Icons-TextEditor35123587"?: IconsTextEditorProps;
    "Icons-TextEditor35123589"?: IconsTextEditorProps;
    "Icons-TextEditor35123591"?: IconsTextEditorProps;
    "Icons-TextEditor35123593"?: IconsTextEditorProps;
    "Icons-TextEditor35123595"?: IconsTextEditorProps;
    "Icons-TextEditor35123597"?: IconsTextEditorProps;
    SelectField35123599?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type MenuTextEditorProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MenuTextEditorOverridesProps | undefined | null;
}>;
export default function MenuTextEditor(props: MenuTextEditorProps): React.ReactElement;
