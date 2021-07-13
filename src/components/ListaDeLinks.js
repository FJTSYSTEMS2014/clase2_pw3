function ListaDeLinks(props) {
  return (
    
      
        props.lista.length > 0 && (
          <><h4>{props.titulo}</h4>
          <ul>
            {props.lista.map((elemento) => {
              return (
                <li>
                  <a href={elemento.resourceURI}>{elemento.name}</a>
                </li>
              );
            })}
          </ul></>)
      
      
    
  );
}

export default ListaDeLinks;
