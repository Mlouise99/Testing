import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainRoute from "./routes/MainRoute";


function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/*" element={<MainRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
