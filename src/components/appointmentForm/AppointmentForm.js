import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      name="title"
      placeholder="Enter Title"
      onChange = {(e) => {setTitle(e.target.value)}}
      value={title}
      />
      <input 
      type="date"
      name="date"
      value={date}
      onChange={(e) =>{setDate(e.target.value)}}
      min={getTodayString}
      />
      <input 
      type="time"
      name="time"
      value={time}
      onChange = {(e) => {setTime(e.target.value)}}
      />
      <ContactPicker 
      contacts={contacts}
      onChange={(e) => setContact(e.target.value)}
      //onChange = {(e) => {setContact(e.target.value)}}
      value={contact}
      />
      <input type="submit" value="Submit" />
    </form>
    </>
  );
};
