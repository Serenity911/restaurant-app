import React, { useState, useEffect } from "react";
import FormBox from "./Form/FormBox.js";
import BookingList from './Form/BookingList.js';
import Graph from './BookingGraph/Graph.js';
import BookingDetails from './BookingDetails/BookingDetails.js'

function BookingContainer() {
  const [bookings, setBookings] = useState([]);
  const [bookingSlots, setBookingSlots] = useState(["19:00", "20:00", "21:00", "22:00"]);
  const [selectedBooking, setSelectedBooking] = useState({});
  const [availableTimes, setAvailableTimes] = useState(["12:00", "12:30", "13:00", "13:30"])

  useEffect(() => {
    fetch("http://localhost:8080/bookings")
      .then(res => res.json())
      .then(response => response._embedded)
      .then(result => setBookings(result.bookings))
      .catch(error => console.log(error));
  }, []);

  function findBookingById(id) {
    return bookings.find(item => item.id === id)
  }

  function handleBookingItemClick(itemId) {
    let selectedBooking = findBookingById(itemId)
    setSelectedBooking(selectedBooking)
  }

  return (
    <>
      <p>Hello I am the booking container</p>
      <FormBox bookings={bookings}/>
      <BookingDetails selectedBooking={selectedBooking} availableTimes={availableTimes} />
      <BookingList bookings={bookings} handleBookingItemClick={handleBookingItemClick}/>
      <Graph bookings={bookings} bookingSlots={bookingSlots}></Graph>
      <p>{}</p>
    </>
  );
}

export default BookingContainer;
