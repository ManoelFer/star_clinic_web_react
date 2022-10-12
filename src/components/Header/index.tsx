import { ToggleLightDarkTheme } from "../ToggleLightDarkTheme"

import { ButtonRegister, HeaderContainer, LeftActionsHeader, RightActionsHeader } from "./styles"

export const Header = () => {
  return (
    <HeaderContainer>
      <LeftActionsHeader>
        Star Clinic
      </LeftActionsHeader>


      <RightActionsHeader>
        <ToggleLightDarkTheme />
        <a>Sign in</a>
        <ButtonRegister>Register</ButtonRegister>
      </RightActionsHeader>

    </HeaderContainer>
  )
}

