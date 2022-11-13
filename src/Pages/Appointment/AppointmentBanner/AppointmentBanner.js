import React, { useState } from "react";
import chair from '../../../assets/images/chair.png';
import chair1 from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
 
  return (
    <header className="my-6" style={{
      background: `url(${chair1})`,
      backgroundSize: 'contain',
      
    }}>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl" alt=""
          />
          <div className="mr-6">
          <DayPicker 
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}

          />
          

           
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
