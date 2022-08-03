// Components
import styles from './Title.module.scss';
import { Typography } from '@mui/material';

// Recoil
import { useRecoilValue } from 'recoil';
import { actualThemeState } from 'states/theme';

// React
import { useEffect, useRef } from 'react';

interface Props {
    title: string;
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'subtitle1'
        | 'subtitle2'
        | 'body1'
        | 'body2'
        | 'caption'
        | 'button'
        | 'overline';
    upperCase?: boolean;
    bold?: boolean;
}

export default function Title(props: Props) {
    const component = props.component || 'h1';
    const variant = props.variant || 'h1';

    const elementRef = useRef<HTMLDivElement>(null);
    const actualTheme = useRecoilValue(actualThemeState);

    useEffect(() => {
        if (!elementRef.current) return;
        elementRef.current.style.setProperty(
            '--bar-background-color',
            actualTheme.palette.primary.main
        );
    }, [actualTheme.palette.primary.main, elementRef]);

    return (
        <div ref={elementRef}>
            <Typography
                className={styles.text}
                variant={variant}
                component={component}
                sx={{
                    textTransform: props.upperCase ? 'uppercase' : undefined,
                    fontWeight: props.bold ? 'bold' : undefined,
                }}
            >
                {props.title}
                <div className={styles.bar}></div>
            </Typography>
        </div>
    );
}
