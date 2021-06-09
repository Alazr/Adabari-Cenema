import React, { useState,useEffect } from 'react';
import styled from 'styled-components'
import SearchInput from '../shared/searchInput'
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { searchedMovies } from '../actions/movieAction';
import {useDispatch, useSelector} from 'react-redux'

function Nav({type}) {

    const isRedBack = type === "redback"
    const hist = useHistory()
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const [data,setData] = useState("")
    const changeHandler = ({target}) =>{
        setData(target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(searchedMovies(data))
        hist.push(`/?search=${data}`)
    }
    const {isMobile} = useSelector(state=>state.isMobile)
    const burgerHandler = ()=>{
        if (isMobile){
            dispatch({
                type:"Mobile",
                payload:{value:false}
            })
        }else{
            dispatch({
                type:"Mobile",
                payload:{value:true}
            })
        }
    }



    // useEffect(()=>{
    //     if(!data)
    //     dispatch(searchedMovies(""))
    // },[])



    return (
        <div className="headernav">
             <NavBar className={isRedBack ? "red-nav":""}>
            <div className="logo">
                <h3><NavLink to="/">DEBARI</NavLink></h3>
            </div>
            <form onSubmit={submitHandler}>
                <SearchInput onChange={changeHandler} data={data}/>
            </form>
            <ListItems  className={isMobile ? "activeNav" : ""}>
                <li className={pathname === "/" ? "active" : ""}><NavLink to="/">Home</NavLink></li>
                <li className={pathname === "/movies" ? "active" : ""}><NavLink to="/movies">Movies</NavLink></li>
                <li className={pathname === "/tv"  ? "active" : ""}><NavLink to="/tv">Tv show</NavLink></li>
                <li className={pathname === "/discover" ? "active" : ""}><NavLink to="/discover">Discover</NavLink></li>
                {/* <li className="btn solid--btn"><a href="#">Login</a></li> */}

            </ListItems>
            <Burger onClick={burgerHandler} className={isMobile ? "toggle" : ""}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </Burger>
        </NavBar>
        </div>
    );
}


const NavBar = styled.div`

    &.red-nav {
        li::after{

            background: black;
        }
}
 h3{
        color:white;
        text-align:center;
        line-height: 1;
        font-family: 'Lobster', cursive;
        cursor: pointer;
        text-shadow: 3px 3px 5px rgba(0,0,0,0.2);

        
    }
    width:100%;
    margin:auto;
    padding:0 5rem;
    min-height:10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:512px){
      padding:0 2rem;
  }
    @media screen and (max-width:400px){
      padding:0 0.5rem;
  }
`
const ListItems = styled.div`
    z-index: 3;
    width:40rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;

    a{
        font-size: 1.4rem;
        text-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    }
    li{
        position: relative;
        padding-bottom: 3px;
        &.active::after{
            width:100%
        }
        &:hover::after{
      width:100%
  }
    }
    li::after {
  content: "";
  height: 2px;
  width: 0;
  background: red;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: 0.5s;
  
}
    @media screen and (max-width:1015px){
        width:30rem;
    }
    @media screen and (max-width:850px){
        width:27rem;
    }
    @media screen and (max-width:780px){
        position: fixed;
        top: 0;
        left:0;
        width:30%;
        height:100vh;
        flex-direction: column;
        justify-content: flex-start;
        background: linear-gradient(rgba(0,0,0,0.95),rgba(255,0,0,0.95));
        transform: translateX(-100%);
        transition: all 0.5s ease-in-out;

        li{
            margin:2rem 0;
            transition: transform 0.2s ease;
            &:hover{
                transform: scale(1.15);
            }
        &::after {
  content: "";
  height: 0;
  width: 0;
  }
        }
        
        
    }
    @media screen and (max-width:512px){
      width:50%
  }

    &.activeNav {
  transform: translate(0%);
}
   

`

const Burger = styled.div`
    display:none;
    cursor:pointer;
    @media screen and (max-width:780px){
        display: block;
    position: relative;
    z-index: 3;
  span {
    background: white;
    padding: 0.1rem 0.8rem;
    display: block;
    margin: 0.3rem 0rem;
  }

    }

`

export default Nav;