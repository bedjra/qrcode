
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QRCode from "react-qr-code";
import Form from "./Form";

const App = () => {
  const formURL = "http://localhost:3000/form"; // URL où le formulaire est accessible

  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Scanner Moi  </h1>
      <QRCode value={formURL} size={200} />
      <h1>Pour gagner des cadeaux  </h1>
      </div>
      <Routes>
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
