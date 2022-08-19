function Booking(){
    return(
        <div id="bookingPage">
            <br/>
            <p>Booking Page</p>
            <form action="mailto:cordrepayne@gmail.com" method="post" enctype="text/plain">
                Name:<br/>
                <input type="text" name="name" id="name" />
                <br/>
                Email:<br/>
                <input type="text" name="email" id="email" />
                <br/>
                Date:<br/>
                <input type="date" name="date" id="date"/>
                <br/>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default Booking;