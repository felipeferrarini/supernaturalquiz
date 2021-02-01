import React, { useState } from 'react';
import localDb from '../../../db.json';
import Widget, {
  Content,
  Header,
  Topic,
  External
} from '../../components/Widget';
import Footer from '../../components/Footer';
import GitHubCorner from '../../components/GitHubCorner';
import QuizBackground from '../../components/QuizBackground';
import Head from 'next/head';
import QuizLogo from '../../components/QuizLogo';
import { useRouter } from 'next/router';
import { QuizContainer } from '../../components/QuizContainer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from 'next/link';

interface HomeProps {
  db: typeof localDb;
}

const Home: React.FC<HomeProps> = ({ db }) => {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (router.pathname !== '/') {
      router.push(`/quiz/${router.query.id}?name=${name}`);
    } else {
      router.push(`/quiz?name=${name}`);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Supernatural</title>
      </Head>
      <QuizContainer>
        <Link href="/" shallow={true}>
          <a>
            <QuizLogo className={'svg'} />
          </a>
        </Link>
        <Widget
          variants={{
            show: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: '100%' }
          }}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Header>
            <h1>{db.title}</h1>
          </Header>
          <Content>
            <p>{db.description}</p>

            <form onSubmit={handleSubmit}>
              <Input
                value={name}
                onChange={setName}
                type="text"
                placeholder="Informe seu nome"
              />

              <Button disabled={name.length === 0} type="submit">
                JOGAR
              </Button>
            </form>
          </Content>
        </Widget>

        <Widget
          variants={{
            show: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: '-100%' }
          }}
          initial="hidden"
          animate="show"
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Content>
            <p>
              <h1>Quizes da galera</h1>
            </p>

            <External>
              {db.external.map((link, index) => {
                const [projectName, gitHubUser] = link
                  .replace(/(https:\/\/|\/|.vercel.app)/g, '')
                  .split('.');

                return (
                  <Topic key={index}>
                    <Link href={`/home/${projectName}___${gitHubUser}`}>
                      <label>{projectName + '/' + gitHubUser}</label>
                    </Link>
                  </Topic>
                );
              })}
            </External>
          </Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={'https://github.com/felipeferrarini'} />
    </QuizBackground>
  );
};

export default Home;
