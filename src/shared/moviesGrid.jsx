import React from 'react';
import Movie from '../components/Movie'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {pageAnimation} from '../shared/pageAnimation'


function MoviesGrid({title,data}) {
    return (
        <MoviesContainer variants={pageAnimation} exit="exit" initial="hidden" animate="show">
            <h2>{title}</h2>
            <hr />
        <MovieGrid>
            {
                data.map(mov=>
                   <Movie key={mov.id} movie={mov} />
                    )

            }
        </MovieGrid> 
        </MoviesContainer>
    );
}


const MovieGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    .img{
        width:100%;
        height:30rem;
    }
    /* margin-top: 3rem; */
    @media screen and (max-width:538px){
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
       
  }

`

const MoviesContainer = styled(motion.div)`
    width:95%;
    margin:4rem auto 0;
    /* min-height:40vh; */
    hr{
        margin: 1rem 1rem 3rem ;
        border-color: #c20000;
        
    }
`

export default MoviesGrid;