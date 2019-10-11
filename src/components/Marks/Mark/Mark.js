import React from 'react';
import classNames from 'classnames';

import classes from './Mark.module.scss';

const Mark = ({ data }) => {
  const markClasses = classNames(classes.MarkItem, {
    [classes.New]: data.status === 'new',
    [classes.Finished]: data.status === 'finished',
    [classes.Deleted]: data.status === 'deleted',
    [classes.Transferred]: data.status === 'transferred'
  });

  return <div className={markClasses}></div>;
};

export default Mark;
