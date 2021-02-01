/* eslint-disable indent */
import styled from 'styled-components';
import { ThemeProps } from '../../pages/_app';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Widget = styled(motion.div)`
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

  h4 {
    font-size: 15px;
    font-weight: 600;
    line-height: 1;
  }

  h5 {
    width: 100%;
    text-align: center;
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
      opacity: 1;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  }
`;
export const Content = styled(motion.div)`
  padding: 24px 32px 32px 32px;
  height: 100%;

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

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 18px 32px;
  background-color: ${({ theme }: ThemeProps) => theme.colors.primary};
`;

export const External = styled.div`
  max-height: 25vh;
  overflow: auto;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid ${({ theme }: ThemeProps) => theme.colors.primary};

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }: ThemeProps) => theme.colors.primary};
    -webkit-box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 0.4);
    -moz-box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 0.4);
    box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 0.4);
    border-radius: 5px;

    :hover {
      background: ${({ theme }: ThemeProps) => theme.colors.primary};
    }

    :active {
      background: ${({ theme }: ThemeProps) => theme.colors.secondary};
    }
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }: ThemeProps) => `${theme.colors.primary}40`};
    opacity: 0.5;
    border-radius: 5px;
  }
`;

export const Topic = styled(motion.div)`
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

  a {
    text-decoration: none;
  }

  input {
    display: none;
  }

  input:checked ~ label {
    background-color: ${({ theme }: ThemeProps) => theme.colors.secondary};
  }
  .certa {
    background-color: ${({ theme }: ThemeProps) => theme.colors.success};
  }
  .ignorada {
    opacity: 0.5;
  }
  .errada {
    background-color: ${({ theme }: ThemeProps) => theme.colors.wrong};
  }
`;

export default Widget;

export const ResultSVG = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: #fff;
    font-size: 25px;
    width: 100%;
    height: 100%;
    margin: 20px auto;
    margin-bottom: -10px;
    border-radius: 50%;
    background-color: ${props =>
      props.className === 'true'
        ? props.theme.colors.success
        : props.className === 'false'
        ? props.theme.colors.wrong
        : 'transparent'};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform-style: preserve-3d;
    animation: svgFadeIn 0.2s;

    @keyframes svgFadeIn {
      from {
        width: 1%;
        height: 1%;
        font-size: 2px;
      }

      to {
        width: 100%;
        height: 100%;
        font-size: 25px;
      }
    }

    ::before {
      content: '';
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      border-radius: 50%;
      background-color: ${props =>
        props.className === 'true'
          ? props.theme.colors.success
          : props.className === 'false'
          ? props.theme.colors.wrong
          : 'transparent'};
      opacity: 0.3;
      position: absolute;
      transform: translateZ(-1px);
    }
  }
`;
