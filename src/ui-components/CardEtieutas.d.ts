/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, HeadingProps } from "@aws-amplify/ui-react";
import { TableEtiquetaProps } from "./TableEtiqueta";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardEtieutasOverridesProps = {
    CardEtieutas?: PrimitiveOverrideProps<FlexProps>;
    "Frame 467"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    TableEtiqueta?: TableEtiquetaProps;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CardEtieutasProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CardEtieutasOverridesProps | undefined | null;
}>;
export default function CardEtieutas(props: CardEtieutasProps): React.ReactElement;
