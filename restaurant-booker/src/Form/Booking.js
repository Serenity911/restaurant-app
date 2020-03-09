import React from 'react';


function Booking ({bookingValue, handleBookingItemClick}){

    function handleEditBooking(){
        handleBookingItemClick(bookingValue.id)
    }

    return (
    <li key={bookingValue.id}>    
            ID: {bookingValue.id}
            <br></br>
            {bookingValue.time}
            <br></br>
            {bookingValue.date}
            <br></br>
            {bookingValue.numberOfPeople}
            <br></br>
            {bookingValue.customer.name}
            <br></br>
            <button onClick={handleEditBooking}>Edit</button>
        </li>
    
    )

}

export default Booking;