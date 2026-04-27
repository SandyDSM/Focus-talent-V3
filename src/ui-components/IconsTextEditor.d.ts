/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps } from "@aws-amplify/ui-react";
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
export declare type IconsTextEditorOverridesProps = {
    IconsTextEditor?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type IconsTextEditorProps = React.PropsWithChildren<Partial<IconProps> & {
    name?: "align-center" | "align-justify" | "align-left" | "align-right" | "bulleted" | "ic_image" | "ic_link" | "ic_quotes" | "ic_redo" | "ic_underline" | "ic_undo" | "italic" | "list-numbered" | "strikethrough" | "text-bold";
} & {
    overrides?: IconsTextEditorOverridesProps | undefined | null;
}>;
export default function IconsTextEditor(props: IconsTextEditorProps): React.ReactElement;
