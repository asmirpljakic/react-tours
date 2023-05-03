import React from 'react';
import Tour from './Tour';

//Ovde je poenta da napravimo nas naslov, donju crtu i da izlisatmo sve nase tours-eve:

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div className='tours'>
        {tours.map(tour => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
