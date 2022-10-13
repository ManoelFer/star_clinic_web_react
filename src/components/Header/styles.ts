import styled from "styled-components";


export const HeaderContainer = styled.header`
    top: 0;
    position: fixed;

    width: 100%;
    max-width: 1320px;
    padding: 2vw 2vw;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ButtonRegister = styled.button`
    font-family: ${({ theme }) => theme.fonts[1]};
    color: ${({ theme }) => theme.colors.linkAndButtonColor};
    background-color: ${({ theme }) => theme.colors.backgroundButtonRegister};
    border-radius: 20px;
    width: 112px;
    height: 42px;
`


export const LeftActionsHeader = styled.div`
    font-family: ${({ theme }) => theme.fonts[1]};
`

export const RightActionsHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
`