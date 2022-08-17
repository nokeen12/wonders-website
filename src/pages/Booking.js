import { Link } from "react-router-dom";
function Booking(){
    return(
        <div>
            <Link to="/">Back to homepage</Link>
            <br/>
            <p>Booking Page</p>
            <form action="mailto:cordrepayne@gmail.com" method="get" enctype="text/plain">
                <label for="name">Name:
                    <input type="text" name="name" id="name" />
                </label>
                <br/>
                <label for="email">Email:
                    <input type="text" name="email" id="email" />
                </label>
                <br/>
                <label for="date">Date:
                    <input type="date" name="date" id="date"/>
                </label>
                <br/>
                <input type="submit" name="submit" value="Book"/>
            </form>
        </div>
    )
}

export default Booking;