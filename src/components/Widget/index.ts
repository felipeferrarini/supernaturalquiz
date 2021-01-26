import styled, { StyledComponentBase } from 'styled-components';
import { ThemeProps } from '../../../pages/_app';

interface WidgetProps
  extends StyledComponentBase<any, Record<string, unknown>> {
  Content?: typeof Content;
  Header?: typeof Header;
}

const Widget: WidgetProps = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }: ThemeProps) => theme.colors.secondary};
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

const Content = styled.div`
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

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }: ThemeProps) => theme.colors.secondary};
`;

Widget.Content = Content;
Widget.Header = Header;
export default Widget;
