import React, { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import MoviesGrid from '../shared/moviesGrid'
import {loadDiscover,loadMoreDiscover} from '../actions/discoverAction'
import styled from 'styled-components'
import {useBottomScrollListener} from 'react-bottom-scroll-listener'
import Loader from '../shared/Loader';
import Nav from './nav';
function Discover(props) {
    const dispatch = useDispatch()
    const {discover,pageNum,isLoading} = useSelector(state=>state.discover)
    
    useBottomScrollListener(()=>{
        dispatch(loadMoreDiscover(pageNum))
        
    },{
        offset: 0,
  debounce: 200,
  debounceOptions: { leading: true },
  triggerOnNoScroll: false
    })

    useEffect(()=>{
        dispatch(loadDiscover())
        dispatch({
            type:"Mobile",
            payload:{value:false}
        })
    },[])


    return (
        <div>
            {
                isLoading ? <Loader/> :
                (
                    <>
                    {/* <Nav type="redback"/> */}
                    <MoviesGrid title="Discover" data={discover}/>
                    </>
                )
            }
        </div>
    );
}



export default Discover;