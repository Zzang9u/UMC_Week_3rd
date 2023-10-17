import React, { useState } from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({title, poster_path, vote_average, overview}){
    
    const tr = {display: 'block'};
    const fs = {display: 'none'};

    const [trfs, setTrfs] = useState(false);

    const mouseout = () => {
        setTrfs(false);
    };

    const mouseover = () => {
        setTrfs(true);
    };

    return(
        <div>
            <div className="movie-container" onMouseOver={mouseover} onMouseOut={mouseout}>
                <div className="inside_content" style={trfs?tr:fs}>
                            <h4>{title}</h4>
                            <span>{overview}</span>
                </div>
                <div className="imgbox">
                    <img id="inside_img" src={IMG_BASE_URL + poster_path} alt={title}/>
                </div>
                <div className="movie-info">
                    <h4>{title}</h4>
                    <span>{vote_average}</span>
                </div>
            </div>
        </div>
    )
}

export default Movie;