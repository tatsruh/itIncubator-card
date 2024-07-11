import React from 'react';
import './App.css';
import styled from "styled-components";
import {CardThemes} from "./styles/CardThemes";
import CardOnePic from './assets/CardOne.jpg';
import CardTwoPic from './assets/CardTwo.jpg';
import {CardImage} from "./components/CardImage";
import {CardTitle} from "./components/CardTitle";
import {CardInfo} from "./components/CardInfo";
import {CardButton} from "./components/CardButton";

function App() {
    return (
        <>
            <main>
                <MainContainer>
                    <CardContainer>
                        <CardImage src={CardOnePic}/>
                        <CardTitle>Desert</CardTitle>
                        <CardInfo>The desert stretches endlessly, with scorching sun, dry dunes, and vast
                            emptiness.</CardInfo>
                        <ContainerRow>
                            <CardButton colored>See More</CardButton>
                            <CardButton normal>Save</CardButton>

                        </ContainerRow>

                    </CardContainer>
                </MainContainer>
            </main>
        </>
    );
}

const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    justify-content: center;
    align-items: center
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    background-color: ${CardThemes.colors.main};
    border-radius: 1rem;
    width: 18.75rem;
    height: 21.87rem;
    gap: 1.25rem;
    padding-top: 0.625rem;
    padding-left: 0.625rem;
    &:last-child {
        gap: 1rem;
    }
`
const ContainerRow = styled.div`
    display: flex;
    flex-direction: row`


export default App;
