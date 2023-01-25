/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, HeadingProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { IconProfileProps } from "./IconProfile";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PerformanceTestOverridesProps = {
    PerformanceTest?: PrimitiveOverrideProps<FlexProps>;
    "Frame 458"?: PrimitiveOverrideProps<FlexProps>;
    Users?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<ImageProps>;
    "Frame 467"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    nameColl?: PrimitiveOverrideProps<TextProps>;
    FrameDat?: PrimitiveOverrideProps<FlexProps>;
    "Frame 423"?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Profile38284846"?: IconProfileProps;
    Id?: PrimitiveOverrideProps<TextProps>;
    "Frame 425"?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Profile38284849"?: IconProfileProps;
    Job?: PrimitiveOverrideProps<TextProps>;
    FrameOrganitation?: PrimitiveOverrideProps<FlexProps>;
    "Icon-Profile38284852"?: IconProfileProps;
    Organitation?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    qOne?: PrimitiveOverrideProps<FlexProps>;
    questionOne38284684?: PrimitiveOverrideProps<TextProps>;
    answerQone38284685?: PrimitiveOverrideProps<TextProps>;
    qOneOne?: PrimitiveOverrideProps<FlexProps>;
    questionOne38284687?: PrimitiveOverrideProps<TextProps>;
    answerQone38284688?: PrimitiveOverrideProps<TextProps>;
    qTwo?: PrimitiveOverrideProps<FlexProps>;
    questionTwo38284690?: PrimitiveOverrideProps<TextProps>;
    answerTwo38284691?: PrimitiveOverrideProps<TextProps>;
    qTwoTwo?: PrimitiveOverrideProps<FlexProps>;
    questionTwo38284693?: PrimitiveOverrideProps<TextProps>;
    answerTwo38284694?: PrimitiveOverrideProps<TextProps>;
    qThree?: PrimitiveOverrideProps<FlexProps>;
    questionThree38284696?: PrimitiveOverrideProps<TextProps>;
    answerThree38284697?: PrimitiveOverrideProps<TextProps>;
    qThreeThree?: PrimitiveOverrideProps<FlexProps>;
    questionThree38284699?: PrimitiveOverrideProps<TextProps>;
    answerThree38284700?: PrimitiveOverrideProps<TextProps>;
    "Frame 13973"?: PrimitiveOverrideProps<FlexProps>;
    ButtonPDF?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PerformanceTestProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: PerformanceTestOverridesProps | undefined | null;
}>;
export default function PerformanceTest(props: PerformanceTestProps): React.ReactElement;
