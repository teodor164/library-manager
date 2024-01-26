import {
    AppBar as MuiAppbar, Box,
    IconButton, Menu, MenuItem, Theme,
    Toolbar,
    Typography, useMediaQuery,
} from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider/useTheme';
import { AddBook } from '@/components/AddBook';

const AppbarSx = {
    '.title': {
        flexGrow: 1,
    },

    '.toolbar': {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },

    '.menu-icon': {
        ml: 2,
    },

    '@media (max-width: 600px)': {
        height: '80px',
        '.title': {
            fontSize: '1.8rem',
        },
        iconButton: {
            padding: '8px',
        },
    },
};

export const Appbar = () => {
    const { theme, toggleTheme } = useTheme();

    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MuiAppbar position="static" sx={AppbarSx}>
            <Toolbar className="toolbar">
                <Typography variant="h6" component="div" className="title">
                    Library Manager
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 2 }}
                            onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={toggleTheme}>
                                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                            </MenuItem>
                            <AddBook />
                        </Menu>
                    </>
                ) : (
                    <Box display="flex" gap={2}>
                        <AddBook />
                        <IconButton color="inherit" onClick={toggleTheme}>
                            {theme === 'light' ? (
                                <Brightness4Icon fontSize="medium" />
                            ) : (
                                <Brightness7Icon fontSize="medium" />
                            )}
                        </IconButton>
                    </Box>
                )}
            </Toolbar>
        </MuiAppbar>
    );
};
