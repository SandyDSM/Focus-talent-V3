/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { RowsNotifProps } from "./RowsNotif";
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
export declare type TableNotificationOverridesProps = {
    TableNotification?: PrimitiveOverrideProps<FlexProps>;
    "Frame 458"?: PrimitiveOverrideProps<FlexProps>;
    "Group 13955"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 460"?: PrimitiveOverrideProps<FlexProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    Nombre?: PrimitiveOverrideProps<TextProps>;
    "Frame 464"?: PrimitiveOverrideProps<FlexProps>;
    Monto35103238?: PrimitiveOverrideProps<TextProps>;
    Monto35103272?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    rowsNotif35103191?: RowsNotifProps;
    rowsNotif35103205?: RowsNotifProps;
    rowsNotif35103219?: RowsNotifProps;
} & EscapeHatchProps;
export declare type TableNotificationProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TableNotificationOverridesProps | undefined | null;
}>;
export default function TableNotification(props: TableNotificationProps): React.ReactElement;
