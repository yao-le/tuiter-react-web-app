import React from "react";

const PostItem = ({post}) => {
    const imgBorderClass = post.hasAbstract ? "wd-border-radius-top-20 border-bottom"
        : "wd-border-radius-20";

    return (
        <div className="list-group-item">

            <div className="mx-2 my-1 d-flex flex-row">
                <div className="d-flex flex-column">
                    {post.showRetweet ? <i className="bi bi-repeat ms-auto"></i> : ""}

                    <img width="48px" height="48px"
                         src={`../../images/${post.avatar}`}
                         className="rounded-circle"
                         alt="avatar"/>
                </div>

                <div className="ms-3">

                    {post.showRetweet ? <div className="text-muted fw-bold"><small>{post.userName} Retweeted</small></div> : ""}

                    <div className="d-flex flex-row align-items-center">

                        <div>
                            <span className="fw-bold me-1">{post.userName}</span>
                            <i className="bi bi-check-circle-fill wd-fg-color-blue"></i>
                            <span className="text-muted ms-1"> @{post.handle} · {post.time}</span>
                        </div>

                        <div className="ms-auto">
                            <i className="bi bi-three-dots text-muted"></i>
                        </div>
                    </div>

                    <div className="mb-3">
                        {post.content}
                        <span className="wd-fg-color-blue">{post.contentLink}</span>
                    </div>

                    <div className="wd-border-radius-20 border">
                        {post.showImage ? <img src={`../../images/${post.image}`}
                             className={"w-100 " + imgBorderClass}
                             alt="image"/> : ""}

                        {post.hasAbstract ?
                            <div className="mx-3 my-2">
                                <div className="d-flex flex-row align-content-center mb-1">
                                    <img src={`../../images/${post.abstractAvatar}`}
                                         className="rounded-circle wd-img-25 me-1" alt="avatar" />
                                    <span className="fw-bold me-1">{post.abstractUser}</span>
                                    <i className="bi bi-check-circle-fill wd-fg-color-blue"></i>
                                    <span className="text-muted ms-1"> @{post.abstractHandle} · {post.abstractTime}</span>
                                </div>
                                <div>{post.abstractContent}</div>
                            </div> : ""}
                    </div>

                    {/*icons*/}
                    <div className="d-flex flex-row align-items-center mt-3">
                        <a href="#" className="d-flex flex-row align-items-center text-decoration-none text-muted w-25">
                            <i className="bi bi-chat"></i>
                            <div className="ms-2">{post.commentNo}</div>
                        </a>

                        <a href="#" className="d-flex flex-row align-items-center text-decoration-none
                    text-muted w-25">
                            <i className="bi bi-repeat"></i>
                            <div className="ms-2">{post.retweetNo}</div>
                        </a>

                        <a href="#" className="d-flex flex-row align-items-center text-decoration-none
                    text-muted w-25">
                            <i className="bi bi-heart"></i>
                            <div className="ms-2">{post.likeNo}</div>
                        </a>

                        <a href="#" className="d-flex flex-row align-items-center text-decoration-none
                    text-muted w-25">
                            <i className="bi bi-upload"></i>
                        </a>
                    </div>

                    {post.showThread ?
                        <div className="wd-fg-color-blue mt-3">Show this thread</div> : ""
                    }
                </div>
            </div>

        </div>
    )
};

export default PostItem;