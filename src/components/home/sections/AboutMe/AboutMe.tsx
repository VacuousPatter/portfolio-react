import styles from './AboutMe.module.scss';
import { Container, Grid, Typography } from '@mui/material';
import Title from 'components/custom/Title/Title';

export default function AboutMeSection() {
    return (
        <section id="sobre" className={styles.section}>
            <Grid container flexDirection="column" justifyContent="center">
                <Grid item>
                    <Title
                        component="h2"
                        variant="h4"
                        title="Sobre mim"
                        upperCase
                        bold
                    ></Title>
                </Grid>
                <Grid className={styles.content} item xs={12}>
                    <Container>
                        <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={12} sm="auto">
                                <picture>
                                    <img
                                        className={styles.photo}
                                        src="/assets/images/me/sobre.png"
                                        alt="Foto minha"
                                    />
                                </picture>
                            </Grid>
                            <Grid item xs={12} sm>
                                <Typography
                                    className={styles.textAboutMe}
                                    variant="h6"
                                    component="p"
                                >
                                    Olá! Me chamo Maycon, tenho 18 anos e gosto
                                    de criar coisas para a internet,
                                    principalmente websites.
                                </Typography>
                                <Typography
                                    className={styles.textAboutMe}
                                    variant="h6"
                                    component="p"
                                >
                                    Meu interesse por desenvolvimento WEB
                                    começou em 2018 quando eu precisava de um
                                    site para um chatbot do discord que eu tinha
                                    desenvolvido, e desde então eu venho me
                                    aprimorando.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </section>
    );
}
