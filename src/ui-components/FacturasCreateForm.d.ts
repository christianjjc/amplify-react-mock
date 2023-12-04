/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FacturasCreateFormInputValues = {
    numero?: string;
    total?: number;
    detalle_array?: string[];
    detalle_normal?: string;
};
export declare type FacturasCreateFormValidationValues = {
    numero?: ValidationFunction<string>;
    total?: ValidationFunction<number>;
    detalle_array?: ValidationFunction<string>;
    detalle_normal?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FacturasCreateFormOverridesProps = {
    FacturasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
    detalle_array?: PrimitiveOverrideProps<TextFieldProps>;
    detalle_normal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FacturasCreateFormProps = React.PropsWithChildren<{
    overrides?: FacturasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FacturasCreateFormInputValues) => FacturasCreateFormInputValues;
    onSuccess?: (fields: FacturasCreateFormInputValues) => void;
    onError?: (fields: FacturasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FacturasCreateFormInputValues) => FacturasCreateFormInputValues;
    onValidate?: FacturasCreateFormValidationValues;
} & React.CSSProperties>;
export default function FacturasCreateForm(props: FacturasCreateFormProps): React.ReactElement;
