import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return (
        <div className="d-flex flex-row align-items-center mt-3 justify-content-around">
            <a href="#" className="d-flex flex-row align-items-center text-decoration-none
            text-muted wd-width-20">
                <i className="bi bi-chat-fill"></i>
                <div className="ms-2">{tuit.replies}</div>
            </a>

            <a href="#" className="d-flex flex-row align-items-center text-decoration-none
                    text-muted wd-width-20">
                <i className="bi bi-repeat"></i>
                <div className="ms-2">{tuit.retuits}</div>
            </a>


            <a href="#" className="d-flex flex-row align-items-center text-decoration-none
                    text-muted wd-width-20">
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))} className="bi bi-heart-fill text-danger"></i>
                <div className="ms-2">{tuit.likes}</div>
            </a>

            <a href="#" className="d-flex flex-row align-items-center text-decoration-none
                    text-muted wd-width-20">

                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                }))} className="bi bi-hand-thumbs-down-fill"></i>
                <div className="ms-2">{tuit.dislikes}</div>

            </a>

            <a href="#" className="d-flex flex-row align-items-center text-decoration-none
                    text-muted wd-width-20">
                <i className="bi bi-share-fill"></i>
            </a>
        </div>
    )

}

export default TuitStats;