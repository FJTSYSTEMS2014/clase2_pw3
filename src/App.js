import "./styles.css";
import charactersInfo from "./data/marvel/characters.json";
import comicsInfo from "./data/marvel/comics.json";
import DetalleDeHeroe from "./components/DetalleDeHeroe";
import ListaDeLinks from "./components/ListaDeLinks";

export default function App() {
  console.log(charactersInfo.data.results[0]);
  return (
    <div className="App">

     <div><h1>Caracteres de Marvel</h1>
      <DetalleDeHeroe id="uno" heroe={charactersInfo.data.results[3]} /></div> 
      <div><h1>hhhh</h1>
      <DetalleDeHeroe id="dos" heroe={charactersInfo.data.results[1]} />
  
        </div>
    </div>
    
  );
}
