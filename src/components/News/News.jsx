import React from "react";

import Toolbar from '@material-ui/core/Toolbar';
import Post from '../Post/Post';

const News = ({posts}) => {
    const newPosts = posts.reverse();
    return (
        <>
            <Toolbar />
            {newPosts.map((item) => {
                return (
                    <Post
                        key={item.id}
                        text={item.text}
                        groupName={item.groupName}
                    />
                );
            })}
        </>
    )
};

export default News;
