import React, { useState } from 'react';
import './style.css';
import login from 'Login';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useNavigate,
} from 'react-router-dom';

export default function Registration() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');
  }
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
  });

  ///////////////////////////////////////////////////
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData, //it create a shallow copy of formData it means it is not mutate the orginal data of the form directly
      [name]: value, //updates the specific property of the name jo triggered hua hai
    }));
  };

  //in this function all the form Data is stored in setFormData
  const handleSubmit = (e) => {
    

    // setUsers(usersList);

    e.preventDefault();

    // Validate form data using regex before submitting
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d\w\W]{8,}$/;
    const contactRegex = /^[0-9]{10}$/;

    if (
      !nameRegex.test(formData.name) ||
      !emailRegex.test(formData.email) ||
      !passwordRegex.test(formData.password) ||
      !contactRegex.test(formData.contact)) {
      alert('Invalid form data. Please check your input.');
      return;
    }

    // Handle registration form submission
    alert('Register Successful');
   
const newUser={
  name: formData.name,
  email: formData.email,
  contact: formData.contact,
  password : formData.password
}
setUsers((prevUsers) => [...prevUsers, newUser])
    
    // setUsers((prevUser) => [...prevUser]);
    localStorage.setItem('registrationFormData', JSON.stringify(users));
    //Reset form data
    setFormData({
      name: '',
      email: '',
      password: '',
      contact: '',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter the name"
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter Email"
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        name="contact"
        value={formData.contact}
        placeholder="Contact"
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
      <br />
      <br />

      <Link to="/login">Click here to login</Link>
    </form>
  );
}
