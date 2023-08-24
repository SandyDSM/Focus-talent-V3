/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconidiomOverridesProps = {
    Iconidiom?: PrimitiveOverrideProps<FlexProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type IconidiomProps = React.PropsWithChildren<Partial<FlexProps> & {
    language?: "eng" | "esp" | "fra" | "por" | "zho";
} & {
    overrides?: IconidiomOverridesProps | undefined | null;
}>;
export default function Iconidiom(props: IconidiomProps): React.ReactElement;
