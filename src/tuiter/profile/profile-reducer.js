import { createSlice } from "@reduxjs/toolkit";

const profile = {
    name: 'John Doe',
    handle: '@johndoe',
    tuitsCount: 6177,
    profilePicture: 'lake.jpeg',
    bannerPicture: 'banner.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '1968-07-07',
    dateJoined: '2009-04',
    followingCount: 340,
    followersCount: 223
}


const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state.name = action.payload.name;
            state.bio = action.payload.bio;
            state.website = action.payload.website;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
