import React, { useRef } from 'react';
import Movie from './Movie'
import styled from 'styled-components'
import Loader from '../shared/Loader'
import Carousel from 'react-elastic-carousel'
import back from '../img/back.png'
import {motion} from 'framer-motion'
import {pageAnimation} from '../shared/pageAnimation'


function MoviesList({title,data,isLoading,type}) {

    const breakPoints = [
        {"width": 146, "itemsToShow": 1, "itemsToScroll":1 },
        {"width": 450, "itemsToShow": 2, "itemsToScroll":2 },
        {"width": 665, "itemsToShow": 3, "itemsToScroll":3 },
        {"width": 935, "itemsToShow": 4, "itemsToScroll":4 },
        {"width": 1140, "itemsToShow": 5, "itemsToScroll":5 },
        
    ]

    const carRef = useRef(null)

    if(!data || data.length === 0 ){
        return null
    }
     
    return (
        <MoviesRow variants={pageAnimation} exit="exit" initial="hidden" animate="show" >
            <h2>{title}</h2>
            <hr />
            {isLoading ? <Loader/> :
               (<>
                <MovieList>
                   <div className="arrows prev" onClick={()=>carRef.current.slidePrev()}>
                   <img className="prev-icon" src={back} alt="back" />
                   </div>
                    <Carousel ref={carRef} breakPoints={breakPoints} pagination={false} showArrows={false}> 
                        
                {
                    data.map(mov=>
                        <Movie key={mov.id} movie={mov} />
                        )
    
                    }
                    </Carousel>
                    <div className="arrows next" onClick={()=>carRef.current.slideNext()}>
                   <img className="next-icon" src={back} alt="next" />
                   </div>
            </MovieList>

             </>)

            }       
        </MoviesRow>
    );
}

const MovieList = styled.div`
    display: flex;
    overflow: auto;
    margin-top: 3rem;

    .next-icon,.prev-icon{
        width:60%;
    }
`

const MoviesRow = styled(motion.div)`
    position:relative;
    width:95%;
    margin:5rem auto 3rem;
    /* min-height:40vh; */
    hr{
        margin: 1rem 1rem 0 ;
        border-color: #c20000;
        
    }
`


export default MoviesList;