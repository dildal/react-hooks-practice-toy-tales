import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onToyDelete, onToyUpdate}) {
  const toyComponents = toys.map(toy => {
    return <ToyCard toy={toy} key={toy.id} onToyDelete={onToyDelete} onToyUpdate={onToyUpdate}/>
  })
  return (
    <div id="toy-collection">{toyComponents}</div>
  );
}

export default ToyContainer;
