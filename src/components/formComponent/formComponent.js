import React from 'react';
import styled from "styled-components";

import Footer from "../footerComponent/footercomponent";
import ListItems from "../listComponent/listComponent";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 650px;
    min-height: 300px;
    margin: auto;
    text-align: center;

    background: rgba(255, 255, 255, 0.67);
    border-radius: 8px;
`

const FormComponent = () => {
    return(
        <Wrapper>
            <ListItems />
            <Footer />
        </Wrapper>
    )
}

export default FormComponent;