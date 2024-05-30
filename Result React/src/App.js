
import './App.css';
import { useState } from 'react';
import './components/FormC.css'; 
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes,useNavigate} from 'react-router-dom';
import Result from './components/Result';

//function App() {
  // const [showForm, setShowForm] = useState(true);
  // const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   name: '',
  //   prn: '',
  //   oop_mse: '',
  //   oop_ese: '',
  //   sdam_mse: '',
  //   sdam_ese: '',
  //   iot_mse: '',
  //   iot_ese: '',
  //   dsa_mse: '',
  //   dsa_ese: '',
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleFetchButtonClick = () => {
  //   navigate('/result');
  //   setShowForm(false); // Hide the form
  // };

  // const isFormValid = () => {
  //   // Define the list of required fields
  //   const requiredFields = [
  //     'name',
  //     'prn',
  //     'oop_mse',
  //     'oop_ese',
  //     'sdam_mse',
  //     'sdam_ese',
  //     'iot_mse',
  //     'iot_ese',
  //     'dsa_mse',
  //     'dsa_ese',
  //   ];

  //   // Check if all required fields have a value
  //   return requiredFields.every((fieldName) => formData[fieldName].trim() !== '');
  // };

  // return (
  //   <div className="App">
  //     <div className="container">
  //       {showForm && (
  //         <form>
  //           <label>Enter Student Name:</label>
  //           <input type="text" name="name" onChange={handleInputChange}/><br></br>
  //           <label>Enter PRN Number:</label>
  //           <input type="text" name="prn" onChange={handleInputChange} /><br /><br />
  //           <label for="">OOP:</label>
  //         <input type="text" name="oop_mse" placeholder="MSE Marks" required onChange={handleInputChange} />
  //         <input type="text" name="oop_ese" placeholder="ESE Marks" required onChange={handleInputChange} /><br />

  //         <label for="subject1">SDAM:</label>
  //         <input type="text" name="sdam_mse" placeholder="MSE Marks" required onChange={handleInputChange} />
  //         <input type="text" name="sdam_ese" placeholder="ESE Marks" required  onChange={handleInputChange}/><br />

  //         <label for="subject1">IOT:</label>
  //         <input type="text" name="iot_mse" placeholder="MSE Marks" required  onChange={handleInputChange}/>
  //         <input type="text" name="iot_ese" placeholder="ESE Marks" required  onChange={handleInputChange}/><br />

  //         <label for="subject1">DSA:</label>
  //         <input type="text" name="dsa_mse" placeholder="MSE Marks" required onChange={handleInputChange} />
  //         <input type="text" name="dsa_ese" placeholder="ESE Marks" required onChange={handleInputChange} /><br />

  //           <button onClick={handleFetchButtonClick}>Fetch</button>
  //         </form>
  //       )}

  //       <Routes>
  //         <Route path="/result" element={<Result />} />
  //       </Routes>
  //     </div>
  //   </div>
  // );
//}


import FormComponent from './components/FormC';
import ResultComponent from './components/Result';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <h1>Student Result Calculator</h1>
      <FormComponent onSubmit={handleFormSubmit} />
      {formData && <ResultComponent formData={formData} />}
    </div>
  );
}

export default App;


