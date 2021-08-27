import React, { useEffect } from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux'
import {getImage} from '../services/imageService'


import Nav from './nav';
import { Link } from 'react-router-dom';

function Banner(props) {


    const {isLoading,popular} = useSelector(state=>state.movies)
    const prop= {
        "background": `linear-gradient(to top,rgba(0,0,0,1),transparent),url(${!isLoading && getImage(popular[2].poster_path,"b")})`,
        "backgroundRepeat" : "no-repeat",
        "backgroundPosition": "center"
        
    }

    return (
        <>
       {!isLoading && ( <Hero style={prop} >
       <Nav/>
        <Desc>
            {
                <>
                        <div>
               <h1>{popular[2].title}</h1>
               <p>{popular[2].overview}</p>
               </div>
               <button className="btn solid--btn btn--normal"><Link to={`movie/${popular[2].id}`}>Details</Link></button>
                 </>   
               
            }
           
        </Desc>
        </Hero>)}
        </>
    );
}


const Hero = styled.div`
    min-height:90vh;
    color:#fff;
    /* background-repeat: no-repeat;
    background-position: center; */
    /* background-size:cover; */
   
    .btn{
        margin:2rem;
        padding: 0.6rem 1.5rem;
        border: none;
        color:#fff;
    }
    .btn--normal{
        padding:0.8rem 2.8rem;
        font-size: 1.5rem;
        letter-spacing: 0.2rem;

    }
    .solid--btn{
        background-color:#f70000;
    }
    .trans--btn{
        border:1px solid #f70000;
        background-color: transparent;
    }
    

    .logo h1{
        line-height:1;
        text-align: center;
        span{
            font-weight: lighter;
        }
    }
`


const Desc = styled.div`
   
    
    position: absolute;
    top:60%;
    left:20%;
    transform: translate(-20%,-60%);
   
    p{
      margin-top:3rem;
      width:60%;
      overflow: hidden;

    }
    @media screen and (max-width:512px){
        p{
            width:100%
        }

        div{
        max-height:30rem;
    overflow: hidden;
    }
    }
`

export default Banner;