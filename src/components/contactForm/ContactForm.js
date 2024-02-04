import React from "react";
import PropTypes from 'prop-types';

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
    <>
    <form onSubmit={handleSubmit}>
    <input
        type='text'
        name='name'
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        placeholder='Enter name'
      />
      <input
        type='tel'
        phone='phone'
        value={phone}
        onChange={(e) => {setPhone(e.target.value)}}
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        placeholder='Phone number: ###-###-####'
      />
      <input
        type='email'
        name='email'
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        placeholder='Enter email'
      />
      <input type='submit' value="Submit" />
    </form>
    </>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  phone: PropTypes.string,
  setPhone: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  handleSubmit: PropTypes.func,
};