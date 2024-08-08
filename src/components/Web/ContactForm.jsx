import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    eventName: '',
    eventDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/contact/submit', formData)
      .then(response => {
        console.log(response.data);
        alert('Form submitted successfully!');
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('An error occurred during account creation: ' + error.message);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} id="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" />

        <label htmlFor="eventName">Event Name:</label>
        <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} id="eventName" />

        <label htmlFor="eventDetails">Event Details:</label>
        <textarea name="eventDetails" value={formData.eventDetails} onChange={handleChange} id="eventDetails"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
