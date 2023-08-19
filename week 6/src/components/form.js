import React, { useState } from 'react';

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phno:'',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Your Response has been Submitted');
    setFormData({name: '',
    email: '',
    phno:'',
    message: ''
  });
    console.log(formData);
  };

  return (
    
    <form onSubmit={handleSubmit} className='form-container'>
      <div className='form-ele'>
        <label htmlFor="name">Name:</label>
        <br/>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div >
      <div className='form-ele'>
        <label htmlFor="email">Email:</label>
        <br/>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          
        />
      </div>
      <div className='form-ele'>
        <label htmlFor="name">Phone No:</label>
        <br/>
        <input
          type="text"
          id="phno"
          name="phno"
          value={formData.phno}
          onChange={handleInputChange}
          required
        />
      </div >
      <div className='form-ele'>
        <label htmlFor="message">Message:</label>
        <br/>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}


