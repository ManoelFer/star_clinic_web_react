import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            backgroundColor: string,
            titleAndTextColor: string,
            linkAndButtonColor: string,
            backgroundButtonRegister: string,

            recoverTextColor: string,
            inputTextColor: string,
            iconInputColor: string,
            backgroundInputColor: string,
            lineSocialMediaColor: string,
            textSocialMediaColor: string,
            backgroundColorSocialMediaButton: string,

            toggleColorMoon: string,
            toggleColorSun: string,
            toggleColorBall: string,
            toggleColorBackground: string,

            ballOfLightYellow: string,
            ballOfLightBlue: string,
        },
        fonts: string[],
        fontSizes: {
            small: string,
            medium: string,
            large: string
        }
    }
}
