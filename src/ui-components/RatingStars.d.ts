/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StarProps } from "./Star";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RatingStarsOverridesProps = {
    RatingStars?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13976"?: PrimitiveOverrideProps<FlexProps>;
    Star39504871?: StarProps;
    Star39504872?: StarProps;
    Star39504873?: StarProps;
    Star39504874?: StarProps;
    Star39504875?: StarProps;
} & EscapeHatchProps;
export declare type RatingStarsProps = React.PropsWithChildren<Partial<FlexProps> & {
    rating?: "0" | "1" | "2" | "3" | "4" | "5";
} & {
    overrides?: RatingStarsOverridesProps | undefined | null;
}>;
export default function RatingStars(props: RatingStarsProps): React.ReactElement;
