/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconidiomProps } from "./Iconidiom";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { IconActionsProps } from "./IconActions";
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
export declare type RowsNotifOverridesProps = {
    RowsNotif?: PrimitiveOverrideProps<FlexProps>;
    "Frame 454"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 466"?: PrimitiveOverrideProps<FlexProps>;
    "icon-idiom"?: IconidiomProps;
    "Notificaci\u00F3n Talent Lorem ipsum dolor sit amet consectetur"?: PrimitiveOverrideProps<TextProps>;
    "Frame 465"?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Actions35103185"?: IconActionsProps;
    "Icon-Actions35103135"?: IconActionsProps;
    Divider?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type RowsNotifProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RowsNotifOverridesProps | undefined | null;
}>;
export default function RowsNotif(props: RowsNotifProps): React.ReactElement;
