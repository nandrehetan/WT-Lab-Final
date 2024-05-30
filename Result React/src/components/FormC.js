import React, { useState } from 'react';
import './FormC.css'; // Import the CSS file

const FormC = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    prn: '',
    sdamMSE: '',
    sdamESE: '',
    oopMSE: '',
    oopESE: '',
    iotMSE: '',
    iotESE: '',
    dsaMSE: '',
    dsaESE: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container"> {/* Apply the CSS class here */}
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        PRN:
        <input type="text" name="prn" value={formData.prn} onChange={handleChange} />
      </label>
      <label>
        SDAM MSE:
        <input type="number" name="sdamMSE" value={formData.sdamMSE} onChange={handleChange} />
      </label>

      <label>
        SDAM ESE:
        <input type="number" name="sdamESE" value={formData.sdamESE} onChange={handleChange} />
      </label>

      <label>
        OOP MSE:
        <input type="number" name="oopMSE" value={formData.oopMSE} onChange={handleChange} />
      </label>

      <label>
        OOP ESE:
        <input type="number" name="oopESE" value={formData.oopESE} onChange={handleChange} />
      </label>

      <label>
        IOT MSE:
        <input type="number" name="iotMSE" value={formData.iotMSE} onChange={handleChange} />
      </label>
      <label>
        IOT ESE:
        <input type="number" name="iotESE" value={formData.iotESE} onChange={handleChange} />
      </label>

      <label>
        DSA MSE:
        <input type="number" name="dsaMSE" value={formData.dsaMSE} onChange={handleChange} />
      </label>
      <label>
        DSA ESE:
        <input type="number" name="dsaESE" value={formData.dsaESE} onChange={handleChange} />
      </label>
      {/* Rest of your form */}
      <button type="submit">Fetch</button>
    </form>
  );
};

export default FormC;
