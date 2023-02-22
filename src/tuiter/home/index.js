import React from "react";
import postsContentArray from "./posts-content.json";
import PostItem from "./post-item";

const HomeComponent = () => {
    return (
        <ul className="list-group">
            {
                postsContentArray.map(post =>
                    <PostItem key={post._id} post={post} />
                )
            }
        </ul>
    )
}

export default HomeComponent;