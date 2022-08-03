import Icon from '@mdi/react';
import { Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { actualThemeState } from 'states/theme';
import styles from './SkillGroup.module.scss';

interface Props {
    title: string;
    childrens: {
        icon: string;
        name: string;
    }[];
    color?: string;
}

export default function SkillGroup(props: Props) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const actualTheme = useRecoilValue(actualThemeState);

    useEffect(() => {
        const accentColor = props.color || actualTheme.palette.primary.main;
        if (!wrapperRef.current) return;
        wrapperRef.current.style.setProperty('--accent-color', accentColor);
    }, [actualTheme.palette.primary.main, props.color]);

    return (
        <div ref={wrapperRef} className={styles['skill-group']}>
            <Typography
                className={styles['skill-name']}
                variant="h5"
                component={'h3'}
            >
                {props.title}
            </Typography>
            <ul>
                {props.childrens.map((skill, i) => (
                    <li key={i}>
                        <Icon
                            size={1.5}
                            color="var(--accent-color)"
                            path={skill.icon}
                        ></Icon>
                        <Typography variant="body1" component="p">
                            {skill.name}
                        </Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
}
