import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaAngleLeft } from 'react-icons/fa';

const StyledLink = styled.div`
  width: 24px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

interface BackLinkArrowProps {
  href: string;
}

const BackLinkArrow: React.FC<BackLinkArrowProps> = ({ href }) => {
  return (
    <StyledLink>
      <Link href={href} shallow={true}>
        <FaAngleLeft />
      </Link>
    </StyledLink>
  );
};

BackLinkArrow.propTypes = {
  href: PropTypes.string.isRequired
};

export default BackLinkArrow;
