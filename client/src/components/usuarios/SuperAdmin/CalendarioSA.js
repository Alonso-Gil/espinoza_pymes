import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumple',
    start: moment().toDate(),
    end: moment().add( 2, 'hours' ).toDate(),
    bgcolor: '#fafafa'
}]

const CalendarioSA = () => {
    return ( 
        < >
        <h1>Calendario</h1>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
        />
        </>
        
     );
}
 
export default CalendarioSA;