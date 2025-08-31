"use client";

import React from "react";
import { Input, InputProps } from "./input";
import { Textarea, TextareaProps } from "./textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./select";
import { cn } from "@/lib/utils/cn";
import { Label } from "./label";

export type InputFieldType =
  | "text"
  | "email"
  | "tel"
  | "password"
  | "number"
  | "url"
  | "date"
  | "time"
  | "datetime-local"
  | "search"
  | "color";

export type FormFieldType =
  | InputFieldType
  | "textarea"
  | "select"
  | "checkbox"
  | "radio";

export interface BaseFormFieldProps {
  id: string;
  name?: string;
  label?: string | React.ReactNode;
  placeholder?: string;
  description?: string | React.ReactNode;
  error?: string | React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  descriptionClassName?: string;
  fieldClassName?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  orientation?: "vertical" | "horizontal";
  hideLabel?: boolean;
  variant?: "default" | "filled" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export interface FormFieldProps extends BaseFormFieldProps {
  fieldType: FormFieldType;
  options?: SelectOption[];
  inputProps?: Partial<InputProps>;
  textareaProps?: Partial<TextareaProps>;
  selectProps?: Partial<SelectProps>;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

const FormField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>((props, ref) => {
  const {
    fieldType,
    id,
    name = id,
    label,
    placeholder,
    description,
    error,
    required = false,
    disabled = false,
    readOnly = false,
    wrapperClassName = "",
    labelClassName = "",
    errorClassName = "",
    descriptionClassName = "",
    fieldClassName = "",
    prefix,
    suffix,
    options = [],
    orientation = "vertical",
    hideLabel = false,
    inputProps = {},
    textareaProps = {},
    selectProps = {},
    size = "md", // Default size added
    ...rest
  } = props; // Removed 'className' and 'variant'

  // Common props for all field types
  const commonProps = {
    id,
    name,
    placeholder,
    disabled,
    readOnly,
    required,
    "aria-invalid": !!error,
    "aria-describedby": description ? `${id}-description` : undefined,
    className: cn(
      "w-full",
      {
        "border-destructive focus:ring-destructive": error,
        "pl-8": prefix,
        "pr-8": suffix,
        "text-sm py-1.5": size === "sm",
        "text-base py-2": size === "md",
        "text-lg py-2.5": size === "lg",
      },
      fieldClassName
    ),
    ...rest,
  };

  const renderField = () => {
    switch (fieldType) {
      case "textarea":
        return (
          <Textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            {...commonProps}
            {...textareaProps}
          />
        );
      case "select":
        return (
          <Select
            {...commonProps}
            {...selectProps}
            onValueChange={(value) => {
              if (selectProps.onValueChange) {
                selectProps.onValueChange(value);
              }
            }}
          >
            <SelectTrigger className={commonProps.className}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      default:
        return (
          <Input
            ref={ref as React.Ref<HTMLInputElement>}
            type={fieldType}
            {...commonProps}
            {...inputProps}
          />
        );
    }
  };

  return (
    <div
      className={cn(
        "grid gap-1.5",
        {
          "grid-cols-1": orientation === "vertical",
          "grid-cols-[auto_1fr] items-center gap-3":
            orientation === "horizontal",
        },
        wrapperClassName
      )}
    >
      {label && !hideLabel && (
        <Label
          htmlFor={id}
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            {
              "text-destructive": error,
              "after:content-['*'] after:ml-0.5 after:text-destructive":
                required,
            },
            labelClassName
          )}
        >
          {label}
        </Label>
      )}

      <div className="relative">
        {prefix && (
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
            {prefix}
          </div>
        )}
        {renderField()}
        {suffix && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
            {suffix}
          </div>
        )}
      </div>

      {description && (
        <Description
          id={`${id}-description`}
          className={cn("text-sm text-muted-foreground", descriptionClassName)}
        >
          {description}
        </Description>
      )}

      {error && (
        <ErrorMessage
          id={`${id}-error`}
          className={cn("text-sm text-destructive", errorClassName)}
        >
          {error}
        </ErrorMessage>
      )}
    </div>
  );
});

FormField.displayName = "FormField";

export { FormField };

// Helper components
interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  id?: string;
}

const Description: React.FC<DescriptionProps> = ({ className, ...props }) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

interface ErrorMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  id?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ className, ...props }) => (
  <p className={cn("text-sm text-destructive", className)} {...props} />
);
