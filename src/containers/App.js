import React from 'react';

import Layout from '../hoc/LayoutRL/Layout';
import WeekComponent from './WeekComponent/WeekComponent';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <WeekComponent />
      </Layout>
    </div>
  );
}

export default App;
