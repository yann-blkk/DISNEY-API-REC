import s from '.card.module.css'

export const Card = (props) => {
    <div key={props.id} className={s.cards}>
        <img src={props.imageURL} alt={props.name}/>
        <h4>Nome: {props.name}</h4>
        <p>Filmes: {props.films}</p>
        <p>Shows de tv: {props.tvShows}</p>
        <p>Atrações: {props.parkAttractions}</p>
    </div>
}
