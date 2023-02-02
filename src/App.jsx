import { Testimonio } from "./components/testimonio/Testimonio";
import { ContadorClicks } from "./components/contadorClicks/ContadorClicks";
import { Calculadora } from "./components/calculadora/Calculadora";
import "./App.css";
import { data } from "./data";
function App() {
  return (
    <div className="App">
      <div className="contenedor__principal">
        <h1>Práctica número 1 con React.js</h1>

        {data.map((item) => {
          return (
            <Testimonio
              img={item.img}
              key={item.id}
              nombre={item.nameStudent}
              pais={item.pais}
              cargo={item.profesion}
              empresa={item.empres}
              description={item.descroption}
            />
          );
        })}

        <h2>Práctica número 2 con React.js</h2>
        <p>Contador de clicks</p>
        <ContadorClicks />

        <h2>Práctica número 3 con React.js</h2>
        <p>Calculadora</p>
        <Calculadora />
      </div>
    </div>
  );
}

export default App;
