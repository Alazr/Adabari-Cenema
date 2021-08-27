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
   
    .lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
.arrows {
  position: absolute;
  top: 55%;
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  /* transform: translate(-10%,-50%); */
  transition: all 0.2s ease;
  z-index: 2;
  cursor: pointer;
}

.arrows.prev {
  left: -2%;
}
.arrows.next {
  right: -2%;
  transform: rotate(180deg);
}

.arrows:hover {
  background: rgb(219, 0, 0);
}
.arrows img {
  width: 60%;
}

.red-nav {
  background: rgb(199, 0, 0);
}

.headernav {
}

.toggle .line1 {
  transform: rotateZ(45deg) translateY(350%);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotateZ(-45deg) translateY(-350%);
}


`

export default GlobalStyles