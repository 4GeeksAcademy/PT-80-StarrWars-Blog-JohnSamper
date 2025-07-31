import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data.result.properties))
      .catch((err) => console.error("Error fetching character:", err));
  }, [id]);

  if (!character) return <p className="text-white">Loading character...</p>;

  const imageUrl = `https://i.pinimg.com/736x/62/ce/55/62ce5561877ab6a4587a2b7dedd4c5ca.jpg`;

  return (
    <div className="container text-white py-5">
      <div className="row bg-dark bg-opacity-75 rounded shadow-lg p-4">
       
        <div className="col-md-5 d-flex align-items-center justify-content-center mb-4 mb-md-0">
          <img
            src={imageUrl}
            alt={character.name}
            className="img-fluid rounded"
            style={{ maxHeight: "450px", objectFit: "cover" }}
          />
        </div>

    
        <div className="col-md-7">
          <h2 className="text-warning mb-3">{character.name}</h2>

          <div className="mb-3 border-start border-warning ps-3">
            <p className="mb-1"><strong>Gender:</strong> {character.gender}</p>
            <p className="mb-1"><strong>Birth Year:</strong> {character.birth_year}</p>
            <p className="mb-1"><strong>Height:</strong> {character.height} cm</p>
            <p className="mb-1"><strong>Mass:</strong> {character.mass} kg</p>
            <p className="mb-1"><strong>Eye Color:</strong> {character.eye_color}</p>
            <p className="mb-1"><strong>Skin Color:</strong> {character.skin_color}</p>
          </div>

          <div className="bg-warning text-dark rounded p-3 mt-4">
            <h5 className="mb-2">Character Overview</h5>
            <p style={{ margin: 0 }}>
              {character.name} is a key figure in the Star Wars universe, known for their unique traits and role in galactic events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};