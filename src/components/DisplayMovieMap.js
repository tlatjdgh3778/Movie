import React from "react";

function DisplayMovieMap({result, getMovieID}) {
    
    const null_img = "http://collaboparty1004.cafe24.com/xe/files/attach/images/139/483/d8c711f2e76e6be056d911b8fbed47fd.jpg";
    const poster_img = result.poster_path===null?null_img:`https://image.tmdb.org/t/p/original/${result.poster_path}`;

    const onGetMovieID = () => {
        getMovieID(result.id);
    }
    return(
        <div className="Movies" onClick={onGetMovieID}>
            <img className="Movie_Poster" src={poster_img} alt={result.title}></img>
            <div className="Release_Date">{result.release_date.split('-')[0]}</div>
            <div className="Movie_Title">
                <p>{result.title}</p>
            </div>
        </div>
    );
}

export default DisplayMovieMap;