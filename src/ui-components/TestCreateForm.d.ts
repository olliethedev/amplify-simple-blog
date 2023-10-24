/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestCreateFormInputValues = {
    name?: string;
};
export declare type TestCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestCreateFormOverridesProps = {
    TestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestCreateFormProps = React.PropsWithChildren<{
    overrides?: TestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestCreateFormInputValues) => TestCreateFormInputValues;
    onSuccess?: (fields: TestCreateFormInputValues) => void;
    onError?: (fields: TestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestCreateFormInputValues) => TestCreateFormInputValues;
    onValidate?: TestCreateFormValidationValues;
} & React.CSSProperties>;
export default function TestCreateForm(props: TestCreateFormProps): React.ReactElement;
