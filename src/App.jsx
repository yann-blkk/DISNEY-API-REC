import { useState, useEffect } from "react";
import { CharacterCard } from "./components/CharacterCard";
import './App.css';

export function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const fetchCharacters = async (currentPage) => {
    setLoading(true);

    try{

      const response = await fetch(`https://api.disneyapi.dev/character?page=${currentPage}&pageSize=12`);
      const data = await response.json();

      setCharacters(data.data || []);
      setTotalPages(data.info?.totalPages || 1);
     } catch (error) {
      console.error('Error ao buscar dados da API:', error);
     } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  fetchCharacters(page);
}, [page]);

return (
  <div className="container">
    <header>
      <h1>Personagens da Disney</h1>
    </header>
    
    {loading ? (
      <p className="loading">Carregando personagens sahur...</p>
    ) : (
      <main className="character-grid">
        {characters.map((char) => (
        <CharacterCard key={char._id} character={char}/>
        ))}
      </main>
    )}

    <footer className="pagination">
      <button
      onClick={() => setPage((prev) => Math.max(prev -1, 1))}
      disabled={page === 1}

      >
        Anterior
      </button>

      <span>Página {page} de {totalPages}</span>

      <button 
      onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={page === totalPages}
      >
        Próxima
      </button>
    </footer>
  </div>
);
}

export default App;
