import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function CharacterDetails() {
  const [characters, setCharacters] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div>
      {characters.name}
      <hr />
      {characters.status}
    </div>
  );
}

export default CharacterDetails;
