// UI
import styles from './LandingPageLayout.module.scss';
import { ThemeProvider, Paper, Box } from '@mui/material';
import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';

// Recoil
import { useRecoilValue } from 'recoil';
import { actualThemeState } from 'states/theme';

interface Props {
    children: React.ReactNode;
}

export default function LandingPageLayout({ children }: Props) {
    const actualTheme = useRecoilValue(actualThemeState);

    return (
        <div>
            <ThemeProvider theme={actualTheme}>
                <Header></Header>
                <Box
                    sx={{
                        borderRadius: 0,
                        backgroundColor: 'background.default',
                        color: 'text.primary',
                    }}
                >
                    <main className={styles.container}>{children}</main>
                </Box>
                <Footer></Footer>
            </ThemeProvider>
        </div>
    );
}
