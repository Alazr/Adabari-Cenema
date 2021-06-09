import React from 'react';
import styled from 'styled-components';

function GenreInput({selectHandler,type,genreData}) {

    if(type === "T"){
     return(   <div>
        <FormGroup>
            <label htmlFor="">Genres: </label>
            <select value={genreData} name="genre" id="genre" onChange={selectHandler}>
                <option value=""></option>
                <option value="16,Animation">Animation</option>
                <option value="18,Drama">Drama</option>
                <option value="10751,Family">Family</option>
                <option value="10765,Fantasy and Sci-Fi">Fantasy and Sci-Fi</option>
                <option value="10762,Kids">Kids</option>
                <option value="9648,Mystery">Mystery</option>
                <option value="10763,News">News</option>
                <option value="10764,Reality">Reality</option>
                <option value="10767,Talk">Talk</option>     
                <option value="10768,War and Politics">War and Politics</option>
            </select>
        </FormGroup>
</div>)
    }else{
        return (
            <div>
                    <FormGroup>
                        <label htmlFor="">Genres: </label>
                        <select value={genreData} name="genre" id="genre" onChange={selectHandler}>
                            <option value=""></option>
                            {/* <option value="28,Action">Action</option> */}
                            <option value="12,Adventure">Adventure</option>
                            <option value="16,Animation">Animation</option>
                            {/* <option value="35,Comedy">Comedy</option> */}
                            <option value="80,Crime">Crime</option>
                            <option value="18,Drama">Drama</option>
                            <option value="10751,Family">Family</option>
                            <option value="14,Fantasy">Fantasy</option>
                            <option value="36,History">History</option>
                            <option value="27,Horror">Horror</option>
                            <option value="10402,Music">Music</option>
                            <option value="9648,Mystery">Mystery</option>
                            {/* <option value="10749,Romance">Romance</option> */}
                            <option value="878,Science Fiction">Science Fiction</option>     
                            <option value="10752,War">War</option>
                        </select>
                    </FormGroup>
            </div>
        );
    }
    

  
}

const FormGroup = styled.div`
    label{
        color:#d8d8d8;
        font-size: 1.8rem;
        margin-right: 1rem;
    }
    select{
        padding: 0.3rem 0.5rem;
        border: 1px solid #fff;
        border-radius: 5px;

        font-size: 1.4rem;
        &:focus,&:active{
            outline: none;
        }
        /* background: none; */
    }
    option{
        padding:0.3rem;
    }
`
export default GenreInput;