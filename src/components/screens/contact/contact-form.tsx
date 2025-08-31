"use client";

import { useForm } from "react-hook-form";
import { ContactFormProps, InputFieldType } from "@/types/lang";
import { FormField } from "@/components/ui/form-field";

export function ContactForm({ fields, submitText }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          fieldType={field.type as InputFieldType}
          id={field.name}
          label={field.label}
          // type prop removed as it is not supported by FormField
          placeholder={field.placeholder}
          error={errors[field.name]?.message as string}
          description={field.description}
          options={field.options}
          required={field.required}
          {...register(field.name, {
            required: field.required ? `${field.label} is required` : false,
            validate:
              field.type === "select"
                ? (value) => value !== "" || "Please select an option"
                : undefined,
            ...(field.type === "email" && {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }),
          })}
        />
      ))}
      <button type="submit">{submitText}</button>
    </form>
  );
}
