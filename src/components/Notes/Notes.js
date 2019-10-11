import React from 'react';
import Note from './Note/Note';

const Notes = ({ notesData, marksData }) => {
  // console.log(notesData);
  // console.log(marksData);

  const getNote = id => {
    const note = notesData.filter(el => el.markId === id);
    return note.length !== 0 ? note[0] : null;
  };

  const renderNotes = () => {
    return marksData.map((mark, id) => {
      const note = getNote(mark.id);
      if (note !== null) {
        return <Note key={mark.id} noteData={note} mark={mark} bgNum={id} />;
      } else {
        const note = { text: 'Add note' };
        return <Note key={mark.id} noteData={note} mark={mark} bgNum={id} />;
      }
    });
  };

  const notes = renderNotes();

  return <div>{notes}</div>;
};

export default Notes;
