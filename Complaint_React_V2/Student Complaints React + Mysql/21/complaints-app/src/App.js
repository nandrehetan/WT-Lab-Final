import React from 'react';
import LoginPage from './login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComplaintForm from './ComplaintForm';
import ComplaintList from './ComplaintList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<ComplaintList />} />
        <Route path="/user" element={<ComplaintForm />} />
      </Routes>
    </Router>
  );
}

// Placeholder components for AdminPage and UserPage
const AdminPage = () => <h1>Welcome Admin!</h1>;
const UserPage = () => <h1>Welcome User!</h1>;

export default App;
