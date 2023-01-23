/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconteamOverridesProps = {
    Iconteam?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type IconteamProps = React.PropsWithChildren<Partial<IconProps> & {
    state?: "Active" | "Default" | "Disabled";
} & {
    overrides?: IconteamOverridesProps | undefined | null;
}>;
export default function Iconteam(props: IconteamProps): React.ReactElement;
