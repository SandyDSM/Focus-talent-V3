/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, HeadingProps, TextProps } from "@aws-amplify/ui-react";
import { TableSelectProps } from "./TableSelect";
import { Page2ArrowProps } from "./Page2Arrow";
import { PageArrowProps } from "./PageArrow";
import { PageProps } from "./Page";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ModlConfirmEstructuraOverridesProps = {
    ModlConfirmEstructura?: PrimitiveOverrideProps<FlexProps>;
    "Frame 457"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Se enviar\u00E1n las notificaciones a las notificaciones a las siguientes estructuras"?: PrimitiveOverrideProps<TextProps>;
    TableSelect?: TableSelectProps;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    Page2Arrow35594746?: Page2ArrowProps;
    PageArrow35594747?: PageArrowProps;
    Page35594748?: PageProps;
    Page35594749?: PageProps;
    Page35594750?: PageProps;
    PageArrow35594751?: PageArrowProps;
    Page2Arrow35594752?: Page2ArrowProps;
    "Frame 463"?: PrimitiveOverrideProps<FlexProps>;
    Button35594754?: PrimitiveOverrideProps<ButtonProps>;
    Button35594755?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ModlConfirmEstructuraProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ModlConfirmEstructuraOverridesProps | undefined | null;
}>;
export default function ModlConfirmEstructura(props: ModlConfirmEstructuraProps): React.ReactElement;
