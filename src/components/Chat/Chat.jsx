import { Grid, List, ListItem, ListItemText, Toolbar } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const dialogItems = [
    {
        name: 'Alexsandr Lepezin',
        id: '1',
    },
    {
        name: 'Алина Логинова',
        id: '2',
    },
    {
        name: 'Богдан Толистинов',
        id: '3',
    },
    {
        name: 'Ирина Кубракова',
        id: '4',
    },
    {
        name: 'Александр Буянов',
        id: '5',
    },
    {
        name: 'Полина Романова',
        id: '6',
    },
    {
        name: 'Анастасия Вострикова',
        id: '7',
    },
];

const DialogItem = ({ name, id }) => {
    return (
        <ListItem component={NavLink} to={`/chat/${id}`}>
            <ListItemText primary={name} />
        </ListItem>
    );
};

const Chat = () => {
    return (
        <div className='chat'>
            <Toolbar />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <List className='dialog-items'>
                        {dialogItems.map(({ name, id }) => {
                            return (
                                <DialogItem
                                    key={id}
                                    name={name}
                                    id={id}
                                />
                            );
                        })}
                    </List>
                </Grid>
                <Grid item xs={9}>
                    <p>Сообщения</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Chat;
