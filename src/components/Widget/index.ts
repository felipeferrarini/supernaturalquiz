import styled from 'styled-components';
import { ThemeProps } from '../../pages/_app';

const Widget: any = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }: ThemeProps) => theme.colors.primary};
  background-color: ${({ theme }: ThemeProps) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  }
`;
export const Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Content = Content;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }: ThemeProps) => theme.colors.primary};
`;

Widget.Header = Header;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    width: 100%;
    border-radius: 4px;
    border: 1px solid #afafaf;
    background-color: transparent;
    height: 45px;
    margin: 10px 0;
    color: #fff;
    outline: 0;
    font-size: 16px;
    padding-left: 10px;
    transition: all 0.2s;

    :focus {
      border: 1px solid ${({ theme }: ThemeProps) => theme.colors.primary};
    }
  }

  button {
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    transition: all 0.2s;
    background-color: ${({ theme }: ThemeProps) => theme.colors.verde};
    outline: 0;

    :hover {
      background-color: ${({ theme }: ThemeProps) => theme.colors.verdeClaro};
    }

    :disabled {
      cursor: not-allowed;
      background-color: #afafaf;
      color: #0008;
    }

    :active {
      background-color: ${({ theme }: ThemeProps) => theme.colors.primary};
    }
  }
`;

Widget.Form = Form;

export default Widget;
