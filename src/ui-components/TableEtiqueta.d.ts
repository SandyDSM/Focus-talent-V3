/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TableEtiquetaOverridesProps = {
    TableEtiqueta?: PrimitiveOverrideProps<FlexProps>;
    "Frame 458"?: PrimitiveOverrideProps<FlexProps>;
    "Group 13955"?: PrimitiveOverrideProps<FlexProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    Nombre35794394?: PrimitiveOverrideProps<TextProps>;
    Nombre35794395?: PrimitiveOverrideProps<TextProps>;
    Nombre35794396?: PrimitiveOverrideProps<TextProps>;
    Nombre35794397?: PrimitiveOverrideProps<TextProps>;
    Nombre35794398?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 474"?: PrimitiveOverrideProps<FlexProps>;
    TextField35794401?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35794402?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35794403?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35794404?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35794405?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35794406?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TableEtiquetaProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TableEtiquetaOverridesProps | undefined | null;
}>;
export default function TableEtiqueta(props: TableEtiquetaProps): React.ReactElement;
