import React from 'react';

import styled from 'styled-components';
import { ThemeProps } from '../../pages/_app';

const InputBase = styled.input`
  width: 100%;
  border-radius: ${({ theme }: ThemeProps) => theme.borderRadius};
  border: 1px solid #afafaf;
  background-color: ${({ theme }: ThemeProps) => theme.colors.mainBg};
  height: 45px;
  margin-bottom: 25px;
  color: #fff;
  outline: 0;
  font-size: 14px;
  padding-left: 10px;
  transition: all 0.2s;

  :focus {
    border: 1px solid ${({ theme }: ThemeProps) => theme.colors.primary};
  }
`;

interface InputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type,
  placeholder
}) => {
  return (
    <div>
      <InputBase
        value={value}
        onChange={e => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
