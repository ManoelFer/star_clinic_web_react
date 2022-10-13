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