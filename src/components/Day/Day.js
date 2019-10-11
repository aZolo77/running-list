import React from 'react';
import classNames from 'classnames';
import { capitalizeText } from '../../shared/utility';

import classes from './Day.module.scss';

const Day = ({ data, status }) => {
  const name = capitalizeText(data.rus);

  const dayClasses = classNames(classes.DayItem, {
    [classes.Current]: status === 'current',
    [classes.Coming]: status === 'coming'
  });

  return (
    <>
      <div className={dayClasses} daynum={data.dayNum}>
        {name}
      </div>
    </>
  );
};

export default Day;
