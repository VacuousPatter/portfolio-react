// React
import { useEffect, useRef } from 'react';

// UI
import styles from './SocialButton.module.scss';
import Icon from '@mdi/react';

// Recoil
import { useRecoilValue } from 'recoil';
import { actualThemeState } from 'states/theme';

interface Props {
    backgroundColor?: string;
    textColor?: string;
    onHoverBackgroundColor?: string;
    onHoverTextColor?: string;
    showBackgroundOnlyOnHover?: Boolean;
    icon: string;
    url: string;
}

export default function SocialButton(props: Props) {
    const { icon, url } = props;
    const buttonElement = useRef<HTMLAnchorElement>(null);
    const actualTheme = useRecoilValue(actualThemeState);

    useEffect(() => {
        if (!buttonElement.current) return;
        const backgroundColor =
            props.backgroundColor || actualTheme.palette.primary.main;
        buttonElement.current.style.setProperty(
            '--background-color',
            props.showBackgroundOnlyOnHover ? 'transparent' : backgroundColor
        );
        buttonElement.current.style.setProperty(
            '--onhover-background-color',
            props.onHoverBackgroundColor || backgroundColor
        );

        const textColor =
            props.textColor || actualTheme.palette.primary.contrastText;
        buttonElement.current.style.setProperty('--text-color', textColor);
        buttonElement.current.style.setProperty(
            '--onhover-text-color',
            props.onHoverTextColor || textColor
        );

        buttonElement.current.classList.add('enable-transition-animation');
    }, [
        buttonElement,
        actualTheme,
        props.onHoverBackgroundColor,
        props.onHoverTextColor,
        props.backgroundColor,
        props.textColor,
        props.showBackgroundOnlyOnHover,
    ]);

    return (
        <a
            ref={buttonElement}
            href={url}
            target="_blank"
            className={styles.button}
            rel="noreferrer"
        >
            <Icon path={icon} size="24px"></Icon>
        </a>
    );
}
