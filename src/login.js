import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const saveData = JSON.parse(localStorage.getItem('registrationFormData'));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  /////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();

    const matchedUser = saveData.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      alert('You are logged in successfuly');
      setFormData({
        email: '',
        password: '',
      });
    } else {
      alert('Wrong Credentials');
    }
  };
  return (
    <div>
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData?.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter passsword"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />{' '}
        <br />
        <br />
        <button type="submit">Login</button>
        <br />
        <br />
        <Link to="/">Go to registartion</Link>
      </form>
    </div>
  );
}
