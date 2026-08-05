import React from "react";

export function CharacterCard({ character }) {
    return (
        <div className="card">
            <img src={character.imageURL || 'https://via.placeholder.com/150'} alt="{character.name}"/>
            <h3>{character.name}</h3>
            {character.films && character.films.length > 0 && (
                <p><strong>Filmes: </strong>{character.films.slice(0, 2).join(', ')}</p>
            )}
        </div>
    );
}