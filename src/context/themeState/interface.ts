import { ReactNode } from "react";

export interface IThemeContextProps {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
    changeThemeMode: (isDark: boolean) => void;
}

export interface IThemeContextProviderProps {
    children: ReactNode;
}