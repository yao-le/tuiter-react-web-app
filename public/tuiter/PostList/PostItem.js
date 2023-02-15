const PostItem = (post) => {
    return `
        <div class="mx-2 my-2 d-flex flex-row">
            <div>
                <img width="48px" height="48px"
                     src=${`../../images/${post.avatar}`}
                     class="rounded-circle"
                     alt="avatar">
            </div>

            <div class="ms-2">
                <div class="d-flex flex-row align-items-center">
                    <div>
                        <span class="text-white fw-bold">${post.userName}</span>
                        <i class="fa-solid fa-circle-check"></i>
                        <span class="text-muted ms-1"> @${post.handle} · ${post.time}</span>
                    </div>

                    <div class="ms-auto">
                        <i class="fa-solid fa-ellipsis text-muted"></i>
                    </div>
                </div>

                <!-- main content-->
                <p>${post.content}</p>
               
                <div class="wd-border-radius-20 border border-secondary" >
                     <img src=${`../../images/${post.image}`}
                          class="card-img-top ${post.hasAbstract ? "wd-border-radius-top-20 border-bottom border-secondary" 
                                                                    : "wd-border-radius-20"}" 
                          alt="image">
                     ${ post.hasAbstract?  
                        `<div class="mx-3 my-2">
                            <div>${post.title}</div>
                            <div class="text-muted">${post.abstract}</div>
                            <div class="text-muted">
                                <i class="fa-solid fa-link me-1"></i><span>${post.link}</span>
                            </div>
                        </div>` : ""
                     }
                </div>
               
                <!--  icons -->
                <div class="d-flex flex-row align-items-center mt-3">
                    <a href="#" class="d-flex flex-row align-items-center text-decoration-none text-muted w-25">
                        <i class="fa-solid fa-comment"></i>
                        <div class="ms-2">${post.commentNo}</div>
                    </a>

                    <a href="#" class="d-flex flex-row align-items-center text-decoration-none 
                    text-muted w-25">
                        <i class="fa-solid fa-retweet"></i>
                        <div class="ms-2">${post.retweetNo}</div>
                    </a>

                    <a href="#" class="d-flex flex-row align-items-center text-decoration-none 
                    text-muted w-25">
                        <i class="fa-solid fa-heart"></i>
                        <div class="ms-2">${post.likeNo}</div>
                    </a>

                    <a href="#" class="d-flex flex-row align-items-center text-decoration-none 
                    text-muted w-25">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </a>
                </div>
            </div>
        </div>  
    `
}

export default PostItem;