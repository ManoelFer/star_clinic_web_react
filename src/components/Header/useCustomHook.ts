import { useContext } from "react";

import { ThemeContext } from "@/context"

import { IUseCustomHook } from "./interfaces";

const useCustomHook = (): IUseCustomHook => {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

    const changeThemeMode = () => {
        if (isDarkMode) {
            setIsDarkMode(false)
            localStorage.removeItem('dark-mode')
        }
        else {
            setIsDarkMode(true)
            localStorage.setItem('dark-mode', "true")
        }
    }

    return {
        changeThemeMode
    }
}

export default useCustomHook; 