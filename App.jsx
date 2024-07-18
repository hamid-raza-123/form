import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organizationName: '',
    organizationSize: '',
    industry: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Try Sign free for 14 days</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Work Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="organizationName" className="form-label">Organization Name</label>
          <input
            type="text"
            className="form-control"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="organizationSize" className="form-label">Organization Size</label>
          <select
            className="form-select"
            id="organizationSize"
            name="organizationSize"
            value={formData.organizationSize}
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="501-1000">501-1000</option>
            <option value="1000+">1000+</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="industry" className="form-label">Industry</label>
          <select
            className="form-select"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="technology">Technology</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="agree">
            I understand and agree to the <a href="#privacy-policy">Formstack Privacy Policy</a>, <a href="#software-services">Software Services Agreement</a>, and <a href="#acceptable-use">Acceptable Use Policy</a>.
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Start free trial</button>
      </form>
    </div>
  );
};

export default App;
