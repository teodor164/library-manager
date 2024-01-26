import { useCallback, useContext } from 'react';
import { ThemeContext, Theme } from './ThemeProvider';

interface useThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme(): useThemeResult {
    const { theme = 'light', setTheme } = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme?.(newTheme);
    }, [theme, setTheme]);

    return {
        theme: theme || 'light',
        toggleTheme,
    };
}
