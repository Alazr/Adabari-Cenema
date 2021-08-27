import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router';
import star from '../img/star-full.png'
import styled from 'styled-components';
import { loadDetail } from '../actions/detailAction';
import {loadTvDetail} from '../actions/tvDetailAction'
import {getImage} from '../services/imageService'
import MoviesList from './MoviesList'
import Loader from '../shared/Loader';
import back from '../img/back.png'
import Nav from './nav';
import {motion} from 'framer-motion'
import {pageAnimation} from '../shared/pageAnimation'




function MovieDetail(props) {
    const dispatch = useDispatch()
    const his = useHistory()
    const {id} = useParams()
    const {pathname} = useLocation()
    const isMovie = pathname.split("/")[1] === "movie"
    const movieId = parseInt(id)
    // console.log(typeof(loc.pathname.split("/")[2]))
   
    
        useEffect(()=>{
            if(isMovie){
                dispatch(loadDetail(movieId))
            }
            else{
                dispatch(loadTvDetail(movieId))
                }
        },[])


    const {details:movie,isLoading,images,similar} = useSelector(state=>state.details)

    const handleBack = () =>{
        his.push("/")
    }


    if(isLoading)
    return <Loader/>

    
    return (
  
        <Detail variants={pageAnimation} exit="exit" initial="hidden" animate="show">
            <BackIcon onClick={handleBack}>
            <img src={back}  alt="back" />
            </BackIcon>
            <img className="mainPoster" src={getImage(movie.backdrop_path,"o")} alt="" />
            <Info>
                <InfoHead>
              <h2>{isMovie ?movie.title:movie.name}</h2>
                <div>
                <p>{movie.vote_average}</p>
                <img src={star} alt="star" />
                </div>
                </InfoHead>
              <p className="overview">{movie.overview}</p>
              <DetailInfo>
              <div><p><strong>Genre:</strong></p>
                  {movie.genres.map(i=> <span key={i.id}>{i.name}</span>)}</div>
               <div><p><strong>Release Date</strong></p>
                <span>{isMovie ? movie.release_date:movie.first_air_date}</span>
               </div>
               {
                   !isMovie && (
                       <>
               <div><p><strong>LastAir Date</strong></p>
                <span>{movie.last_air_date || "---"}</span>
               </div>
               <div><p><strong>Seasons</strong></p>
                <span>{movie.seasons.length}</span>
               </div>
               </>
               )

               }
              </DetailInfo>

              <Gallery>
                {
                    images.backdrops.map(pic=>(
                        <img key={pic.file_path} src={getImage(pic.file_path)} alt={pic.file_path} />
                    ) )
                    
                }
              </Gallery>
                  <MoviesList title={isMovie?"Similar Movies":"Similar Show"} data={similar} isLoading={isLoading}/>
            </Info>
            
        </Detail>
    
    );
}

const Detail = styled(motion.div)`
width:90%;
margin:auto;
    min-height:100vh;
    background:#fff;
    color:#333;
    .mainPoster{
        height: 80vh;
        width:100%;
        object-fit: cover;
        object-position: top;
    }
    /* display:flex; */

    h1,h2,h3,h4{
        color:#333;
        font-weight: bold;
    }
    p{
        color:#555;        /* display:inline; */
    }
    span{
        font-size:1.6rem;
        color:#333;
        margin: 0 0.3rem;
        text-align: center;
    }

    
`
const Info = styled.div`
    margin-top:5rem;

    .overview{
        letter-spacing: 1px;
        width:80%;
        padding-left: 3rem;
    }
    @media screen and (max-width:400px){
        
       width:100%;
  }
`

const InfoHead = styled.div`
    width:50%;
    display:flex;
    align-items: center;
    justify-content: space-between;

    h2{
        margin-bottom:3rem;
        padding-left:2rem;
    }
    p{
        font-weight: bold;
    }
    div{
        display: flex;
    img{
        width:2rem;
        height:2rem;
        margin-left:0.5rem
    }
    }
`
const DetailInfo = styled.div`
    display:flex;
    div{
    padding-left:1.5rem ;
        margin:2rem;
    
    }
    @media screen and (max-width:638px){
    flex-wrap: wrap;
       
  }
`

const BackIcon = styled.div`
    position: absolute;
    top:3%;
    left:8%;
    width:35px;
    height:35px;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 100%;
    transition: transform 0.2s ease;
    cursor:pointer;

    &:hover{
        transform: scale(1.1);
    }

    img{
        width:60%;
    }
    @media screen and (max-width:760px){
        width:30px;
        height:30px;
       /* left:10% */
  }


`

const Gallery = styled.div`
margin-top:3rem;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
gap: 0.5rem;
img{
    width:100%;
}
@media screen and (max-width:455px){
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
       
  }
`

export default MovieDetail;