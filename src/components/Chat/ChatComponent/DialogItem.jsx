import { ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
    return (
        <ListItem component={NavLink} to={`/chat/${id}`}>
            <ListItemText primary={name} />
        </ListItem>
    );
};

export default DialogItem;