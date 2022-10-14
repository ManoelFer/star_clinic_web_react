import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ContainerTitle = styled.div`
    width: 100%;
  
    text-align: left;
    line-height: 1.5vw;
    letter-spacing: 1px;

    h1 {
        font-family: ${({ theme }) => theme.fonts[1]};
    }

    span {
        a {
            color: ${({ theme }) => theme.colors.linkAndButtonColor};
            font-family: ${({ theme }) => theme.fonts[1]};
            cursor: pointer;
        }
    }
`
export const ContainerImg = styled.div`
    width: 100%;


    img {
        width: 100%;
    }
`
export const ContainerForm = styled.div`
    width: 100%;
`

export const BallOfLightYellow = styled.div`
    position: absolute;
    z-index: -1;
    top: 22%;
    left: 16%;
    filter: blur(100px);
    opacity: 0.25;

    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 200px;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.ballOfLightYellow}; 
    box-shadow: ${({ theme }) => theme.colors.ballOfLightYellow} 0px 30px 1vw 6vw;
`

export const BallOfLightBlue = styled.div`
    position: absolute;
    z-index: -1;
    right: 65%;
    top: 60%;
    filter: blur(100px);
    opacity: 0.2;

    width: 100%;
    height: 100%;
    max-width: 100px;
    max-height: 100px;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.ballOfLightBlue}; 
    box-shadow: ${({ theme }) => theme.colors.ballOfLightBlue} 0px 30px 1vw 4vw;
`



