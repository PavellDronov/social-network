import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import icon from '../../images/social-icon.png';


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
                        Network
                    </Typography>
                    <Button
                        aria-controls='simple-menu'
                        aria-haspopup='true'
                        onClick={handleClick}
                    >
                        <Avatar alt='Pavel Dronov' src={icon} />
                    </Button>
                    <Menu
                        id='simple-menu'
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        className='popup-menu'
                    >
                        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                        <MenuItem onClick={handleClose}>
                            <SettingsIcon/>
                            <Typography variant="inherit">Настройки</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ExitToAppIcon/>
                            <Typography variant="inherit">Выйти</Typography>
                        </MenuItem>
                    </Menu>
                    
                </Toolbar>
            </AppBar>
    );
};

export default Header;
