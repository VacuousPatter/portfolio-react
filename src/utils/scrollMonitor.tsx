import { useEffect, useLayoutEffect } from 'react';

interface Props {
    elementRef: React.RefObject<HTMLElement>;
    callback: (data: { offsetTop: number }) => void;
}
export default function UtilScrollMonitor(props: Props) {
    const testDimensions = () => {
        if (props.elementRef.current) {
            props.callback({
                offsetTop:
                    window.scrollY -
                    props.elementRef.current.getBoundingClientRect().top,
            });
        }
    };

    useEffect(() => {
        testDimensions();

        let movementTimer: NodeJS.Timer | null = null;
        const RESET_TIMEOUT = 100;

        const eventListenerCallback = () => {
            if (movementTimer) {
                clearTimeout(movementTimer);
            }
            movementTimer = setTimeout(testDimensions, RESET_TIMEOUT);
        };
        window.addEventListener('scroll', eventListenerCallback);

        return () => {
            window.removeEventListener('scroll', eventListenerCallback);
        };
    }, []);

    return <></>;
}
