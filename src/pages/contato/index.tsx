// UI
import styles from './contato.module.scss';
import {
    Card,
    CardContent,
    Container,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import Title from 'components/custom/Title/Title';
import LandingPageLayout from 'components/layouts/LandingPageLayout';
import ParticlesBackground from 'components/background/Particles/Particles';

// Recoil
import { useRecoilValue } from 'recoil';
import { socialNetworksState } from 'states/socialNetworks';
import Icon from '@mdi/react';

// Headers
import { getHead } from 'utils/head/headTags';

export default function ContatoPage() {
    const socialNetworks = useRecoilValue(socialNetworksState);
    return (
        <LandingPageLayout>
            {getHead({
                title: 'Contato',
            })}
            <section className={styles.section}>
                <ParticlesBackground>
                    <Container maxWidth="lg">
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <Title
                                    component="h1"
                                    variant="h3"
                                    title="Contato"
                                    upperCase
                                    bold
                                ></Title>
                            </Grid>
                            <Grid item container xs={12} spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <picture className={styles.image}>
                                        <img
                                            src="/assets/images/me/apresentacao.png"
                                            alt=""
                                        />
                                    </picture>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {socialNetworks.map((social, i) => (
                                        <a
                                            className={styles.contact}
                                            key={i}
                                            target="_blank"
                                            href={social.url}
                                            rel="noreferrer"
                                        >
                                            <Card
                                                className={styles.contactCard}
                                            >
                                                <Grid
                                                    container
                                                    spacing={2}
                                                    alignItems="center"
                                                >
                                                    <Grid item xs="auto">
                                                        <Icon
                                                            className="icon"
                                                            size={1.5}
                                                            path={social.icon}
                                                            color={
                                                                social.style
                                                                    .backgroundColor
                                                            }
                                                        ></Icon>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography
                                                            variant="h6"
                                                            component="h2"
                                                        >
                                                            {social.label}
                                                        </Typography>
                                                        <Typography
                                                            variant="subtitle1"
                                                            component="h3"
                                                        >
                                                            {social.username}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Card>
                                        </a>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </ParticlesBackground>
            </section>
        </LandingPageLayout>
    );
}
