/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconActionsProps } from "./IconActions";
import { CheckboxFieldProps, DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RowsRemoveOverridesProps = {
    RowsRemove?: PrimitiveOverrideProps<FlexProps>;
    "Frame 454"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 456"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 475"?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Actions"?: IconActionsProps;
    "BIM CEDIS METROPOLITANO"?: PrimitiveOverrideProps<TextProps>;
    bca?: PrimitiveOverrideProps<TextProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type RowsRemoveProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RowsRemoveOverridesProps | undefined | null;
}>;
export default function RowsRemove(props: RowsRemoveProps): React.ReactElement;
