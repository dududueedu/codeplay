import "./index.css";

function ProblemCode(props) {
  const infoPlaceholder =
    "Ao ler a entrada, use sempre input(), sem nenhum valor dentro dos parênteses. Exemplo: int(input()) para ler um número e convertê-lo para inteiro.\nSeu programa não deve conter acentos. Caso contrário, o sistema irá apontar erro em sua solução.\nAs saídas do seu programa devem seguir o padrão exibido em 'Saída'\n\nDivirta-se, bom jogo!";

  return (
    <form id="form-problemcode">
      <div className="problemcode-container">
        <div className="text-problem"><p className="text-problem-p"> CODEPLAY: </p></div>
        <textarea
          onChange={(e) => e}
          type="textarea"
          placeholder={infoPlaceholder}
          rows="5"
          cols="5"
          className="textarea-problem"
        />
        <div className="area-btn">
          <input
            type="button"
            onClick={(e) => e}
            className="input-problem"
            value="Limpar"
          />
          <button type="submit" value="enviar" className="btn-problem">
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProblemCode;
