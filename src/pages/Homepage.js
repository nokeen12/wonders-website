import Banner from "../components/Banner/Banner";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
function Homepage(){
    return(
        <div className="homepage">
            <div id="backgroundImg" />
            <div id="forefront">
                <Banner/>
                <div id="bodyContent">
                    <div id="leftBody">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et ex ut diam interdum feugiat et at metus. Vestibulum tincidunt fermentum facilisis. Aenean bibendum auctor ex ac consequat. Donec quis orci non libero aliquet pellentesque. Vivamus non commodo urna. Integer aliquam eros vel nisi elementum, et cursus eros efficitur. Aliquam bibendum velit ultricies lorem facilisis tincidunt. Nullam consectetur, diam non aliquam accumsan, eros orci condimentum sapien, non consequat tortor justo fringilla ligula. Nullam luctus finibus quam. Nulla aliquam leo ac laoreet finibus. Sed sapien ex, sodales ac elit eu, laoreet rhoncus augue. Praesent convallis iaculis eros in semper. Integer vitae lobortis urna. Suspendisse commodo at arcu vel eleifend.</p>
                    </div>
                    <div id="rightBody">
                        <h1 id="photoTitle">Gallery</h1>
                        <div id="rightBodyCarousel"><ImageCarousel/></div>
                    </div>
                </div>
                <div id="seeThrough"/>
                <div id="bodyContent2">
                    <h1>Services</h1>
                </div>
            </div>
        </div>
    )
}
export default Homepage;