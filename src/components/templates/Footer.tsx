// UI
import styles from './Footer.module.scss';
import { Box, Grid, Typography, Container, useMediaQuery } from '@mui/material';
import TrianglesSeparator from 'components/separators/TrianglesSeparator';

// Recoil
import { useRecoilValue } from 'recoil';
import { actualThemeState } from 'states/theme';
import HrRainbowSeparator from 'components/separators/HrRainbowSeparator';
import SocialButton from 'components/home/SocialButton';
import { useGetSocialNetworks } from 'states/hooks/socialNetworks/useGetSocialNetworks';

export default function Footer() {
    const actualTheme = useRecoilValue(actualThemeState);
    const mdUp = useMediaQuery(actualTheme.breakpoints.up('md'));
    const socialNeworks = useGetSocialNetworks();

    const developedWith = [
        {
            label: 'React',
            img: '/assets/images/logos/react.png',
            url: 'https://reactjs.org/',
        },
        {
            label: 'Next.js',
            img: '/assets/images/logos/nextjs.png',
            url: 'https://nextjs.org/',
        },
        {
            label: 'Typescript',
            img: '/assets/images/logos/typescript.png',
            url: 'https://www.typescriptlang.org/',
        },
    ];

    const linksWith = [
        {
            label: 'Gitlab',
            img: '/assets/images/logos/gitlab.png',
            url: 'https://reactjs.org/',
        },
    ];

    return (
        <Box
            color="text.primary"
            sx={{
                borderRadius: 0,
                backgroundColor: 'custom.footerBackground',
            }}
        >
            <TrianglesSeparator
                topBackgroundColor={actualTheme.palette.background.default}
                bottomBackgroundColor={
                    actualTheme.palette.custom.footerBackground
                }
            ></TrianglesSeparator>
            <footer className={styles.footer}>
                <Container fixed>
                    <Grid container justifyContent="center">
                        <Grid item container alignItems="center" spacing={2}>
                            <Grid item xs={12} md={8}>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    textAlign={mdUp ? 'left' : 'center'}
                                >
                                    <strong>Maycon</strong> Jesus
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                justifyContent={mdUp ? 'end' : 'center'}
                                xs={12}
                                md={4}
                                spacing={0.5}
                            >
                                {socialNeworks.map((social, i) => (
                                    <Grid item xs="auto" key={i}>
                                        <SocialButton
                                            icon={social.icon}
                                            url={social.url}
                                            showBackgroundOnlyOnHover
                                        ></SocialButton>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <HrRainbowSeparator />
                        </Grid>
                        <Grid item container xs={12} spacing={2}>
                            <Grid item container spacing={1} xs={12} md={6}>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="subtitle1"
                                        component="span"
                                    >
                                        Desenvolvido com:
                                    </Typography>
                                </Grid>
                                <Grid item container spacing={2} xs={12}>
                                    {developedWith.map((tech, i) => (
                                        <Grid item xs="auto" key={i}>
                                            <a
                                                href={tech.url}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <picture>
                                                    <img
                                                        alt={tech.label}
                                                        src={tech.img}
                                                        height="48"
                                                    />
                                                </picture>
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2} xs={12} md={6}>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="subtitle1"
                                        component="span"
                                    >
                                        Links:
                                    </Typography>
                                </Grid>
                                <Grid item container spacing={2} xs={12}>
                                    {linksWith.map((tech, i) => (
                                        <Grid item xs="auto" key={i}>
                                            <a
                                                href={tech.url}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <picture>
                                                    <img
                                                        alt={tech.label}
                                                        src={tech.img}
                                                        height="48"
                                                    />
                                                </picture>
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </Box>
    );
}
