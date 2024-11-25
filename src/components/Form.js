import React, { useState } from "react";
import "./Form.css"; // Importation du fichier CSS pour le style

const Form = () => {
  const [formData, setFormData] = useState({
    connaissanceDigicomm: "",
    satisfaction: "",
    communicationSuffisante: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construire le message à envoyer sur WhatsApp
    const message = `Formulaire de Satisfaction : 
    - Connaissance de Digicomm : ${formData.connaissanceDigicomm}
    - Degré de satisfaction : ${formData.satisfaction}
    - Communication suffisante : ${formData.communicationSuffisante}`;
    
    // Numéro de téléphone WhatsApp
    const phoneNumber = "22890000379";

    // URL WhatsApp avec message encodé
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Ouvrir WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="form-container">
      <h1>Formulaire de Renseignement</h1>
      <form onSubmit={handleSubmit}>
        {/* Question 1: Connaissance de Digicomm Group */}
        <div className="question">
          <p>Connaissez-vous Digicomm Group ?</p>
          <label>
            <input
              type="radio"
              name="connaissanceDigicomm"
              value="Oui"
              onChange={handleChange}
              checked={formData.connaissanceDigicomm === "Oui"}
            />
            Oui
          </label>
          <label>
            <input
              type="radio"
              name="connaissanceDigicomm"
              value="Non"
              onChange={handleChange}
              checked={formData.connaissanceDigicomm === "Non"}
            />
            Non
          </label>
        </div>

        {/* Question 2: Degré de satisfaction */}
        <div className="question">
          <p>Quel est votre degré de satisfaction ?</p>
          <label>
            <input
              type="radio"
              name="satisfaction"
              value="Très satisfait"
              onChange={handleChange}
              checked={formData.satisfaction === "Très satisfait"}
            />
            Très satisfait
          </label>
          <label>
            <input
              type="radio"
              name="satisfaction"
              value="Satisfait"
              onChange={handleChange}
              checked={formData.satisfaction === "Satisfait"}
            />
            Satisfait
          </label>
          <label>
            <input
              type="radio"
              name="satisfaction"
              value="Peu satisfait"
              onChange={handleChange}
              checked={formData.satisfaction === "Peu satisfait"}
            />
            Peu satisfait
          </label>
          <label>
            <input
              type="radio"
              name="satisfaction"
              value="Pas du tout satisfait"
              onChange={handleChange}
              checked={formData.satisfaction === "Pas du tout satisfait"}
            />
            Pas du tout satisfait
          </label>
        </div>

        {/* Question 3: Communication suffisante */}
        <div className="question">
          <p>Pensez-vous que Digicomm Group communique assez ?</p>
          <label>
            <input
              type="radio"
              name="communicationSuffisante"
              value="Oui"
              onChange={handleChange}
              checked={formData.communicationSuffisante === "Oui"}
            />
            Oui
          </label>
          <label>
            <input
              type="radio"
              name="communicationSuffisante"
              value="Non"
              onChange={handleChange}
              checked={formData.communicationSuffisante === "Non"}
            />
            Non
          </label>
        </div>

        {/* Soumettre le formulaire */}
        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Form;
