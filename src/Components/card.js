export default function Card({image, name, id, handleClick}) {
    return(
        <div className="card" id={id} onClick={() => handleClick(id)}>
            <section className="img-container">
        <img src={image} alt={name + " from disney"}/>
            </section>
            <section className="name-container"> <p>{name}</p></section>
           
        </div >
    )
}