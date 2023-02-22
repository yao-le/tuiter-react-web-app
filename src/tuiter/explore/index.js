import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return(
        <>
            <div className="d-flex flex-row align-items-center mb-2">
                <div className="d-flex flex-row align-items-center
                            border rounded-pill bg-white w-100 me-3">

                    <div className="ms-3 me-2">
                        <i className="bi bi-search"></i>
                    </div>
                    <input type="text" className="form-control border-0 w-75 shadow-none bg-transparent"
                           placeholder="Search Tuiter" />
                </div>

                <div className="ms-auto">
                    <a href="#"><i className="bi bi-gear-fill fs-2"></i></a>
                </div>
            </div>

            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active p-0" href="#">
                        <div className="px-3">
                            <div className="py-2">For you</div>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link p-0" href="#">
                        <div className="px-3">
                            <div className="py-2">Trending</div>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link p-0" href="#">
                        <div className="px-3">
                            <div className="py-2">News</div>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link p-0" href="#">
                        <div className="px-3">
                            <div className="py-2">Sports</div>
                        </div>
                    </a>
                </li>
                <li className="d-none d-md-block nav-item">
                    <a className="nav-link p-0" href="#">
                        <div className="px-3">
                            <div className="py-2">Entertainment</div>
                        </div>
                    </a>
                </li>
            </ul>

            <div className="position-relative mb-2">
                <img src="/images/spaceX.jpg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>

            <PostSummaryList/>
        </>
    );
};

export default ExploreComponent;
