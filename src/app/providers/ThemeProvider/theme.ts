import { createTheme } from '@mui/material/styles';
import { Theme } from './ThemeProvider';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#e2761b',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#120f6b',
        },
        background: {
            default: '#f8f8f8',
            paper: '#ffffff',
        },
        text: {
            primary: '#2a2a2a',
            secondary: '#686868',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#cd6116',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#9a9cff',
        },
        background: {
            default: '#262626',
            paper: '#333333',
        },
        text: {
            primary: '#e6e6e6',
            secondary: '#adadad',
        },
    },
});

export const getTheme = (mode: Theme) => (mode === 'light' ? lightTheme : darkTheme);
