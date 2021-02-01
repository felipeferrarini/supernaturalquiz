import styled from 'styled-components';
import { ThemeProps } from '../../pages/_app';

const Button = styled.button`
  background-color: ${({ theme }: ThemeProps) => theme.colors.secondary};
  color: ${({ theme }: ThemeProps) => theme.colors.contrastText};
  border-radius: ${({ theme }: ThemeProps) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    opacity: 0.5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

export default Button;
