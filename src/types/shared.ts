import { HTMLInputTypeAttribute } from 'react';

export interface FormInput<T> {
  name: keyof T;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
}

export interface SelectOption<TValue extends string> {
  label: string;
  value: TValue;
}
