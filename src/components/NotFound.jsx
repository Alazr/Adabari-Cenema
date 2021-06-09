import React from 'react';
import styled from 'styled-components';

function NotFound(props) {
    return (
        <Not>
            <h1>404:PageNotFound</h1>
        </Not>
    );
}

const Not = styled.div`
    h1{
        margin:5rem;
        color:white;
    }
`

export default NotFound;