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

type themesNames = 'dark';

export const allThemesState = atom<{
    [themeName in themesNames]: Theme;
}>({
    key: 'AllThemes',
    default: {
        dark: createTheme({
            typography: {
                fontFamily: "'Montserrat', sans-serif",
                h1: {
                    margin: 'unset',
                },
                h2: {
                    margin: 'unset',
                },
                h3: {
                    margin: 'unset',
                },
                h4: {
                    margin: 'unset',
                },
                h5: {
                    margin: 'unset',
                },
                h6: {
                    margin: 'unset',
                },
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
