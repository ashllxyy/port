import React from 'react'
import './DateToday.css'

export default function DateToday() {
    const now = new Date();
    const monthNames = [
        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL',
        'MAY', 'JUNE', 'JULY', 'AUGUST',
        'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];
    const currentDate= now.toLocaleString().split(",")[0].split("/");
    const day = currentDate[1];
    const monthIndex = parseInt(currentDate[0], 10) - 1; 
    const month = monthNames[monthIndex].slice(0, 3);;
    const year = currentDate[2];
    return (
        <div className='date-today'>
            <h1><span className='day'>{day}</span><span className='year'> {month} {year}</span></h1>
        </div>
    )
}
