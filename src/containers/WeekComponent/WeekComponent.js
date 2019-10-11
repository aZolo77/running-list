import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Day from '../../components/Day/Day';
import Marks from '../../components/Marks/Marks';
import Notes from '../../components/Notes/Notes';

import classes from './WeekComponent.module.scss';

const initialState = {
  daysOfWeek: [
    { id: 0, dayNum: 1, rus: 'пн', eng: 'monday' },
    { id: 1, dayNum: 2, rus: 'вт', eng: 'tuesday' },
    { id: 2, dayNum: 3, rus: 'ср', eng: 'wednesday' },
    { id: 3, dayNum: 4, rus: 'чт', eng: 'thursday' },
    { id: 4, dayNum: 5, rus: 'пт', eng: 'friday' },
    { id: 5, dayNum: 6, rus: 'сб', eng: 'saturday' },
    { id: 6, dayNum: 0, rus: 'вс', eng: 'sunday' }
  ],
  marks: [
    { id: 0, status: 'new', day: 1 },
    { id: 1, status: 'finished', day: 1 },
    { id: 2, status: 'deleted', day: 1 },
    { id: 3, status: 'transferred', day: 1 },
    { id: 4, status: 'new', day: 2 },
    { id: 5, status: 'new', day: 2 },
    { id: 6, status: 'deleted', day: 2 },
    { id: 7, status: 'new', day: 3 },
    { id: 8, status: 'new', day: 3 },
    { id: 9, status: 'transferred', day: 3 },
    { id: 10, status: 'finished', day: 5 },
    { id: 11, status: 'new', day: 0 }
  ],
  notes: [
    { id: 0, text: 'go to the beach', markId: 0 },
    { id: 1, text: 'finish work', markId: 1 },
    { id: 3, text: 'send message', markId: 2 },
    { id: 4, text: 'yoga', markId: 7 },
    { id: 5, text: 'have a rest', markId: 11 }
  ]
};

const setDayStatus = dayNum => {
  const currentDayNum = new Date().getDay();
  if (currentDayNum === dayNum) return 'current';
  else return 'coming';
};

const WeekComponent = () => {
  const [{ daysOfWeek, marks, notes }] = useState(initialState);

  const renderDays = () => {
    return daysOfWeek.map(day => (
      <Day key={day.id} data={day} status={setDayStatus(day.dayNum)} />
    ));
  };

  const days = renderDays();

  return (
    <Container>
      <Row>
        <Col xs={3} sm={5} md={5} lg={5} xl={4}>
          <div className={classes.DaysWrapper}>{days}</div>
        </Col>
        <Col xs={9} sm={7} md={7} lg={7} xl={8}>
          <div className={classes.TodosWrapper}>Todos</div>
        </Col>
      </Row>
      <Row>
        <Col xs={3} sm={5} md={5} lg={5} xl={4}>
          <div className={classes.MarksWrapper}>
            <Marks marksData={marks} />
          </div>
        </Col>
        <Col xs={9} sm={7} md={7} lg={7} xl={8}>
          <div className={classes.NotesWrapper}>
            <Notes notesData={notes} marksData={marks} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WeekComponent;
