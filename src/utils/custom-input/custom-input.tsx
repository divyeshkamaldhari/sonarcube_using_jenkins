import React from 'react';
import { Checkbox, Form, Input, Radio, Select } from 'antd';
import { Rule } from 'antd/es/form';

const { TextArea } = Input;
const { Option } = Select;

interface CustomFieldProps<T = ValueType> {
  type: 'input' | 'select' | 'textarea' | 'radio' | 'checkbox';
  options?: Array<OptionType>;
  label?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  value?: string | boolean | number;
  onChange?: (value: T) => void;
  className?: string;
  rules?: Rule[];
}

type ValueType = string | number | boolean;

interface OptionType {
  label: string;
  value: ValueType;
}

const inputComponents = {
  input: (props: CustomFieldProps<string>) => (
    <Input
      {...props}
      value={
        typeof props.value === 'boolean' ? props.value.toString() : props.value
      }
      onChange={(e) => props.onChange?.(e.target.value)}
    />
  ),
  select: (props: CustomFieldProps<string>) => (
    <Select {...props} value={props.value as string} onChange={props.onChange}>
      {props.options?.map((option) => (
        <Option key={option.value as string} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  ),
  textarea: (props: CustomFieldProps<string>) => (
    <TextArea
      {...props}
      value={props.value as string}
      onChange={(e) => props.onChange?.(e.target.value)}
    />
  ),
  radio: (props: CustomFieldProps<string>) => (
    <Radio.Group
      {...props}
      value={props.value}
      onChange={(e) => props.onChange?.(e.target.value)}
    >
      {props.options?.map((option) => (
        <Radio key={option.value as string} value={option.value}>
          {option.label}
        </Radio>
      ))}
    </Radio.Group>
  ),
  checkbox: (props: CustomFieldProps<boolean>) => (
    <Checkbox
      {...props}
      checked={props.value as boolean}
      onChange={(e) => props.onChange?.(e.target.checked)}
    >
      {props.label}
    </Checkbox>
  ),
};

export const CustomField: React.FC<CustomFieldProps> = ({
  type,
  options,
  label,
  name,
  required,
  placeholder,
  value = '',
  onChange,
  className,
  rules,
  ...props
}) => {
  const InputComponent = inputComponents[type];

  return (
    <Form.Item label={label} name={name} className={className} rules={rules}>
      {InputComponent &&
        InputComponent({
          ...props,
          type,
          name,
          options,
          placeholder,
          onChange,
          label,
          required,
          value,
        })}
    </Form.Item>
  );
};
