/* eslint-env jquery */

const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
                <img src="../../images/t-icon.png" class="fa-fw" alt="tuiter"/>
            </a>
            <!-- continue rest of list, e.g., Home, Explore, Notifications, Messages, etc. -->
            <a href="../HomeScreen/index.html" 
                class="list-group-item list-group-item-action ${active === "home" ? "active" : ""}">
                <i class="fa-solid fa-house fa-fw"></i>
                <span class="d-none d-xl-inline">Home</span>
            </a>
            <a href="../ExploreScreen/index.html" 
            class="list-group-item list-group-item-action ${active === "explore" ? "active" : ""}">
                <i class="fa-solid fa-hashtag fa-fw"></i>
                <span class="d-none d-xl-inline">Explore</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${active === "notifications" ? "active" : ""}">
                <i class="fa-solid fa-bell fa-fw"></i>
                <span class="d-none d-xl-inline">Notifications</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${active === "messages" ? "active" : ""}">
                <i class="fa-solid fa-envelope fa-fw"></i>
                <span class="d-none d-xl-inline">Messages</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${active === "bookmarks" ? "active" : ""}">
                <i class="fa-solid fa-bookmark fa-fw"></i>
                <span class="d-none d-xl-inline">Bookmarks</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${active === "lists" ? "active" : ""}">
                <i class="fa-solid fa-list fa-fw"></i>
                <span class="d-none d-xl-inline">Lists</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${active === "profile" ? "active" : ""}">
                <i class="fa-solid fa-user fa-fw"></i>
                <span class="d-none d-xl-inline">Profile</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${active === "more" ? "active" : ""}">
                <span class="fa-stack fa-2xs fa-fw">
                    <i class="fa-solid fa-circle fa-stack-2x"></i>
                    <i class="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>
                </span>
                <span class="d-none d-xl-inline">More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tuit</a>
        </div>
    `);
}
export default NavigationSidebar;

$("#wd-navbar").append(NavigationSidebar())