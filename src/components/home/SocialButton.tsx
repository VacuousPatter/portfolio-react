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
    const actualTheme = useRecoilValue(actualThemeState);

    const [hover, setHover] = useState(false);
    const [styleBackgroundColor, setStyleBackgroundColor] = useState(
        props.backgroundColor || actualTheme.palette.primary.main
    );
    const [styleColor, setStyleColor] = useState(
        props.textColor || actualTheme.palette.primary.contrastText
    );
    const [styleHoverBackgroundColor, setStyleHoverBackgroundColor] = useState(
        props.backgroundColor || actualTheme.palette.primary.main
    );
    const [styleHoverColor, setStyleHoverColor] = useState(
        props.textColor || actualTheme.palette.primary.contrastText
    );

    useEffect(() => {
        const backgroundColor =
            props.backgroundColor || actualTheme.palette.primary.main;
        setStyleBackgroundColor(
            props.showBackgroundOnlyOnHover ? 'unset' : backgroundColor
        );
        setStyleHoverBackgroundColor(
            props.onHoverBackgroundColor || backgroundColor
        );

        const textColor =
            props.textColor || actualTheme.palette.primary.contrastText;
        setStyleColor(textColor);
        setStyleHoverColor(props.onHoverTextColor || textColor);
    }, [
        actualTheme,
        props.onHoverBackgroundColor,
        props.onHoverTextColor,
        props.backgroundColor,
        props.textColor,
        props.showBackgroundOnlyOnHover,
    ]);

    return (
        <a
            href={url}
            target="_blank"
            className={styles.button}
            rel="noreferrer"
            style={{
                backgroundColor: hover
                    ? styleHoverBackgroundColor
                    : styleBackgroundColor,
                color: hover ? styleHoverColor : styleColor,
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Icon path={icon} size="24px"></Icon>
        </a>
    );
}
