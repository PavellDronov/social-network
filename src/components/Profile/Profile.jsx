import { Toolbar, Grid } from '@material-ui/core';
import React from 'react';
import profileImg from '../../images/profile-img.jpg';
import Post from '../Post/Post';
import mockData from '../mock-data/mock-data';

const Profile = () => {
    const posts = mockData.posts.reverse();
    const profileName = 'Паша Дронов';
    return (
        <div className='profile'>
            <Toolbar />
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className='profile__block'>
                        <div className='profile__img'>
                            <picture>
                                <img src={profileImg} alt='' />
                            </picture>
                        </div>
                    </div>
                    {/* <div className='profile__block'></div> */}
                </Grid>
                <Grid item xs={8}>
                    <div className='profile__block'>
                        <h1 className='profile__name'>{profileName}</h1>
                    </div>
                    {/* <h2 className='profile__posts'>Записи Паши</h2> */}
                    {posts.map((item, index) => {
                        return (
                            <Post
                                key={item.id}
                                text={item.text}
                                groupName={profileName}
                            />
                        );
                    })}
                </Grid>
            </Grid>
        </div>
    );
};

export default Profile;
