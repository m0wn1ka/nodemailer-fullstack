import React, { useState } from 'react';
import axios from 'axios';

function Mail() {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = axios.post('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
      console.log("response from mail is ",response)

      if (response.status === 200) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <h1>Send Email</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="to">To:</label>
          <input
            type="email"
            id="to"
            name="to"
            value={emailData.to}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={emailData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="text">Message:</label>
          <textarea
            id="text"
            name="text"
            value={emailData.text}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default Mail;
