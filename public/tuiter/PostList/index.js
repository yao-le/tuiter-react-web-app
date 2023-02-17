import posts from "./posts.js"
import PostItem from "./PostItem.js";


const PostList = () => {
    return `
        <ul class="list-group list-group-flush">
            ${
                posts.map(p => PostItem(p)).join('')
            }
        </ul>
    `
}

export default PostList;