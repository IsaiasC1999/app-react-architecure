function AlbumCard({img,title,descrip}) {
    return ( 
         <article className="album-card">
               <img  className="album-card__img" src={`${img}`} alt="description" />
               <h3 className="album-card__title">{title}</h3>
               <p className="album-card__description">{descrip}</p> 
         </article>
     );
}

export default AlbumCard;