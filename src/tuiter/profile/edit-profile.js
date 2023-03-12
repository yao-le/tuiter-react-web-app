import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {updateProfile} from "./profile-reducer";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);

    const [username, setUsername] = useState(profile.name);
    const [userbio, setUserbio] = useState(profile.bio);
    const [website, setWebsite] = useState(profile.website);
    const [location, setLocation] = useState(profile.location);
    const [birthdate, setBirthdate] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateProfileHandler = () => {
        const newProfile = {
            name: username,
            bio: userbio,
            website,
            location,
            dateOfBirth: birthdate
        }
        dispatch(updateProfile(newProfile));
        navigate("/tuiter/profile");
    }

    return (
        <div className="">
            <div className="d-flex flex-row">
                <div className="ms-3 me-4 d-flex flex-column justify-content-center">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg"></i>
                    </Link>
                </div>
                <div className="fw-bold fs-4 ms-3">
                    Edit Profile
                </div>

                <button type="button" className="btn btn-dark rounded-pill ms-auto px-3 me-3"
                        onClick={updateProfileHandler}>
                    <span className="fw-bold">Save</span>
                </button>

            </div>

            <div className="mt-2">
                <img src={`../../images/${profile.bannerPicture}`} className="w-100" alt="banner" />
            </div>

            <div className="d-flex flex-row mt-3 position-relative">
                <div className="wd-avatar-position">
                    <img src={`../../images/${profile.profilePicture}`} className="rounded-circle wd-img-150" alt="avatar"/>
                </div>
            </div>


            <div className="wd-margin-top-80 form-group border rounded px-1 py-2">
                <label htmlFor="name" className="text-muted ms-2 mb-1">Name</label>
                <input className="form-control border-0 shadow-none p-0 ms-2 w-75"
                       id="name" value={username}
                       onChange={(event) => setUsername(event.target.value)}/>
            </div>

            <div className="mt-4 form-group border rounded px-1 py-2">
                <label htmlFor="bio" className="text-muted ms-2 mb-1">Bio</label>
                <br/>
                <textarea className="border-0 shadow-none p-0 ms-2 wd-width-90"
                          id="bio" value={userbio}
                          onChange={(event) => setUserbio(event.target.value)}>
                </textarea>
            </div>

            <div className="mt-4 form-group border rounded px-1 py-2">
                <label htmlFor="location" className="text-muted ms-2 mb-1">Location</label>
                <input className="form-control border-0 shadow-none p-0 ms-2 w-75"
                       id="location" value={location}
                       onChange={(event) => setLocation(event.target.value)}/>
            </div>

            <div className="mt-4 form-group border rounded px-1 py-2">
                <label htmlFor="website" className="text-muted ms-2 mb-1">Website</label>
                <input className="form-control border-0 shadow-none p-0 ms-2 w-75"
                       id="website" value={website}
                       onChange={(event) => setWebsite(event.target.value)}/>
            </div>

            <div className="mt-4 py-2">
                <label htmlFor="dob" className="text-muted mb-1">Birth date · <span className="wd-fg-color-blue">Edit</span></label>
                <br/>
                <input type="date" className="border-0 shadow-none"
                       id="dob" value={birthdate}
                       onChange={(event) => setBirthdate(event.target.value)}/>
            </div>

            <div className="my-4 d-flex flex-row">
                <span>Switch to professional</span>
                <i className="bi bi-arrow-right ms-auto"></i>
            </div>


        </div>
    )
}

export default EditProfileComponent;