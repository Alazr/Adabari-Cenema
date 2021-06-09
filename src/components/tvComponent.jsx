import React,{useEffect,useState} from 'react';
import MoviesList from './MoviesList'
import {loadTvGenres,loadTvByGenres} from '../actions/tvGenreAction'
import {useDispatch,useSelector} from 'react-redux'
import styled from 'styled-components';
import GenreInput from '../shared/genreInput';
import Nav from './nav';


function TvComponent(props) {

    const [genreData,setGenreData] = useState("")

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadTvGenres())
        dispatch({
            type:"Mobile",payload:{
                value:false
            }
        })
    },[])

    const {crimeTv,comedyTv,actionTv,selectedTvGenre,selectedTvName,isLoading} = useSelector(state=>state.tvGenres)
    

 
    const selectHandler = ({target}) =>{
        setGenreData(target.value)
        dispatch(loadTvByGenres(target.value.split(",")))
        
    }

    return (
        <div>
            <Nav type="redback"/>
            <Hero>
                    <GenreInput type="T"  selectHandler={selectHandler} genreData={genreData}/>
                <h1>Tv Shows</h1>
            </Hero>
            {selectedTvGenre.length > 0 && (<MoviesList isLoading={isLoading} title={selectedTvName} data={selectedTvGenre}/>)}
            <MoviesList isLoading={isLoading} title="Action and Adventure" data={actionTv}/>
            <MoviesList isLoading={isLoading} title="Crime" data={crimeTv}/>
            <MoviesList isLoading={isLoading} title="Comedy" data={comedyTv}/>
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

export default TvComponent;