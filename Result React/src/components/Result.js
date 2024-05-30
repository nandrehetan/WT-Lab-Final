import React from 'react';
import './Result.css';
import logoImage from './logo.png';

const Result = ({ formData }) => {
  const calculateResult = () => {
    const { name,prn,sdamMSE,sdamESE,oopMSE,oopESE,iotMSE,iotESE,dsaMSE,dsaESE } = formData;
    // Perform the calculation here based on your formula
    const sdam = 0.3 * sdamMSE + 0.7 * sdamESE;
  const oop = 0.3 * oopMSE + 0.7 * oopESE;
  const iot = 0.3 * iotMSE + 0.7 * iotESE;
  const dsa = 0.3 * dsaMSE + 0.7 * dsaESE;

  // Calculate the final result based on the weighted sum of subjects
  const finalMarks = (sdam + oop + iot + dsa);
  const f=finalMarks / 4
  return (f/10); 
  };

  return (
    <div className='box'>
       <div className='header'>
        <div className='logo'><img src= {logoImage} alt='Logo'/></div>
        <div className=' content'>
          <div className='right-content'>
            <h2>Provisional Marksheet</h2>
            <p>Bansilal Ramnath Agarwal Charitable Trust's's</p>
            <h2>Vishwakarma Institute of Technology,Pune</h2>
            <p>((An Autonomous Institute affiliated to Savitribai Phule Pune University))</p>
            <p>666, Upper Indiranagar, Bibwewadi, Pune- 411 037</p>
          </div>
        </div>
        <div className='table'>
        
        </div>
       </div>
       <table className='tb'>
    <tbody>
      <tr>
        <td>Name:</td>
        <td>{formData.name}</td>
      </tr>
      <tr>
      <td>PRN:{formData.prn} </td>
      <td>Mother's Name:</td>
    </tr>
      <tr>
        <td>Program:</td>
        <td>BACHELOR OF TECHNOLOGY</td>
      </tr>
      <tr>
        <td>Branch:</td>
        <td>BTech-Computer Engineering</td>
      </tr>
      <tr>
        <td>Class: SY</td>
        <td>Semester: 2</td>
       
      </tr>
    
      <tr>
        <td>Month & Year Of Exam:MAY, 2023</td>
        <td>Semester Result Date:01-Jun-2023</td>
      </tr>
      
    </tbody>
  </table>
  <table border="1" className='tb'>
  <thead>
    <tr>
      <th>Sr.No</th>
      <th>Course Code</th>
      <th>Course Title</th>
      <th>Credits</th>
      <th>Grades</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>CS2218</td>
      <td>SDAM</td>
      <td>4</td>
      <td>B+</td>
    </tr>
    <tr>
      <td>2</td>
      <td>CS2221</td>
      <td>OBJECT ORIENTED PROGRAMMING</td>
      <td>4</td>
      <td>A</td>
    </tr>
    <tr>
      <td>3</td>
      <td>CS2227</td>
      <td>INTERNET OF THINGS</td>
      <td>4</td>
      <td>B+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>CS2231</td>
      <td>Data Structure</td>
      <td>1</td>
      <td>B+</td>
    </tr>

  </tbody>
</table>
<table border="1" className='tb tb1'>
  <thead>
    <tr>
      <th>Course</th>
      <th>Credits Registered</th>
      <th>Credits Earned</th>
      <th>SGPA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Comp</td>
      <td>23</td>
      <td>23</td>
      <td>{calculateResult()}</td>
    </tr>
  </tbody>
</table>


    
    </div>
  );
};

export default Result;
