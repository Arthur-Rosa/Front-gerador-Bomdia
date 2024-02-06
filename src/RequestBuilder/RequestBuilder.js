import React, { useState } from "react";
import "./RequestBuilder.css";

function RequestBuilder() {
  const [periodo, setPeriodo] = useState("manha");
  const [tipo, setTipo] = useState("png");

  const [carregando, setCarregando] = useState(false);
  const [tempoResposta, setTempoResposta] = useState(null);
  const [imagemBase64, setImagemBase64] = useState("");

  const enviarRequisicao = async () => {
    setCarregando(true);
    const urlMontada = `http://localhost:8080/api/generate?periodo=${periodo}&tipo=${tipo}`;

    const inicio = performance.now();
    try {
      const resposta = await fetch(urlMontada);
      if (!resposta.ok) throw new Error("Resposta da rede não foi ok");
      const textoBase64 = await resposta.text(); // Agora tratamos a resposta como base64
      setImagemBase64(textoBase64);
    } catch (erro) {
      console.error("Erro ao fazer a requisição: ", erro);
      setImagemBase64(""); // Limpa a imagem em caso de erro
    } finally {
      const fim = performance.now();
      setCarregando(false);
      setTempoResposta(fim - inicio);
    }
  };

  return (
    <>
      <h2 id="how-it-works">Montar Requisição da API</h2>
      <label>
        Período:
        <br />
        <br />
        <select
          className="select"
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
        >
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        Tipo de Imagem:
        <br />
        <br />
        <select
          className="select"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
        </select>
      </label>
      <br />
      <br />
      <button className="requisicao" onClick={enviarRequisicao}>
        Enviar Requisição
      </button>
      <div className="url-display">
        https://bomdia.com/api/generate?periodo=<span>{periodo}</span>&tipo=
        <span>{tipo}</span>
      </div>
      <br />
      <br />
      <div className="resposta">
        {carregando && <i className="fas fa-spinner fa-spin"></i>}

        {imagemBase64 && carregando === false && (
          <div className="url-display">
            <img
              src={`http://localhost:8080/api/generate?periodo=${periodo}&tipo=${tipo}`}
              alt="Resultado da Requisição"
            />
          </div>
        )}

        <br />

        {tempoResposta && (
          <div style={{ color: "#ffa500" }}>
            Tempo de Resposta: {tempoResposta.toFixed(0)} ms
          </div>
        )}
      </div>
    </>
  );
}

export default RequestBuilder;
