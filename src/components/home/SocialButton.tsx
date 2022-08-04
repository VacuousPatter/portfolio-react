// React
import { useEffect, useRef, useState } from 'react';

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

    const [styleBackgroundColor, setStyleBackgroundColor] = useState(
        props.backgroundColor || actualTheme.palette.primary.main
    );
    const [styleColor, setStyleColor] = useState(
        props.textColor || actualTheme.palette.primary.contrastText
    );

    useEffect(() => {
        if (!buttonElement.current) return;
        const backgroundColor =
            props.backgroundColor || actualTheme.palette.primary.main;
        setStyleBackgroundColor(backgroundColor);
        buttonElement.current.style.setProperty(
            '--onhover-background-color',
            props.onHoverBackgroundColor || backgroundColor
        );

        const textColor =
            props.textColor || actualTheme.palette.primary.contrastText;
        setStyleColor(textColor);
        buttonElement.current.style.setProperty(
            '--onhover-text-color',
            props.onHoverTextColor || textColor
        );
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
            style={{
                backgroundColor: styleBackgroundColor,
                color: styleColor,
            }}
        >
            <Icon path={icon} size="24px"></Icon>
        </a>
    );
}
