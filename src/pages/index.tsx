import React, { useState } from 'react';
import db from '../../db.json';
import Widget from '../../src/components/Widget';
import Footer from '../../src/components/Footer';
import GitHubCorner from '../../src/components/GitHubCorner';
import QuizBackground from '../../src/components/QuizBackground';
import Head from 'next/head';
import QuizLogo from '../../src/components/QuizLogo';
import { useRouter } from 'next/router';
import { QuizContainer } from '../components/QuizContainer';

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/Quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Supernatural</title>
      </Head>
      <QuizContainer>
        <QuizLogo className={'svg'} />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>

            <Widget.Form onSubmit={handleSubmit}>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Informe seu nome caçador!"
              />

              <button disabled={name.length === 0} type="submit">
                JOGAR
              </button>
            </Widget.Form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>{db.title}</h1>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={'https://github.com/felipeferrarini'} />
    </QuizBackground>
  );
};

export default Home;
