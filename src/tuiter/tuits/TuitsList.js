import React from "react";
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";


const TuitList = () => {
    const postsArray = useSelector(state => state.tuits);
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <TuitItem key={post._id} post={post} />
                )
            }
        </ul>
    )
}

export default TuitList;