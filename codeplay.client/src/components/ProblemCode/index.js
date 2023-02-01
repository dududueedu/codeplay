import "./index.css";
import { useState } from "react";

function ProblemCode(props) {
  const infoPlaceholder =
    "Para fazer uma leitura do teclado, use sempre input(), sem nenhum valor nos parênteses.\nExemplo: int(input()) para ler um número e convertê-lo para inteiro.\n\nSeu programa não deve conter acentos.\nAs saídas do seu programa devem seguir o padrão exibido em 'Saída'.\n\nDivirta-se, bom jogo!";

    const [code, setCode] = useState("")

  return (
    <form id="form-problemcode">
      <div className="problemcode-container">
        <div className="text-problem"><p className="text-problem-p"> CODEPLAY </p></div>
        <textarea
          value={code} 
          onChange={e => setCode(e.target.value)}
          type="textarea"
          placeholder={infoPlaceholder}
          rows="5"
          cols="5"
          className="textarea-problem"
        />
        <div className="area-btn">
          <input
            type="button"
            onClick={() => setCode("")}
            className="input-problem"
            value="LIMPAR"
          />
          <button type="submit" value="enviar" className="btn-problem">
            ENVIAR
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProblemCode;
