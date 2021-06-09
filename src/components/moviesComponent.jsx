import React,{useEffect,useState} from 'react';
import MoviesList from './MoviesList'
import {loadGenres,loadByGenres} from '../actions/GenreAction'
import {useDispatch,useSelector} from 'react-redux'
import styled from 'styled-components';
import GenreInput from '../shared/genreInput';
import Nav from './nav';
import {motion} from 'framer-motion'
import {pageAnimation} from '../shared/pageAnimation'


function Movies(props) {

    const [genreData,setGenreData] = useState("")

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadGenres())
        dispatch({
            type:"Mobile",
            payload:{value:false}
        })
    },[])

    const {romantic,comedy,action,selectedGenre,selectedName,isLoading} = useSelector(state=>state.genres)
    

 
    const selectHandler = ({target}) =>{
        setGenreData(target.value)
        dispatch(loadByGenres(target.value.split(",")))
        
    }

    return (
        <div>
            <Nav type="redback"/>
            <Hero>
                    <GenreInput  selectHandler={selectHandler} genreData={genreData}/>
                <h1>Movies</h1>
            </Hero>
            {selectedGenre.length > 0 &&(<MoviesList isLoading={isLoading} title={selectedName} data={selectedGenre}/>)}
            <MoviesList isLoading={isLoading} title="Comedy" data={comedy}/>
            <MoviesList isLoading={isLoading} title="Action" data={action}/>
            <MoviesList isLoading={isLoading} title="Romantic" data={romantic}/>
        </div>
    );
}

const Hero = styled.div`
    width:95%;
    margin:3rem auto;
    text-align: center;
    display: flex;
    align-items: center;
    
    h1{flex:1;
        color:#fff;
        letter-spacing: 4px;
    }
   
`

export default Movies;