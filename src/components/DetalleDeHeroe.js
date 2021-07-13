import ListaDeLinks from "./ListaDeLinks";

function DetalleDeHeroe(props) {
  console.log(props);
  return (
    <div id="heroContainer">
      <img
        className="HeroImg"
        src={props.heroe.thumbnail.path + "." + props.heroe.thumbnail.extension}
        alt={props.heroe.name}
      />
      <h2>{props.heroe.name}</h2>

      <ListaDeLinks lista={props.heroe.comics.items} titulo="Comics" />
      <ListaDeLinks lista={props.heroe.series.items} titulo="Series" />
      <ListaDeLinks lista={props.heroe.stories.items} titulo="Stories" />
      <ListaDeLinks lista={props.heroe.events.items} titulo="Events" />
    </div>
  );
}

export default DetalleDeHeroe;
