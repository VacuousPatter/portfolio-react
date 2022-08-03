// UI
import styles from './Skills.module.scss';
import { Grid } from '@mui/material';
import Title from 'components/custom/Title/Title';
import { Container } from '@mui/system';
import SkillGroup from './SkillGroup/SkillGroup';
import Icon from '@mdi/react';

// Icons
import {
    mdiDatabase,
    mdiLanguageCss3,
    mdiLanguageHtml5,
    mdiLanguageJavascript,
    mdiLanguageTypescript,
    mdiNuxt,
    mdiPackageVariantClosed,
    mdiReact,
    mdiVuejs,
} from '@mdi/js';

export default function SkillsSection() {
    const skills = [
        {
            name: 'Linguagens de Programação',
            color: '#3498db',
            skills: [
                {
                    name: 'Javascript: 2 Anos',
                    icon: mdiLanguageJavascript,
                },
                {
                    name: 'TypeScript: 1 Ano',
                    icon: mdiLanguageTypescript,
                },
            ],
        },
        {
            name: 'Linguagens de Marcação',
            color: '#48dbfb',
            skills: [
                {
                    name: 'HTML 5: 3 Anos',
                    icon: mdiLanguageHtml5,
                },
                {
                    name: 'CSS 3: 3 Anos',
                    icon: mdiLanguageCss3,
                },
            ],
        },
        {
            name: 'Frameworks',
            color: '#9b59b6',
            skills: [
                {
                    name: 'Vue.js: 2 Anos',
                    icon: mdiVuejs,
                },
                {
                    name: 'Nuxt.js: 1,5 Anos',
                    icon: mdiNuxt,
                },
                {
                    name: 'React.js: 3 Meses',
                    icon: mdiReact,
                },
            ],
        },
        {
            name: 'Banco de Dados',
            color: '#00b894',
            skills: [
                {
                    name: 'MySQL: 2 Anos',
                    icon: mdiDatabase,
                },
                {
                    name: 'MondoDB: 3 Meses',
                    icon: mdiDatabase,
                },
            ],
        },
        {
            name: 'Outros',
            color: '#fbc531',
            skills: [
                {
                    name: 'Git: 2 Anos',
                    icon: mdiDatabase,
                },
                {
                    name: 'Gulp: 1 Ano',
                    icon: mdiPackageVariantClosed,
                },
            ],
        },
    ];
    return (
        <section id="skills" className={styles.section}>
            <Grid container flexDirection="column" justifyContent="center">
                <Grid item>
                    <Title
                        component="h2"
                        variant="h4"
                        title="Skills/Habilidades"
                        upperCase
                        bold
                    ></Title>
                </Grid>
                <Grid className={styles.content} item xs={12}>
                    <Grid container spacing={6} justifyContent="center">
                        {skills.map((skillGroup, i) => (
                            <Grid item key={i}>
                                <SkillGroup
                                    title={skillGroup.name}
                                    childrens={skillGroup.skills}
                                    color={skillGroup.color}
                                ></SkillGroup>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
}
