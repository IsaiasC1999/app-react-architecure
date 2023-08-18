import { useState, useEffect } from "react";
import { getAllPost } from "../services/servicesPost";
import AlbumCard from "./AlbumCard";

function ListOfAlbumCard() {

    const [post, setpost] = useState(null);

    useEffect(() => {
        getAllPost().then(response => setpost(response))
    }, []);

    return (
        <div className="conteiner-album">

            {
                post === null ? <p>Cargando</p> : post.map(ele => {
                    return <AlbumCard key={ele.id} title={ele.title} descrip={ele.body} img={"https://via.placeholder.com/200/92c952"} />
                })
            }

        </div>
    );
}

export default ListOfAlbumCard;