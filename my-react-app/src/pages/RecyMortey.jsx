import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
function RecyMortey() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <p>{character.name}</p>
          <Link to={`/CharacterDetails/${character.id}`}>
            <img src={character.image} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecyMortey;
