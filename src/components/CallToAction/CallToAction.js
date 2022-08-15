import { Link } from "react-router-dom";
import './CallToAction.css'

function CallToAction(){
    return(
        <Link className="calltoaction" to="/book-now">Book Now</Link>
    )
}

export default CallToAction;