import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";


const TuitItem = ({post}) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <div className="list-group-item">

            <div className="mx-2 my-1 d-flex flex-row">
                <div className="d-flex flex-column">
                    <img width="48px" height="48px"
                         src={`../../images/${post.image}`}
                         className="rounded-circle"
                         alt="avatar"/>
                </div>

                <div className="ms-3 wd-width-90">
                    <div className="d-flex flex-row align-items-center">
                            <span className="fw-bold me-1">{post.userName}</span>
                            <i className="bi bi-check-circle-fill wd-fg-color-blue ms-1"></i>
                            <span className="ms-1"> {post.handle} · {post.time}</span>

                            <i className="bi bi-x-lg ms-auto"
                               onClick={() => deleteTuitHandler(post._id)}></i>
                    </div>

                    <div className="mb-3">
                        {post.tuit}
                    </div>

                    {/*icons*/}
                    <div className="w-full">
                        <TuitStats post={post} />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default TuitItem;