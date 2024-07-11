import styled, {css} from "styled-components";
import {CardThemes} from "../styles/CardThemes";


export const CardButton = styled.button <CardButtonProps>`
    width: 5.375rem;
    height: 1.875rem;
    border-radius: 0.3125rem;
    font-weight: ${CardThemes.fontWeight.main};
    font-size: ${CardThemes.fontSize.button};
    margin-left: 0.625rem;
    cursor: pointer;
    font-family: Inter;
    
    ${props => props.normal && css <CardButtonProps> `
        color: ${CardThemes.colors.accent};
        background-color: ${CardThemes.colors.main};
        border-color: ${CardThemes.colors.accent};

        &:hover {
            color: ${CardThemes.colors.main};
            background-color: ${CardThemes.colors.accent};
            border-color: ${CardThemes.colors.main};
        }

    `}
    ${props => props.colored && css <CardButtonProps> `
    color: ${CardThemes.colors.main};
        background-color: ${CardThemes.colors.accent};
        border-color: ${CardThemes.colors.main};
        &:hover {
            color: ${CardThemes.colors.accent};
            background-color: ${CardThemes.colors.main};
            border-color: ${CardThemes.colors.accent};
        }
    `}
   
`


type CardButtonProps = {
    normal?:boolean
    colored?:boolean
}