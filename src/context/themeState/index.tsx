import { createContext, useState } from "react";
import { IThemeContextProps, IThemeContextProviderProps } from "./interface";

export const ThemeContext = createContext<IThemeContextProps>(
    {} as IThemeContextProps
);

export function ThemeContextProvider({
    children,
}: IThemeContextProviderProps): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('dark-mode') ? true : false)

    const changeThemeMode = (isDark: boolean) => {
        if (!isDark) {
            setIsDarkMode(false)
            localStorage.removeItem('dark-mode')
        }
        else {
            setIsDarkMode(true)
            localStorage.setItem('dark-mode', "true")
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                isDarkMode,
                setIsDarkMode,
                changeThemeMode
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}