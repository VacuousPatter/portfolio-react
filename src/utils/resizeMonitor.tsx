import { useEffect, useLayoutEffect } from 'react';

interface Props {
    elementRef: React.RefObject<HTMLElement>;
    callback: (data: { height: number; width: number }) => void;
}
export default function UtilResizeMonitor(props: Props) {
    const testDimensions = () => {
        if (props.elementRef.current) {
            props.callback({
                height: props.elementRef.current.clientHeight,
                width: props.elementRef.current.clientWidth,
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
        window.addEventListener('resize', eventListenerCallback);

        return () => {
            window.removeEventListener('resize', eventListenerCallback);
        };
    }, []);

    return <></>;
}
