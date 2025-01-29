import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [ contacts, setContacts ] = useState([]);
  const [ appointments, setAppointments ] = useState([]);
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email
    }
    setContacts((prev) => [...prev, newContact]);
  }

  const addAppointment = (event) => {
    const newAppointment = {
      name: event.target.name,
      contact: event.target.contact,
      date: event.target.date,
      time: event.target.time
    }
    setAppointments((prev) => [...prev, newAppointment]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} />}/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment}/>}/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
