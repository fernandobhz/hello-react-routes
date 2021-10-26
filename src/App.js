import React, { useState } from "react";
import { HashRouter, Route, useParams, Link } from "react-router-dom";

function Soma({ a, b }) {
  return (
    <div>
      <h2>Soma</h2>
      <p>{Number(a) + Number(b)}</p>
    </div>
  );
}

function Multiplicacao({ a, b }) {
  return (
    <div>
      <h2>Multiplicação</h2>
      <p>{Number(a) * Number(b)}</p>
    </div>
  );
}

function UsaSoma() {
  const { a, b } = useParams();
  return <Soma a={a} b={b} />;
}

function UsaMultiplicacao() {
  const { a, b } = useParams();
  return <Multiplicacao a={a} b={b} />;
}

function App() {
  return (
    <>
      <HashRouter>
        <h1>Menu principal</h1>
        <Link to="/soma/10/200">Soma</Link><br />
        <Link to="/multiplicacao/10/200">Multiplicação</Link>

        <hr />
        <a href="/#/soma/10/200">Soma a href</a><br />
        <a href="/#/multiplicacao/10/200">Multiplicacao a href</a><br />

        <hr />
        <h1>Usando HashRouter</h1>

        <Route path="/soma/:a/:b" component={UsaSoma} />
        <Route path="/multiplicacao/:a/:b" component={UsaMultiplicacao} />
      </HashRouter>
      <hr />

      <h1>Usando Renderizacao Condicional</h1>
      {window.location.hash.startsWith("#/soma") && (
        <>
          <Soma
            a={window.location.hash.split("/").reverse()[0]}
            b={window.location.hash.split("/").reverse()[1]}
          />
        </>
      )}
      {window.location.hash.startsWith("#/multiplicacao") && (
        <>
          <Multiplicacao
            a={window.location.hash.split("/").reverse()[0]}
            b={window.location.hash.split("/").reverse()[1]}
          />
        </>
      )}
    </>
  );
}

export default App;
