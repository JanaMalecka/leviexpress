import React, { useState } from 'react';
import './style.css';
import { JourneyPicker } from './JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (props) => {
    setJourney(props);
    /* Propojte komponentu JourneyPicker se stavem journey – když komponenta JourneyPicker zavolá onJourneyChange s údaji o nalezeném spoji, nastaví se toto spojení do stavu journey. */
    /* console.log(props); */
  };
  return (
    <>
      <h2>Doma</h2>
      {console.log(journey)}
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {/*  {journey ? <p>Nalezeno spojeni s id {journey.journeyId}</p> : null} */}
      {journey ? <JourneyDetail journey={journey} /> : null}
    </>
  );
};
