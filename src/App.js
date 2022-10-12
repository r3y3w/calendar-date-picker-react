import  { useState } from 'react'
import './App.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

/**
calendar-date-picker-react
https://www.youtube.com/watch?v=eM8n55lad1c&t=10s
https://github.com/wojtekmaj/react-calendar
**/

function App() {

  const [date, setDate] = useState(new Date())
  const onChange = date => {    
    setDate(date)
  }
  


  return (
    <div className="App">
     <h1>React Calendar</h1>
     <div className="calendar">
      <Calendar showWeekNumbers onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
	</div>

    </div>
  );
}

export default App;
