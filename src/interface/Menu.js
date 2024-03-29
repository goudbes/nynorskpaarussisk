import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { HashLink } from 'react-router-hash-link';
import HomeIcon from '@material-ui/icons/Home';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import '../stylesheets/style.css'

const ordklassar = {
    ordklassar: 'Части речи',
    substantiv: 'Существительное',
    pronomen: 'Местоимение',
    determinativ: 'Детерминатив',
    verb: 'Глагол',
    adjektiv: 'Прилагательное',
    adverb: 'Наречие',
    preposisjon: 'Предлог',
    konjunksjon: 'Сочинительный союз',
    subjunksjon: 'Подчинительный союз',
    interjeksjon: 'Междометие',
}

const drawerWidth = 270;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: 'rgba(77,88,99,0.3)',
        boxShadow: 'none'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    menuItem: {
        background: "inherit",
        '&:active': {
           background: "lightslategray",
           color: "white",
        },
         '&:hover': {
            background: "lightslategray",
            color: "white",
         },
      },
}));


export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClickAway = () => {
        handleDrawerClose();
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>

                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List><HashLink className="hash-link" key={'home'} smooth to={`#home`}>
                        <ListItem button key={'home'}><HomeIcon style={{ marginRight: "10px", color: '#c0c0c0' }} />
                            <ListItemText primary={'В начало'} />
                        </ListItem>
                    </HashLink>
                        <Divider />
                        <Router>
                            {Object.entries(ordklassar).map(([key, value]) => (
                                <HashLink className="hash-link" key={'k' + key} smooth to={`#${key}`}>
                                    <ListItem className={classes.menuItem} button key={'k' + key}>
                                        <BookmarkBorderIcon fontSize="default" style={{ marginRight: "10px", color: '#c0c0c0' }} />
                                        <ListItemText primary={value} />
                                    </ListItem>
                                </HashLink>
                            ))}
                        </Router>
                    </List>
                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >

                </main>
            </div>
        </ClickAwayListener>
    );
}
