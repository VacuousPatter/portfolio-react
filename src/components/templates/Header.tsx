// React
import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';

// Components
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
} from '@mui/material';
import Link from 'next/link';
import { mdiClose, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';

// Styles
import styles from './Header.module.scss';

// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { headerMenuDrawerOpenState } from 'states/global';
import { actualThemeState } from 'states/theme';
import UtilResizeMonitor from 'utils/resizeMonitor';
import UtilScrollMonitor from 'utils/scrollMonitor';

export default function Header() {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [showHeaderElevation, setShowHeaderElevation] = useState(false);
    const appBarElement = useRef(null);
    const appBarWrapper = useRef(null);

    const [drawerOpen, setDrawerOpen] = useRecoilState(
        headerMenuDrawerOpenState
    );
    const actualTheme = useRecoilValue(actualThemeState);

    const checkShowHeaderElevation = (positionY: number) => {
        if (positionY > headerHeight) {
            setShowHeaderElevation(true);
        } else {
            setShowHeaderElevation(false);
        }
    };

    const navItems = [
        {
            text: 'Sobre',
            to: '/#sobre',
        },
        {
            text: 'Skills',
            to: '/#skills',
        },
        {
            text: 'Contato',
            to: '/contato',
            highlight: true,
        },
    ];

    useEffect(() => {
        document.body.style.setProperty(
            '--header-height',
            headerHeight.toString() + 'px'
        );
    }, [headerHeight]);

    return (
        <div className={styles.wrapper} ref={appBarWrapper}>
            <UtilResizeMonitor
                elementRef={appBarElement}
                callback={({ height }) => setHeaderHeight(height)}
            />
            <UtilScrollMonitor
                elementRef={appBarWrapper}
                callback={({ offsetTop }) =>
                    checkShowHeaderElevation(offsetTop)
                }
            ></UtilScrollMonitor>
            <AppBar ref={appBarElement} elevation={showHeaderElevation ? 2 : 0}>
                <Box
                    sx={{
                        backgroundColor: 'custom.headerBackground',
                    }}
                >
                    <Toolbar>
                        <Link href="/">
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ marginRight: 'auto' }}
                            >
                                <strong>Maycon</strong> Jesus
                            </Typography>
                        </Link>
                        <Box>
                            {useMediaQuery(actualTheme.breakpoints.up('md')) &&
                                navItems.map((item, i) => (
                                    <Link key={i} href={item.to}>
                                        <Button
                                            href={item.to}
                                            variant={
                                                item.highlight
                                                    ? 'contained'
                                                    : 'text'
                                            }
                                            color={
                                                item.highlight
                                                    ? 'primary'
                                                    : 'inherit'
                                            }
                                        >
                                            {item.text}
                                        </Button>
                                    </Link>
                                ))}

                            {useMediaQuery(
                                actualTheme.breakpoints.down('md')
                            ) && (
                                <IconButton
                                    onClick={() => {
                                        setDrawerOpen(true);
                                    }}
                                >
                                    <Icon path={mdiMenu} size={1} />
                                </IconButton>
                            )}
                        </Box>
                    </Toolbar>
                </Box>

                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    PaperProps={{
                        color: 'custom.backgroundDrawer',
                        sx: {
                            backgroundColor: 'custom.backgroundDrawer',
                        },
                    }}
                >
                    <Box
                        sx={{
                            minHeight: '100%',
                            backgroundColor: 'custom.backgroundDrawer',
                        }}
                    >
                        <ListItem>
                            <ListItemText primary="Menu" />
                            <IconButton onClick={() => setDrawerOpen(false)}>
                                <Icon path={mdiClose} size={1}></Icon>
                            </IconButton>
                        </ListItem>
                        <List
                            sx={{
                                minWidth: '250px',
                            }}
                        >
                            {navItems.map((item, i) => {
                                if (item.highlight) {
                                    return (
                                        <ListItem key={i}>
                                            <Link href={item.to}>
                                                <Button
                                                    href={item.to}
                                                    variant="contained"
                                                    fullWidth={true}
                                                >
                                                    {item.text}
                                                </Button>
                                            </Link>
                                        </ListItem>
                                    );
                                } else {
                                    return (
                                        <Link key={i} href={item.to}>
                                            <ListItemButton
                                                href={item.to}
                                                key={i}
                                            >
                                                <ListItemText
                                                    primary={item.text}
                                                ></ListItemText>
                                            </ListItemButton>
                                        </Link>
                                    );
                                }
                            })}
                        </List>
                    </Box>
                </Drawer>
            </AppBar>
        </div>
    );
}
