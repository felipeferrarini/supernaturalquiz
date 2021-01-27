import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import GitHubCorner from '../../components/GitHubCorner';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import Widget from '../../components/Widget';
import db from '../../../db.json';
import { QuizContainer } from '../../components/QuizContainer';

// import { Container } from './styles';

const Quiz: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState(router.query.name);

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

              <button disabled={name?.length === 0} type="submit">
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

export default Quiz;
