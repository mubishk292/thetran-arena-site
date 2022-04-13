import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function SwipeableTemporaryDrawer({ data }) {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                background: '#244C1D',
                height : '100%',
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,

            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box sx={{display : 'flex' , justifyContent : 'center' , paddingTop : '10%' }}>
                <img src='/images/flower.png' width='15%' />
            </Box>
            <List sx={{ paddingLeft: '8%' }}>
                {data.map((text, index) => (
                    <Box>
                        <ListItem button key={text}>
                            <a href={`#${text.toLowerCase()}`} style={{ color: '#2BFF00', textDecoration: 'none' }}>
                                <ListItemText primary={text} />
                            </a>
                        </ListItem>
                        <Divider />
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <Box >
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}  >
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MenuIcon style={{ color: '#ede7f6' }} />
                        </IconButton>
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </Box>
    );
}
