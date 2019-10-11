import React, { useState } from 'react';
import classNames from 'classnames';
import Mark from './Mark/Mark';
import EmptyMark from './EmptyMark/EmptyMark';

import classes from './Marks.module.scss';

const initialState = {
  daysArr: [
    { dayNum: 1 },
    { dayNum: 2 },
    { dayNum: 3 },
    { dayNum: 4 },
    { dayNum: 5 },
    { dayNum: 6 },
    { dayNum: 0 }
  ]
};

const Marks = ({ marksData }) => {
  const [{ daysArr }] = useState(initialState);

  const insertMark = markData => {
    return daysArr.map((el, id) => {
      if (markData.day === el.dayNum)
        return <Mark key={markData.id} data={markData} />;
      else return <EmptyMark key={`${id}=${markData.id}`} />;
    });
  };

  const renderMarks = () => {
    return marksData.map((mark, id) => {
      const weeksWrapper = insertMark(mark);

      const wrapperClass = classNames(classes.MarksWrapper, {
        [classes.LightLine]: id % 2 === 0,
        [classes.DarkLine]: id % 2 !== 0
      });

      return (
        <div className={wrapperClass} key={mark.id}>
          {weeksWrapper}
        </div>
      );
    });
  };

  const marks = renderMarks();

  return <div>{marks}</div>;
};

export default Marks;
