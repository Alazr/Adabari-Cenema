import React from 'react';
import styled from 'styled-components';

function SearchInput({data,onChange}) {
    return (
          <InputGroup>
            <input
              value={data}
              onChange={onChange}
              type="text"
              name="search"
              placeholder="Search movies here"
              className="search-input"
            />
            <Button className="button search-btn" type="submit">
                Search
                </Button>
          </InputGroup>

   
    );
}

const InputGroup = styled.div`
      width: 40rem;
  border: none;
  border-radius: 30px;
  display: flex;
  background: #fff;
  box-shadow:0 3px 10px rgba(0,0,0,0.3) ;
  .search-input{
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
  font-weight:400;
  width: 100%;
  border-radius: 30px;
  border: none;
  outline: 0;
  color: black;
  background: transparent;

  &::placeholder {
  color: #666;
  font-weight:400;
  @media screen and (max-width:780px){
    padding: 0.5rem 1.6rem;
  }
}

  .button {

}
  }
@media screen and (max-width:900px){
      width:30rem;
  }
@media screen and (max-width:512px){
      width:25rem;
  }
@media screen and (max-width:400px){
      width:16rem;
  }
`

const Button = styled.button`
      padding: 0.5rem 1rem;
  background: #da0000;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.4rem;
  margin: 2px;
  border-radius: 30px;

  img{
      width:90%;
  }
`

export default SearchInput;