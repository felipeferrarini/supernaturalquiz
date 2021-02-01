import React from 'react';
import { BounceLoader, PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 80px;
`;

const LoadingSpiner: React.FC = () => {
  return (
    <Container>
      <PacmanLoader size={35} color={'#ff2'} />
    </Container>
  );
};

export default LoadingSpiner;
