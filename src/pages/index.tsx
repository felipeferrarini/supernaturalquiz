import React, { useState } from 'react';
import Home from '../screens/Home';
import localDb from '../../db.json';

const Index: React.FC = () => {
  return <Home db={localDb} />;
};

export default Index;
