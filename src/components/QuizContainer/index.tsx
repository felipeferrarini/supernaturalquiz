import styled from 'styled-components';
import { motion } from 'framer-motion';

export const QuizContainer = styled(motion.div)`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
    padding-top: 70px;
  }
`;
