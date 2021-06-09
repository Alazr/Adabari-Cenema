import { createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        &::-webkit-scrollbar{
            width:0.5rem
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        @media screen and (max-width:500px){
            font-size: 58%;
        }
    }
    body{
        background: #000;
        letter-spacing: 1px;
        font-family: 'Montserrat', sans-serif;
    }
    h1{
        font-size: 4.4rem;
        font-family: 'Abril Fatface', cursive;
    }
    h2{
        font-size: 3.5rem;
        font-family: 'montserrat', sans-serif;
        font-weight: lighter;
        color: #fff;
    }
    h3{
        font-size: 2.7rem;
        color: #333;
        padding:1rem 0;
    }
    h4{
        font-size: 2rem;
        padding: 0.5rem;
        font-weight: lighter;
        color:#fff;
    }
    p{
        font-size: 1.6rem;
        color:#ccc;
        line-height: 1.5;
        padding-bottom: 0.5rem;
    }
    a{
        text-decoration:none;
        color: #fff;
    }
    img{
        display:block
    }
    input{
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }
   

`

export default GlobalStyles