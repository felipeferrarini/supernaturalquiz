import styled from 'styled-components';
import { ThemeProps } from '../../pages/_app';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  padding: 24px 32px 0px 32px;
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

export const Topic = styled.div`
  label {
    outline: 0;
    text-decoration: none;
    color: ${({ theme }: ThemeProps) => theme.colors.contrastText};
    background-color: ${({ theme }: ThemeProps) => `${theme.colors.primary}40`};
    padding: 10px 15px;
    margin-bottom: 8px;
    cursor: pointer;
    border-radius: ${({ theme }: ThemeProps) => theme.borderRadius};
    transition: 0.3s;
    display: block;
    position: relative;

    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }

  input {
    display: none;
  }

  input:checked ~ label {
    background-color: ${({ theme }: ThemeProps) => theme.colors.secondary};
  }
  .certa {
    background-color: ${({ theme }: ThemeProps) => theme.colors.verdeClaro};
  }
  .ignorada {
    background-color: ${({ theme }: ThemeProps) => `${theme.colors.primary}40`};
  }
  .naoEscolhida {
    opacity: 0.5;
  }
  .errada {
    background-color: ${({ theme }: ThemeProps) => theme.colors.wrong};
  }
`;

export default Widget;

export const ResultSVG = styled.div`

  color: #fff;
  font-size: 25px;
  width:50px;
  height:50px;
  margin: 20px auto ;
  border-radius:50%;
  background-color: ${(props) => props.className === 'Acertou!' ? props.theme.colors.verdeClaro : props.className === 'Errou!' ? props.theme.colors.wrong : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform-style: preserve-3d;

  ::before{
    content:'';
    width: 60px;
    height:60px;
    border-radius:50%;
    background-color: ${(props) => props.className === 'Acertou!' ? props.theme.colors.verdeClaro : props.className === 'Errou!' ? props.theme.colors.wrong : 'transparent'};
    opacity: 0.3;
    position: absolute;
    transform: translateZ(-1px);
  }

`;
