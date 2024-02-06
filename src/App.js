import "./App.css";
import { useEffect, useRef, useState } from "react";
import RequestBuilder from "./RequestBuilder/RequestBuilder";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.body.removeAttribute("data-theme");
    }
  };

  useEffect(() => {
    const currentTheme = theme === "dark" ? "dark" : "light";
    document.body.setAttribute("data-theme", currentTheme);
  }, [theme]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-div">
          <a href="/">
            {theme === "light" ? (
              <img className="img-logo" src="./logo.png" />
            ) : (
              <img className="img-logo" src="./logo-white.png" />
            )}
          </a>
        </div>
        <div className="container-nav">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#how-it-works">Como Funciona</a>
            </li>
            <li>
              <a href="#" role="button">
                API Docs
              </a>
            </li>
            <li>
              <button class="theme-switcher" onClick={toggleTheme}>
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </li>
          </ul>
        </div>
        <div
          className={`container-nav-mobile ${isOpen ? "active" : "closed"}`}
          ref={navRef}
        >
          <i class="fa-solid fa-bars" onClick={toggleMenu}></i>

          <ul className={`nav-li-mobile `}>
            {theme === "light" ? (
              <img
                style={{ width: "200px" }}
                className="img-logo"
                src="./logo-white.png"
              />
            ) : (
              <img
                style={{ width: "200px" }}
                className="img-logo"
                src="./logo.png"
              />
            )}

            <a className="selected-text" href="#">
              <li className="selected">Inicio</li>
            </a>
            <li>
              <a href="#how-it-works">Como Funciona</a>
            </li>
            <li>
              <a href="#" role="button">
                API Docs
              </a>
            </li>
            <li>
              <button class="theme-switcher" onClick={toggleTheme}>
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </li>
          </ul>
        </div>
      </header>

      <hr />

      <main class="container">
        <h2>Bem-vindo à documentação da API de Saudações!</h2>
        <p>
          Nossa API permite que você gere imagens personalizadas com mensagens
          de "Bom Dia", "Boa Tarde" e "Boa Noite", adaptando-se ao período do
          dia especificado.
          <br />
          <br /> Além disso, oferecemos suporte a diferentes formatos de imagem,
          incluindo PNG e SVG, para atender às suas necessidades de
          desenvolvimento e design. <br />
          <br />
        </p>
        <h2>Como Começar</h2>
        <p>
          Para começar a usar a API de Saudações Diárias, você precisará fazer
          uma requisição HTTP GET, incluindo o parâmetro de consulta{" "}
          <span>periodo</span> para especificar o período do dia e{" "}
          <span>tipo</span> para o formato da imagem desejada. <br />
          <br /> A seguir, estão os passos básicos para realizar uma requisição:
        </p>
        <br />
        <br />
        <h2>
          <span>1</span> - Escolha o Período
        </h2>
        <p>
          Defina o valor do parâmetro <span>periodo</span> como{" "}
          <span>manha</span>, <span>tarde</span>, ou <span>noite</span> para
          receber uma imagem correspondente à saudação desejada.
        </p>
        <br /> <br />
        <h2>
          <span>2</span> - Selecione o Tipo de Imagem
        </h2>
        <p>
          Especifique o formato da imagem com o parâmetro <span>tipo</span>, que
          pode ser <span>png</span> ou <span>svg</span>.
        </p>
        <br />
        <p>Requisição para "Bom Dia" em PNG:</p>
        <pre>
          <code>GET /api/saudacoes?periodo=manha&tipo=png</code>
        </pre>
        <br />
        <p>Requisição para "Boa Tarde" em JPG:</p>
        <pre>
          <code>GET /api/saudacoes?periodo=tarde&tipo=jpg</code>
        </pre>
        <br />
        <p>Requisição para "Boa Noite" em PNG:</p>
        <pre>
          <code>GET /api/saudacoes?periodo=noite&tipo=png</code>
        </pre>
        <br />
        <RequestBuilder />
        <br />
        <br />
        <h2>Obrigado por Se Interessar!</h2>
        <br />
        <p>
          Estamos verdadeiramente gratos por seu interesse e tempo dedicado a
          explorar nosso projeto.
          <br />
          Sua curiosidade e entusiasmo são o que impulsionam a inovação e o{" "}
          <span>crescimento</span> contínuos da comunidade{" "}
          <span>open source</span>.
        </p>
        <p>
          Este projeto é mais do que apenas código, é uma oportunidade de
          colaborar, aprender e contribuir para uma ferramenta que pode
          beneficiar muitos.
          <br />
          <br />
          Se você se sente inspirado pela ideia de fazer parte de algo maior e
          deseja contribuir com suas habilidades, ideias ou simplesmente quer
          aprender mais sobre como a <span>API</span> funciona e como as imagens
          são criadas, nós sinceramente convidamos você a se juntar a nós!
        </p>
        <p>
          Cada contribuição, seja ela pequena ou grande, é valiosa e ajuda o
          projeto a evoluir e a atender melhor às necessidades da comunidade.
          <br />
          <br />
          Seja adicionando novas funcionalidades, melhorando a documentação ou
          reportando bugs, sua ajuda é <span>bem-vinda</span>.
        </p>
        <p>
          <span>
            Para ler mais sobre a API e como você pode contribuir para o
            projeto, clique no botão abaixo.
          </span>
        </p>
        <p>
          Você será direcionado para a nossa documentação da <span>API</span>,
          onde poderá encontrar todas as informações necessárias para começar.
        </p>
        <a href="#">
          <button className="selected api-docs">API Docs</button>
        </a>
        <br /><br />
        <p>
          Estamos ansiosos para ver suas contribuições e para recebê-lo(a) na
          nossa <span>comunidade</span>. 
          <br /><br />
          Juntos, podemos construir algo <span>incrível</span>!
        </p>
      </main>

      <footer>
        <div class="footer-container">
          {theme === "light" ? (
            <img className="img-logo" src="./logo.png" />
          ) : (
            <img className="img-logo" src="./logo-white.png" />
          )}
          <nav class="footer-nav">
            <a href="#inicio" class="footer-link">
              Início
            </a>
            <a href="#como-funciona" class="footer-link">
              Como Funciona
            </a>
            <a href="#api-docs" class="footer-link">
              API Docs
            </a>
          </nav>
          <div class="footer-social-icons">
            <a
              href="https://www.linkedin.com/in/arthur-rosa-dev/"
              target="_blank"
              title="LinkedIn"
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://github.com/Arthur-Rosa/Gerador-de-BomDia.git"
              target="_blank"
              title="GitHub"
            >
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
          <p class="footer-rights">© Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
