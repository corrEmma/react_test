import React from 'react';
import { AppBar } from '@material-ui/core';
import DataContainer from '../DataContainer/DataContainer';

function App() {
  return (
    <>
      <AppBar position="static" style={{minHeight: '8%'}}/>
      <DataContainer />
    </>
  );
}

export default App;
