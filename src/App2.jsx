import { useState } from "react";
//Utilizando State
function App() {
  const [message, setMessage] = useState("Olá, Mundo")

  return (
    <div>
      <h1>{message}</h1>
      <button 
        onClick={() => {
        setMessage("Olá, foi clicado");
      }}
      >
        Mudar Menssagem
      </button>
    </div>
  );
}

export default App;