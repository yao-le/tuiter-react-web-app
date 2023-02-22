import React from "react";

const WhoToFollowListItem = (
    {
        who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa-icon.jpg'}
    }
) => {
    return (
        <div className="list-group-item">
            <div className="d-flex flex-row align-items-center">
                <div className="w-20 me-3">
                    <img src={`/images/${who.avatarIcon}`} className="rounded-circle" width="48px" height="48px"
                         alt=""/>
                </div>

                <div className="w-60">
                    <div className="mb-0">
                        <span className="fw-bold">{who.userName}</span>
                        <i className="fas fa-check-circle me-1"></i>
                    </div>
                    <span className="mb-0">@{who.handle}</span>
                </div>

                <div className="ms-auto">
                    <button className="btn btn-primary text-white text-md rounded-pill">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WhoToFollowListItem;