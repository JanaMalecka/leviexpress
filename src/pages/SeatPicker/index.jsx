import React, { useState } from 'react';
import './style.css';
import { Seat } from '../Seat';
import { Home } from '../Home';

export const SeatPicker = ({ seats, journeyId }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  console.log(seats);
  const handleSeatSelect = (number) => {
    /* console.log(number); */
    setSelectedSeatNumber(number);
  };
  return (
    <>
      <div className="seat-picker container">
        <h2>Vyberte sedadlo</h2>
        <div className="seats">
          <div className="seat-row">
            <Seat
              number="1"
              isOccupied={false}
              isSelected={'1' === selectedSeatNumber}
              onSelect={handleSeatSelect}
            />
          </div>
        </div>
        <button className="btn" type="button">
          Rezervovat
        </button>
      </div>
    </>
  );
};
