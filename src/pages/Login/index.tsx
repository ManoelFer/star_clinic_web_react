import { manFallingImg } from "@/assets"

import { BallOfLightBlue, BallOfLightYellow, Container, ContainerForm, ContainerImg, ContainerTitle } from "./styles"

export const Login = () => {
    return (
        <Container>
            <BallOfLightYellow />
            <ContainerTitle>
                <h1>
                    Sign in to <br />
                    Recharge Direct
                </h1>

                <span>
                    if you don't an account <br />
                    you can <a>Register here!</a>
                </span>
            </ContainerTitle>
            <BallOfLightBlue />
            <ContainerImg>
                <img src={manFallingImg} alt="man falling img"></img>
            </ContainerImg>
            <ContainerForm>MEU FORMULÁRIO</ContainerForm>
        </Container >
    )
}
