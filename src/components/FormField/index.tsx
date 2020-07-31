import React, { ChangeEvent } from 'react';

// import { Container } from './styles';
interface Props{
  type: string,
  label: string,
  name: string,
  value: string,
  // onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  onChange: (e: any) => void;

}

const FormField = ( { label, name, type, value, onChange }: Props) => {
  return (
    <div className="form-group ">
      <label className="w-100" >
        {label}
        <input
          type={type}
          name={name}
          className="form-control"
          value={value}
          onChange={onChange} />
      </label>
    </div>
  );
}

export default FormField;