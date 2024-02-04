import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <>
      <select id='contact' onChange={onChange} value={value} name={name}>
        <option>No Contact Selected</option>
        {contacts.map((contact, index) => {
          return(
           <option value={contact.name} key={index}>{contact.name}</option> 
          )
        })}
      </select>
    </>
  );
};
