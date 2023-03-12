import React from "react";
import {useDispatch} from "react-redux";
import {updateLike} from "./tuits-reducer";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();

    const clickLikeHandler = (post) => {
        dispatch(updateLike(post));
    }

    return (
        <div className="d-flex flex-row align-items-center mt-3">
            <a href="#" className="d-flex flex-row align-items-center text-decoration-none text-muted w-25">
                <i className="bi bi-chat-fill"></i>
                <div className="ms-2">{post.replies}</div>
            </a>

            <a href="#" className="d-flex flex-row align-items-center text-decoration-none
                    text-muted w-25">
                <i className="bi bi-repeat"></i>
                <div className="ms-2">{post.retuits}</div>
            </a>

            <a href="#" className="d-flex flex-row align-items-center text-decoration-none
                    text-muted w-25" onClick={() => clickLikeHandler(post)}>
                <i className={`bi bi-heart-fill ${post.liked? "text-danger" : ""}`}></i>
                <div className="ms-2">{post.likes}</div>
            </a>

            <a href="#" className="d-flex flex-row align-items-center text-decoration-none
                    text-muted w-25">
                <i className="bi bi-share-fill"></i>
            </a>
        </div>
    )

}

export default TuitStats;