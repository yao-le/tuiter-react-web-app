import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);

    return (
        <div className="">
            <div className="d-flex flex-row">
                <div className="ms-3 me-4 d-flex flex-column justify-content-center">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="d-flex flex-column">
                    <div className="fw-bold fs-4">{profile.name}</div>
                    <div className="text-muted">{profile.tuitsCount} Tuits</div>
                </div>
            </div>

            <div className="mt-2">
                <img src={`../../images/${profile.bannerPicture}`} className="w-100" alt="banner" />
            </div>

            <div className="d-flex flex-row mt-3 position-relative">
                <div className="wd-avatar-position">
                    <img src={`../../images/${profile.profilePicture}`} className="rounded-circle wd-img-150" alt="avatar"/>
                </div>
                <div className="ms-auto me-3">
                    {/* edit profile button */}
                    <Link to="/tuiter/edit-profile">
                        <button type="button" className="btn btn-light rounded-pill border">
                            <span className="fw-bold">Edit Profile</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="mt-5 ms-4">
                <div className="d-flex flex-column">
                    <div className="fw-bold fs-4">{profile.name}</div>
                    <div className="text-muted">{profile.handle}</div>
                </div>
            </div>

            <div className="mt-2 ms-4">
                <div>
                    {profile.bio}
                </div>
            </div>

            <div className="mt-2 ms-4 d-flex flex-row">
                <div>
                    <i className="bi bi-geo-alt"></i>
                    <span className="ms-2">{profile.location}</span>
                </div>
                <div className="ms-3">
                    <i className="bi bi-balloon"></i>
                    <span className="ms-2">Born {profile.dateOfBirth}</span>
                </div>
                <div className="ms-3">
                    <i className="bi bi-calendar3"></i>
                    <span className="ms-2">Joined {profile.dateJoined}</span>
                </div>
            </div>

            <div className="d-flex flex-row mt-2 ms-4">
                <div>
                    <span className="fw-bold">{profile.followingCount}</span>
                    <span className="ms-1">Following</span>
                </div>
                <div className="ms-3">
                    <span className="fw-bold">{profile.followersCount}</span>
                    <span className="ms-1">Followers</span>
                </div>
            </div>

        </div>
    )
}

export default ProfileComponent;