/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, HeadingProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubHeaderOverridesProps = {
    SubHeader?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
} & EscapeHatchProps;
export declare type SubHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SubHeaderOverridesProps | undefined | null;
}>;
export default function SubHeader(props: SubHeaderProps): React.ReactElement;
