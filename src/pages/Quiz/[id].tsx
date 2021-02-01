import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../../db.json';
import QuizPage from '../../screens/QuizPage';

interface QuizDaGaleraProps {
  dbDaGalera: typeof db;
}

const QuizDaGalera: React.FC<QuizDaGaleraProps> = ({ dbDaGalera }) => {
  return (
    <ThemeProvider theme={dbDaGalera.theme}>
      <QuizPage db={dbDaGalera} />
    </ThemeProvider>
  );
};

interface queryProps {
  query: {
    id?: string;
  };
}

export const getServerSideProps: GetServerSideProps = async ({
  query
}: queryProps) => {
  const [projectName, gitHubUser] = query.id ? query.id.split('___') : ['', ''];
  const db = await axios
    .get(
      `https://${projectName}.${
        gitHubUser === 'undefined' ? '' : gitHubUser + '.'
      }vercel.app/api/db`
    )
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        return res.data;
      }
      throw new Error('Falha na requisição');
    })
    .catch(e => {
      console.log(e);
      return { error: 'deu pau' };
    });

  return { props: { dbDaGalera: db } };
};

export default QuizDaGalera;
