import React from "react";
import { Routes, Route } from "react-router-dom";
import DataDivisions from "./components/divisions/DataDivisions";
import FamousPlace from "./components/divisions/FamousPlace";
import SingleDivision from "./components/divisions/SingleDivision";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DataDivisions />} />
        <Route path="/division/:id" element={<SingleDivision />} />
        <Route path="/famousplace/:id" element={<FamousPlace />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
