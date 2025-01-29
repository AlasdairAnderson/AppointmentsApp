import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="contact-form-name">Name</label>
      <input id="contact-form-name" type="text" onChange={ (e) => setName(e.target.value)} value={name}/>
      <label htmlFor="contact-form-phone">Phone Number (12345-678-910)</label>
      <input id="contact-form-phone" type="tel" pattern="[0-9]{5}-[0-9]{3}-[0-9]{3}" onChange={ (e) => setPhone(e.target.value)} value={phone}/>
      <label htmlFor="contact-form-email">Email</label>
      <input id="contact-form-email" type="email" patter=".+@example\.com" size="30" onChange={ (e) => setEmail(e.target.value)} value={email}/>
      <button type="submit">Submit</button>
    </form>
  );
};

