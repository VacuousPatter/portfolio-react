// UI
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ParticlesBackground from 'components/background/Particles/Particles';
import SocialButton from 'components/home/SocialButton';
import WavesSeparator from 'components/separators/Waves/Waves';
import { useRecoilValue } from 'recoil';
import { useGetSocialNetworks } from 'states/hooks/socialNetworks/useGetSocialNetworks';
import { actualThemeState } from 'states/theme';
import styles from './Presentation.module.scss';

export default function PresentationSection() {
    const socials = useGetSocialNetworks();
    const actualTheme = useRecoilValue(actualThemeState);

    return (
        <section>
            <Box
                className={styles.section}
                sx={{
                    backgroundColor: 'custom.headerBackground',
                }}
            >
                <ParticlesBackground>
                    <Container maxWidth="xl">
                        <div className={styles.container}>
                            <article className={styles.article}>
                                <Typography variant="h3" component="h1">
                                    <strong>Olá, eu sou o Maycon</strong>
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    className={styles.descricao}
                                >
                                    Um desenvolvedor WEB Full Stack com
                                    experiência no desenvolvimento de websites
                                    com Javascript, Node.js, Vue.js e outras
                                    bibliotecas e frameworks interessantes.
                                </Typography>
                                <div className={styles['redes-sociais']}>
                                    <ul>
                                        {socials.map((social, i) => (
                                            <li key={i}>
                                                <SocialButton
                                                    icon={social.icon}
                                                    url={social.url}
                                                    backgroundColor={
                                                        social.style
                                                            .backgroundColor
                                                    }
                                                    textColor={
                                                        social.style.color
                                                    }
                                                    onHoverBackgroundColor={
                                                        actualTheme.palette
                                                            .primary.main
                                                    }
                                                    onHoverTextColor={
                                                        actualTheme.palette
                                                            .primary
                                                            .contrastText
                                                    }
                                                ></SocialButton>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.acoes}>
                                    <Grid container spacing={2}>
                                        <Grid item xs="auto">
                                            <Button
                                                variant="contained"
                                                size="large"
                                            >
                                                Fale Comigo
                                            </Button>
                                        </Grid>
                                        <Grid item xs="auto">
                                            <Button
                                                variant="contained"
                                                size="large"
                                            >
                                                Veja meu currículo
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            </article>
                            <div className={styles['imagem-apresentacao-div']}>
                                <picture>
                                    <img
                                        src="/assets/images/me/apresentacao.png"
                                        alt="Foto do Maycon"
                                    ></img>
                                </picture>
                            </div>
                        </div>
                    </Container>
                    <div className={styles.wavesSeparator}>
                        <WavesSeparator></WavesSeparator>
                    </div>
                </ParticlesBackground>
            </Box>
        </section>
    );
}
