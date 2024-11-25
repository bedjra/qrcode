import React from "react";

const Form = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bienvenue sur le formulaire !</h1>
      <p>Remplissez ce formulaire pour participer au concours.</p>
      <form>
        <input type="text" placeholder="Nom" required style={{ margin: "10px" }} />
        <input type="email" placeholder="Email" required style={{ margin: "10px" }} />
        <button type="submit" style={{ marginTop: "20px" }}>Soumettre</button>
      </form>
    </div>
  );
};

export default Form;
