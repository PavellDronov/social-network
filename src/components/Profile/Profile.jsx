import { Toolbar, Grid } from '@material-ui/core';
import React from 'react';
import profileImg from '../../images/profile-img.jpg';

const Profile = () => {
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
                        
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Profile;
