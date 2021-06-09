import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {getImage} from '../services/imageService'

function Movie({movie}) {
    const tv = movie.name
    const getYear = (date) =>{
        if(!date)
            return "--"
        return date.split("-")[0]
    }

    if(!movie.poster_path)
    return null

    return (
        <MovieCard>
            <Link to={tv ? `tv/${movie.id}`:`movie/${movie.id}`}>
           <img className="img" src={movie.poster_path && getImage(movie.poster_path)} alt={"movie_poster"} />
           <MovieStat>
               <h4>{tv ? movie.name : movie.title}</h4>
               <p>{tv ? getYear(movie.first_air_date):getYear(movie.release_date)}</p>
               </MovieStat> 
            </Link>
        </MovieCard>
    );
}


const MovieCard = styled.div`
        margin:0 1rem;
        /* height:35rem; */
        
    img{
        width:20rem;
        height:30rem;
        object-fit: cover;
        /* object-position: top; */
    }
`

const MovieStat = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4{
        font-size:1.8rem;
        white-space: nowrap;
        width:15ch;
        overflow: hidden;
  text-overflow: ellipsis;
        
    }
`

export default Movie;