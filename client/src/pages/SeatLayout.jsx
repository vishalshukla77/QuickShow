import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import Loading from '../components/Loading';
import { ClockIcon } from 'lucide-react';

function SeatLayout() {
  const { id, date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();

  const getShow = async () => {
    const foundShow = dummyShowsData.find(show => show._id === id);
    if (foundShow) {
      setShow({
        movie: foundShow,
        dateTime: dummyDateTimeData
      });
    }
  };

  useEffect(() => {
    getShow();
  }, []);

  return show ? (
    <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>
      {/* Sidebar: Available Timings */}
      <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>
        <p className='text-lg font-semibold px-6'>Available Timings</p>
        <div>
          {show.dateTime[date]?.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedTime(item)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition 
                ${selectedTime?.time === item.time ? 'bg-primary text-white' : 'hover:bg-primary/20 text-gray-300'}`}
            >
              <ClockIcon className='w-4 h-4' />
              <p className='text-sm'>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default SeatLayout;
