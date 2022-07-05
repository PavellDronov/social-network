import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';


const useStylesHeader = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

const Header = () => {
    const classes = useStylesHeader();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <AppBar position='fixed' className={classes.appBar}>
                <Toolbar className='header__content'>
                    <Typography variant='h6' noWrap>
                        Eight.Social
                    </Typography>
                    <Button
                        aria-controls='simple-menu'
                        aria-haspopup='true'
                        onClick={handleClick}
                    >
                        <Avatar alt='Remy Sharp' src='./static/images/1.jpg' />
                    </Button>
                    <Menu
                        id='simple-menu'
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                    
                </Toolbar>
            </AppBar>
    );
};

export default Header;
