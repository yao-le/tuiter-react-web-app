
import React, {useState} from "react";

const TuitStats = ({post}) => {
    const [liked, setLiked] = useState(post.liked); // boolean
    const [likes, setLikes] = useState(post.likes); // number

    const handleClickLike = () => {
        if (liked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setLiked(!liked);
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
                    text-muted w-25" onClick={handleClickLike}>
                <i className={`bi bi-heart-fill ${liked? "text-danger" : ""}`}></i>
                <div className="ms-2">{likes}</div>
            </a>

            <a href="#" className="d-flex flex-row align-items-center text-decoration-none
                    text-muted w-25">
                <i className="bi bi-share-fill"></i>
            </a>
        </div>
    )

}

export default TuitStats;