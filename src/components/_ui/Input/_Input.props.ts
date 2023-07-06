import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  checkboxLabel?: string;
  error?: string | boolean;
  errorText?: string;
}