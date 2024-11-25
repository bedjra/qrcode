import React from "react";

const Form = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Formulaire de questions</h1>
      <form>
        <div>
          <label>Question 1 : Votre nom ?</label>
          <input type="text" name="nom" placeholder="Entrez votre nom" />
        </div>
        <div>
          <label>Question 2 : Votre email ?</label>
          <input type="email" name="email" placeholder="Entrez votre email" />
        </div>
        <div>
          <label>Question 3 : Votre feedback ?</label>
          <textarea name="feedback" placeholder="Entrez votre réponse"></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Form;
