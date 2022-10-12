import { createContext, useState } from "react";
import { IThemeContextProps, IThemeContextProviderProps } from "./interface";

export const ThemeContext = createContext<IThemeContextProps>(
    {} as IThemeContextProps
);

export function ThemeContextProvider({
    children,
}: IThemeContextProviderProps): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('dark-mode') ? true : false)

    return (
        <ThemeContext.Provider
            value={{
                isDarkMode,
                setIsDarkMode
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}