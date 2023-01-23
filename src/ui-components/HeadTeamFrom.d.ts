/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, SearchFieldProps, TextProps } from "@aws-amplify/ui-react";
import { IconteamProps } from "./Iconteam";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeadTeamFromOverridesProps = {
    HeadTeamFrom?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13975"?: PrimitiveOverrideProps<FlexProps>;
    "Icon-team"?: IconteamProps;
    txt?: PrimitiveOverrideProps<TextProps>;
    nameColl?: PrimitiveOverrideProps<TextProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
} & EscapeHatchProps;
export declare type HeadTeamFromProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: HeadTeamFromOverridesProps | undefined | null;
}>;
export default function HeadTeamFrom(props: HeadTeamFromProps): React.ReactElement;
