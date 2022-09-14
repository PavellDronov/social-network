import React from "react";

import Toolbar from '@material-ui/core/Toolbar';
import Post from '../Post/Post';
import mockData from '../mock-data/mock-data';

const posts = mockData.posts.reverse();

const News = () => {
    return (
        <>
            <Toolbar />
            {posts.map((item, index) => {
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
