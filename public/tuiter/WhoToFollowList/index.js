import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
        <div class="list-group">
            <div class="list-group-item">
                <span class="fw-bold">Who to follow</span>
            </div>
          
            ${
                who.map(w => WhoToFollowListItem(w)).join('')
            }   
        </div>
    `);
}

export default WhoToFollowList;