const WhoToFollowListItem = (who) => {
    return `
    <div class="list-group-item">
        <div class="d-flex flex-row align-items-center">
            <div class="w-20 me-3">
                 <img src=${`../../images/${who.avatarIcon}`}
                      class="rounded-circle" width="48px" height="48px" alt="java">
            </div>

            <div class="w-60">
                <div class="mb-0">
                    <span class="fw-bold">${who.userName}</span>
                    <i class="fas fa-check-circle me-1"></i>
               </div>
               <span class="mb-0">@${who.handle}</span>
            </div>

            <div class="ms-auto">
                <button class="btn btn-primary text-white text-md rounded-pill">
                    Follow
                </button>
            </div>
        </div>  
    </div>  
    `
};

export default WhoToFollowListItem;