const PostSummaryItem = (post) => {
    return `
        <!-- post -->
        <li class="list-group-item">
            <div class="d-flex flex-row mt-2">
                <div class="me-2 w-75">
                    <p class="mb-0 text-muted">${post.topic}</p>
                    <div class="d-flex flex-row align-items-center mb-0">
                        <span class="fw-bold me-1">${post.userName}</span>
                        <i class="fas fa-check-circle me-1"></i>
                        <span class="text-muted">- ${post.time}</span>
                    </div>
                    <p class="mb-0 fw-bold">
                        ${post.title}
                    </p>
                </div>
             
                <img class="ms-auto" width="100px" height="100px"
                     src=${`../../images/${post.image}`} alt=""/>
            </div>  
        </li>
    `
};

export default PostSummaryItem;