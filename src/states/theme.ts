import { createTheme, Theme } from '@mui/material';
import { atom, selector } from 'recoil';

declare module '@mui/material' {
    interface Palette {
        custom: {
            backgroundDrawer: string;
            headerBackground: string;
            footerBackground: string;
        };
    }
    // allow configuration using `createTheme`
    interface PaletteOptions {
        custom: {
            backgroundDrawer: string;
            headerBackground: string;
            footerBackground: string;
        };
    }
}

type themesNames = 'dark' | 'dark2';

export const allThemesState = atom<{
    [themeName in themesNames]: Theme;
}>({
    key: 'AllThemes',
    default: {
        dark: createTheme({
            typography: {
                fontFamily: "'Montserrat', sans-serif",
            },
            palette: {
                mode: 'dark',
                custom: {
                    backgroundDrawer: '#060708',
                    headerBackground: '#060708',
                    footerBackground: '#000000',
                },
                primary: {
                    main: '#D72323',
                    contrastText: '#ffffff',
                },
                secondary: {
                    main: '#F56217',
                    contrastText: '#000',
                },
                background: {
                    default: '#121417',
                    paper: '#121417',
                },
            },
        }),
        dark2: createTheme({
            breakpoints: {
                values: {
                    sm: 100,
                    xs: 50,
                    md: 1200,
                    lg: 1500,
                    xl: 1800,
                },
            },
            palette: {
                mode: 'dark',
                custom: {
                    backgroundDrawer: '#121417',
                    headerBackground: '#121417',
                    footerBackground: '#000000',
                },
                primary: {
                    main: '#ff00ff',
                    contrastText: '#ffffff',
                },
                background: {
                    default: '#060708',
                    paper: '#060708',
                },
            },
        }),
    },
    dangerouslyAllowMutability: true,
});

export const actualThemeNameState = atom<themesNames>({
    key: 'actualThemeNameState',
    default: 'dark',
});

export const actualThemeState = selector({
    key: 'actualThemeState',
    dangerouslyAllowMutability: true,
    get({ get }) {
        const actualThemeName = get(actualThemeNameState);
        const allThemes = get(allThemesState);

        return allThemes[actualThemeName];
    },
});
