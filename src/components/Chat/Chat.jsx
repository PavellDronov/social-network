import { Grid, List, Toolbar } from '@material-ui/core';
import React from 'react';
import DialogItem from './ChatComponent/DialogItem';
import Message from './ChatComponent/Message';

const Chat = ({dialogItems, messages}) => {
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
                        {messages.map(({ content, id, me }) => {
                            return <Message content={content} id={id} me={me}/>;
                        })}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Chat;
