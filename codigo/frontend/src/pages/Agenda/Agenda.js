import './Agenda.css'
import {CalendarComponent} from '@syncfusion/ej2-react-calendars'

const Agenda = () => {
  const dateValue = new Date(new Date().getFullYear(),new Date().getMonth(),20)
  return (
    <div  className='pt-5'>
      <CalendarComponent value={dateValue}></CalendarComponent>
    </div>
  )
}

export default Agenda