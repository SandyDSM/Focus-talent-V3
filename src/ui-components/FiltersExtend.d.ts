/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { ListProps } from "./List";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FiltersExtendOverridesProps = {
    FiltersExtend?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    FILTROS?: PrimitiveOverrideProps<TextProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    List34663366?: ListProps;
    "Frame 43834663424"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField34663393?: PrimitiveOverrideProps<CheckboxFieldProps>;
    CheckboxField34663408?: PrimitiveOverrideProps<CheckboxFieldProps>;
    CheckboxField34663416?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    List35413245?: ListProps;
    "Frame 43835413246"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField35413247?: PrimitiveOverrideProps<CheckboxFieldProps>;
    CheckboxField35413248?: PrimitiveOverrideProps<CheckboxFieldProps>;
    CheckboxField35413249?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type FiltersExtendProps = React.PropsWithChildren<Partial<FlexProps> & {
    selection?: "Variant2";
} & {
    overrides?: FiltersExtendOverridesProps | undefined | null;
}>;
export default function FiltersExtend(props: FiltersExtendProps): React.ReactElement;
