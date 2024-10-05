/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconNotificationProps } from "./IconNotification";
import { DividerProps, FlexProps, SwitchFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type TablerowsOverridesProps = {
    Tablerows?: PrimitiveOverrideProps<FlexProps>;
    "Frame 454"?: PrimitiveOverrideProps<FlexProps>;
    "icon-Notification"?: IconNotificationProps;
    FrameSwitch?: PrimitiveOverrideProps<FlexProps>;
    SwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    Year?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type TablerowsProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "active" | "off";
} & {
    overrides?: TablerowsOverridesProps | undefined | null;
}>;
export default function Tablerows(props: TablerowsProps): React.ReactElement;
