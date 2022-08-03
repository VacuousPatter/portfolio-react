import { useRecoilValue } from 'recoil';
import { actualThemeState } from 'states/theme';
import styles from './Waves.module.scss';

export default function WavesSeparator() {
    const {
        palette: {
            primary: { main: primary },
            secondary: { main: secondary },
            background: { default: background },
        },
    } = useRecoilValue(actualThemeState);

    return (
        <svg
            className={styles.waves}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
        >
            <defs>
                <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
            </defs>
            <g className={styles.parallax}>
                <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="0"
                    fill={primary + 'B3'}
                />
                <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="3"
                    fill={secondary + '80'}
                />
                <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="5"
                    fill={primary + '4D'}
                />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill={background} />
            </g>
        </svg>
    );
}
