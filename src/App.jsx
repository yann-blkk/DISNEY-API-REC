import s from './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

import logo from '../public/logo.svg'
import arrowLeft from '../public/arrow-left.png'
import arrowRight from '../public/arrow-right.png'


function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  
  
  useEffect(() => {
    
    api.get(`/character?page=${page || 1}`).then((response) => {
      setData(response.data.data)
      console.log(response.data.data)
    }).catch((error) => {
      CompositionEvent.log("deu Ruim!", error)
      
    })
    
  }, [page])
  
  return (
    <>
    
    
    <nav>
      <img className={s.logo} src={logo} alt="Logo" />
      <button
    onClick={() => setPage((p) => Math.max(1, p - 1))}
     className={s.buttonSeta}>
      <div>
        <img src={arrowLeft} alt="" className={s.seta}/>
        <p>Anterior</p>
      </div>
    </button>
    
    <span>Página {page}</span>
    
    <button
    onClick={() => setPage((p) => p + 1)} className={s.buttonSeta}
    >
      <div>
        <img src={arrowRight} alt="" className={s.seta}/>
        <p>Próxima</p>
      </div>
    </button>
    </nav>
    
    <main>
      <div className={s.contents}>
      {data.map((item, index) => {
        return(
          
          <div key={item.id} className={s.cards}>
            <img src={item.imageUrl} alt={item.name} className={s.images}/>
            <h4 className={s.content}>name: {item.name}</h4>
            <p className={s.content}>Filmes: {item.films}</p>
            <p className={s.content}>Shows de tv: {item.tvShows}</p>
            <p className={s.content}>Atrações: {item.parkAttractions}</p>
          </div>
          
          
        )
      })}
      </div>
    </main>
    </>
  )
}

export default App