import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-us")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  name,
  setName,
  contacts,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <lable htmlFor="appointment-name" autoComplete="off" >Name</lable>
      <input id="appointment-name" type="text" onChange={(e) => setName(e.target.value)} value={name} required="true"/>
      <lable htmlFor="appointment-date">Date</lable>
      <input id="appointment-date" type="date" min={getTodayString()} onChange={(e) => setDate(e.target.value)} value={date} required="true"/>
      <label htmlFor="appointment-time">Time</label>
      <input id="appointment-time" type="time" onChange={(e) => setTime(e.target.value)} value={time} required="true"/>
      <ContactPicker list={contacts} onChange={(e) => setContact(e.target.value)} value={contact} />
      <button type="submit">Submit</button>
    </form>
  );
};
