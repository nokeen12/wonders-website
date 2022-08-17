import Banner from "../components/Banner/Banner";
import CallToAction from "../components/CallToAction/CallToAction";
import WonderLogo from "../components/Logo/WonderLogo";
function Homepage(){
    return(
        <div className="homepage">
            <Banner/>
            <div id="section2">
                <div className="section2Child"><WonderLogo/></div>
                <div className="section2Child"><CallToAction/></div>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et ex ut diam interdum feugiat et at metus. Vestibulum tincidunt fermentum facilisis. Aenean bibendum auctor ex ac consequat. Donec quis orci non libero aliquet pellentesque. Vivamus non commodo urna. Integer aliquam eros vel nisi elementum, et cursus eros efficitur. Aliquam bibendum velit ultricies lorem facilisis tincidunt. Nullam consectetur, diam non aliquam accumsan, eros orci condimentum sapien, non consequat tortor justo fringilla ligula. Nullam luctus finibus quam. Nulla aliquam leo ac laoreet finibus. Sed sapien ex, sodales ac elit eu, laoreet rhoncus augue. Praesent convallis iaculis eros in semper. Integer vitae lobortis urna. Suspendisse commodo at arcu vel eleifend.
                </p>
                
            </div>
        </div>
    )
}
export default Homepage;