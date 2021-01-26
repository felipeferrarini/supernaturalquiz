import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget, { Content, Header } from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Head from 'next/head';
import QuizLogo from '../src/components/QuizLogo';

export const QuizContainer = styled.div`
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

const Home: React.FC = () => {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Supernatural</title>
      </Head>
      <QuizContainer>
        <QuizLogo className={'svg'} />
        <Widget>
          <Header>
            <h1>{db.title}</h1>
          </Header>
          <Content>
            <p>{db.description}</p>
          </Content>
        </Widget>

        <Widget>
          <Content>
            <h1>{db.title}</h1>
            <p>{db.description}</p>
          </Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={'https://github.com/felipeferrarini'} />
    </QuizBackground>
  );
};

export default Home;
