import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id))
    }

    return (
        <div className="list-group-item">

            <div className="mx-2 my-1 d-flex flex-row">
                <div className="d-flex flex-column">
                    <img width="48px" height="48px"
                         src={`../../images/${tuit.image}`}
                         className="rounded-circle"
                         alt="avatar"/>
                </div>

                <div className="ms-3 wd-width-90">
                    <div className="d-flex flex-row align-items-center">
                            <span className="fw-bold me-1">{tuit.username}</span>
                            <i className="bi bi-check-circle-fill wd-fg-color-blue ms-1"></i>
                            <span className="ms-1"> {tuit.handle} · {tuit.time}</span>

                            <i className="bi bi-x-lg ms-auto"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>

                    <div className="mb-3">
                        {tuit.tuit}
                    </div>

                    {/*icons*/}
                    <div className="w-full">
                        <TuitStats tuit={tuit} />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default TuitItem;