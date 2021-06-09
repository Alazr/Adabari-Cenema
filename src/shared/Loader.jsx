import React from 'react';
import styled from 'styled-components';

function Loader(props) {
    return (
        <Load>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </Load>
    );
}

const Load = styled.div`
    /* min-height:50vh; */
    display: flex;
    justify-content: center;
    align-items: center;
`
export default Loader;