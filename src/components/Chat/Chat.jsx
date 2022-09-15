import { Grid, List, ListItem, ListItemText, Toolbar } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import mockData from '../mock-data/mock-data';

const DialogItem = ({ name, id }) => {
    return (
        <ListItem component={NavLink} to={`/chat/${id}`}>
            <ListItemText primary={name} />
        </ListItem>
    );
};

const Message = ({ content, id, me }) => {
    const classNames = me ? 'messages__item messages__item--me' : 'messages__item';
    return (
        <div className={classNames} id={id}>
            <p>{content}</p>
        </div>
    );
};

const Chat = () => {
    const dialogItems = mockData.dialogItems;
    const messageItems = mockData.messages;
    return (
        <div className='chat'>
            <Toolbar />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <List className='dialog-items'>
                        {dialogItems.map(({ name, id }) => {
                            return <DialogItem key={id} name={name} id={id} />;
                        })}
                    </List>
                </Grid>
                <Grid item xs={9}>
                    <div className='messages'>
                        {messageItems.map(({ content, id, me }) => {
                            return <Message content={content} id={id} me={me}/>;
                        })}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Chat;
