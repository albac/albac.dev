/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostsCreateFormInputValues = {
    title?: string;
    content?: string;
    summary?: string;
    state?: boolean;
};
export declare type PostsCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    state?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostsCreateFormOverridesProps = {
    PostsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PostsCreateFormProps = React.PropsWithChildren<{
    overrides?: PostsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PostsCreateFormInputValues) => PostsCreateFormInputValues;
    onSuccess?: (fields: PostsCreateFormInputValues) => void;
    onError?: (fields: PostsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PostsCreateFormInputValues) => PostsCreateFormInputValues;
    onValidate?: PostsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PostsCreateForm(props: PostsCreateFormProps): React.ReactElement;
