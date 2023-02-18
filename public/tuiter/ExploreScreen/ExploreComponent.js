import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <!--  Search Bar-->
           <div class="d-flex flex-row align-items-center">
                <div class="d-flex flex-row align-items-center
                            border rounded-pill bg-white w-100 me-3">

                    <div class="ms-3 me-2">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input type="text" class="form-control border-0 w-75 shadow-none bg-transparent"
                           placeholder="Search Tuiter">
                </div>

                <div class="ms-auto">
                    <a href="#"><i class="fa-solid fa-gear fa-2x"></i></a>
                </div>
            </div>
           
           <!--  Tab -->
           <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active p-0" href="for-you.html">
                        <div class="px-3">
                            <div class="py-2">For you</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link p-0" href="trending.html">
                        <div class="px-3">
                            <div class="py-2">Trending</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link p-0" href="news.html">
                        <div class="px-3">
                            <div class="py-2">News</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link p-0" href="sports.html">
                        <div class="px-3">
                            <div class="py-2">Sports</div>
                        </div>
                    </a>
                </li>
                <li class="d-none d-md-block nav-item">
                    <a class="nav-link p-0" href="entertainment.html">
                        <div class="px-3">
                            <div class="py-2">Entertainment</div>
                        </div>
                    </a>
                </li>
           </ul>
           
           <div class="mt-2">
                <!-- image-->
                <div class="position-relative">
                    <img src="../../images/spaceX.jpg" class="card-img-top" alt="img">
                    <div class="position-absolute bottom-0 start-0">
                        <h2 class="text-white ms-2">SpaceX's Starship</h2>
                    </div>
                </div>
                
                <div class="mt-2">
                    ${PostSummaryList()}
                </div>
           </div>
    `);
}

export default ExploreComponent;
