import React,{useEffect,lazy,Suspense} from 'react';
import Movie from './Movie'
import Banner from './banner';
import MoviesList from './MoviesList'
import {loadDiscover} from '../actions/discoverAction'
import {loadMovies} from '../actions/movieAction'
import {useDispatch,useSelector} from 'react-redux'
import styled from 'styled-components';
import Loader from '../shared/Loader';
import SearchComponent from './searchComponent'
import queryString from 'query-string'
import { useLocation } from 'react-router';
import {motion} from 'framer-motion'
import {pageAnimation} from '../shared/pageAnimation'


function Home(props) {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadMovies())
        dispatch({
            type:"Mobile",
            payload:{
                value:false
            }
        })
    },[])

    const {search} = queryString.parse(useLocation().search)


    const {upcoming,popular,popularTv,tvOnAir,isLoading,searched,searchVal} = useSelector(state=>state.movies)

    if(isLoading){
        return <Loader/>
    }

    if(search){
        return <SearchComponent val={search} data={searched}/>
    }

    return (
        <div>
            <Banner/>
            <MoviesList title="Upcoming" type="M" data={upcoming} isLoading={isLoading}/>
            <MoviesList title="Popular" type="M" data={popular} isLoading={isLoading}/>
            <MoviesList title="Popular Tv Show" type="T" data={popularTv} isLoading={isLoading}/>
            <MoviesList title="On The Air" type="T" data={tvOnAir} isLoading={isLoading}/>
        </div>
    );
}


export default Home;