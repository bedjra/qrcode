import React from "react";
import { QRCodeCanvas } from "qrcode.react"; // Importation corrigée
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";

const Scanner = () => {
  const formURL = "http://localhost:3000/form";

  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Scanner Moi</h1>
        <QRCodeCanvas value={formURL} size={200} /> {/* Utilisation de QRCodeCanvas */}
        <h1>Pour gagner des cadeaux</h1>
      </div>
      <Routes>
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default Scanner;
