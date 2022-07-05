import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import GroupIcon from '@material-ui/icons/Group';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStylesSidebar = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
}));

const Sidebar = () => {
    const classes = useStylesSidebar();
    return (
        <Drawer
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List className='sidebar-menu'>
                        <ListItem button key='1'>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary='Моя страница' />
                        </ListItem>
                        <ListItem button key='2'>
                            <ListItemIcon>
                                <CallToActionIcon />
                            </ListItemIcon>
                            <ListItemText primary='Новости' />
                        </ListItem>
                        <ListItem button key='3'>
                            <ListItemIcon>
                                <ChatIcon />
                            </ListItemIcon>
                            <ListItemText primary='Чат' />
                        </ListItem>
                        <ListItem button key='4'>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary='Группы' />
                        </ListItem>
                        <ListItem button key='5'>
                            <ListItemIcon>
                                <MusicNoteIcon />
                            </ListItemIcon>
                            <ListItemText primary='Музыка' />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
    );
};

export default Sidebar;
