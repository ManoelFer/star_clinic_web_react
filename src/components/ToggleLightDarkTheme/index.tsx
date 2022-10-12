
import { useContext } from "react"

import { Ball, Container, Input, Label, MoonIcon, SunIcon } from "./styles"

import { ThemeContext } from "@/context"


export const ToggleLightDarkTheme = () => {
    const { isDarkMode, changeThemeMode } = useContext(ThemeContext)

    return (
        <Container>
            <Input
                type="checkbox"
                id="checkbox"
                defaultChecked={isDarkMode}
                onClick={(e) => {
                    {/* @ts-ignore */ }
                    changeThemeMode(e.target.checked)
                }
                }
            />
            <Label htmlFor="checkbox">
                <MoonIcon />
                <SunIcon />
                <Ball checked={isDarkMode}></Ball>
            </Label>

        </Container>
    )
}
