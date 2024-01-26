import React, {
    createContext,
    FC,
    ReactNode,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { LOCAL_STORAGE_THEME_KEY } from '@/const/localStorage';
import { getTheme } from './theme';

export type Theme = 'light' | 'dark'

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
    } = props;

    const [theme, setTheme] = useState<Theme>(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    return (
        <MuiThemeProvider theme={getTheme(theme)}>
            <ThemeContext.Provider value={defaultProps}>
                {children}
            </ThemeContext.Provider>
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
