/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { Page2ArrowProps } from "./Page2Arrow";
import { PageArrowProps } from "./PageArrow";
import { PageProps } from "./Page";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CountSelectOverridesProps = {
    CountSelect?: PrimitiveOverrideProps<FlexProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    "Cont-barra"?: PrimitiveOverrideProps<FlexProps>;
    Page2Arrow38334443?: Page2ArrowProps;
    PageArrow38334444?: PageArrowProps;
    Page38334445?: PageProps;
    Page38334446?: PageProps;
    Page38334447?: PageProps;
    PageArrow38334448?: PageArrowProps;
    Page2Arrow38334449?: Page2ArrowProps;
} & EscapeHatchProps;
export declare type CountSelectProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CountSelectOverridesProps | undefined | null;
}>;
export default function CountSelect(props: CountSelectProps): React.ReactElement;
