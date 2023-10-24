/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoWithTextProps } from "./LogoWithText";
import { ButtonProps, FlexProps, SearchFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeaderOverridesProps = {
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    LogoWithText?: LogoWithTextProps;
    SiteLinks?: PrimitiveOverrideProps<FlexProps>;
    ArticlesButton?: PrimitiveOverrideProps<ButtonProps>;
    PublishButton?: PrimitiveOverrideProps<ButtonProps>;
    Actions?: PrimitiveOverrideProps<FlexProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    User?: PrimitiveOverrideProps<FlexProps>;
    LogoutButton?: PrimitiveOverrideProps<ButtonProps>;
    Guest?: PrimitiveOverrideProps<FlexProps>;
    LoginButton?: PrimitiveOverrideProps<ButtonProps>;
    SignupButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeaderOverridesProps | undefined | null;
}>;
export default function NavBarHeader(props: NavBarHeaderProps): React.ReactElement;
