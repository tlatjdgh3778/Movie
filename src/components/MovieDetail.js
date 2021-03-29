import React, { useState } from "react";
import MovieGenre from "./MovieGenre";

// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle,faHeart } from "@fortawesome/free-regular-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieDetail({details, closeDetail}) {
    const [state, setState] = useState({
        id:'',
        good:false,
    })
    const null_img = "http://collaboparty1004.cafe24.com/xe/files/attach/images/139/483/d8c711f2e76e6be056d911b8fbed47fd.jpg";
    const poster_img = details.poster_path===null?null_img:`https://image.tmdb.org/t/p/original/${details.poster_path}`;
    const backdrop_img = details.backdrop_path===null?null_img :`https://image.tmdb.org/t/p/original/${details.backdrop_path}`;

    
    const onClick = (e) => {
        closeDetail();
    }
    const deleteLocal = () => {
        localStorage.removeItem(state.id);
        setState({id:'',good:false});
    }
    const pushLocal = () => {
        localStorage.setItem(details.id, JSON.stringify({
            id:details.id,
            title:details.title,
            poster_img:poster_img,
        }));
        setState({id:details.id, good:true});

    }
    return(
        // detail 페이지 부분
        <div className="detailContainer">
            <div className="backdropContainer"> 
                <img className="backdropImg" src={backdrop_img} alt={details.title}></img>
                <div className="backShadow"></div> 
            </div>
            <div className="movieDetail">
                <div><img className="detailImg" src={poster_img} alt={details.title}></img></div>
                {state.good?<button className="fillHeart" onClick={deleteLocal}>❤</button>:
                <button className="emptyHeart" onClick={pushLocal}><FontAwesomeIcon icon={faHeart}/></button>}
                <button className="closeBtn" onClick={onClick}><FontAwesomeIcon icon={faTimesCircle}/></button>            
                <div className="detailInfo">
                    <div className="detailTitle">{details.title}</div>
                    <div className="detailGenres">
                        <span>장르 : </span>
                        <span>{details.genres.map((genre)=>{
                            return <MovieGenre key={genre.id} genre={genre.name}></MovieGenre>
                        })}</span>
                    </div>
                    <div className="detailRuntime">
                        <span>상영 시간 : </span>
                        <span>{details.runtime} 분</span>
                    </div>
                    <div className="detailDate">
                        <span>개봉일 : </span>
                        <span>{details.release_date}</span>
                    </div>
                    <div className="detailVote">평점 : {details.vote_average} / 10</div>
                    <div className="detailOverviewTitle">개요</div>
                    <div className="detailOverview">{details.overview}</div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;