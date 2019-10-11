import React from 'react';
import classNames from 'classnames';

import classes from './Note.module.scss';

const Note = ({ noteData, mark, bgNum }) => {
  const { status } = mark;
  console.log(status);

  const noteClass = classNames(classes.Default, {
    [classes.LightLine]: bgNum % 2 === 0,
    [classes.DarkLine]: bgNum % 2 !== 0
  });

  return <div className={noteClass}>{noteData.text}</div>;
};

export default Note;
