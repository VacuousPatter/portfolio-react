import styles from './Particles.module.scss';

interface Props {
    children: React.ReactNode;
}

export default function ParticlesBackground(props: Props) {
    return (
        <div className={styles.backgroundContainer}>
            <div className={styles['particle-container']} aria-hidden="true">
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
            </div>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
}
