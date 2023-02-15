import posts from "./posts.js"
import PostItem from "./PostItem.js";


const PostList = () => {
    return `
        <ul class="list-group list-group-flush">
            ${
            posts.map(p =>
            `<li class="list-group-item wd-bg-black">
                        ${PostItem(p)}
             </li>`
            ).join('')
            }
        </ul>
    `
}

export default PostList;