import React from 'react';
import Home from '../../screens/QuizPage';
import localDb from '../../../db.json';

const Index: React.FC = () => {
  return <Home db={localDb} />;
};

export default Index;
