
function validateRegistration() {

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var genm = document.getElementById("genm").checked;
    var genf = document.getElementById("genf").checked;
    var country = document.getElementById("country").value;
    var genre = document.querySelector('input[name="genres"]:checked');

    var errMsg = "";

    document.getElementById("register-success").textContent = "";

    var usernamePattern = /^[a-zA-Z0-9_]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^[0-9]{8,15}$/;

    // Empty field checks

    if (username == "") {
        errMsg += "Username cannot be empty.\n";
    }

    if (email == "") {
        errMsg += "Email address cannot be empty.\n";
    }

    if (phonenumber == "") {
        errMsg += "Phone number cannot be empty.\n";
    }

    if (password == "") {
        errMsg += "Password cannot be empty.\n";
    }

    if (cpassword == "") {
        errMsg += "Confirm password cannot be empty.\n";
    }


    // Username Validation

    if (username != "") {

        if (username.length < 5) {
            errMsg += "Username must have at least 5 characters.\n";
        }

        if (!username.match(usernamePattern)) {
            errMsg += "Username can only contain letters, numbers and underscores.\n";
        }

    }


    // Email Validation

    if (email != "") {

        if (!email.match(emailPattern)) {
            errMsg += "Please enter a valid email address.\n";
        }

    }


    // Phone Number Validation

    if (phonenumber != "") {

        if (!phonenumber.match(phonePattern)) {
            errMsg += "Phone number must contain 8 to 15 digits only.\n";
        }

    }


    // Password Validation

    if (password != "") {

        if (password.length < 10) {
            errMsg += "Password must contain at least 10 characters.\n";
        }

        if (!password.match(/[A-Z]/)) {
            errMsg += "Password must contain an uppercase letter.\n";
        }

        if (!password.match(/[a-z]/)) {
            errMsg += "Password must contain a lowercase letter.\n";
        }

        if (!password.match(/[0-9]/)) {
            errMsg += "Password must contain a number.\n";
        }

        if (!password.match(/[^a-zA-Z0-9\s]/)) {
            errMsg += "Password must contain a special character.\n";
        }

    }


    // Confirm Password Validation

    if (password != "" && cpassword != "") {

        if (password != cpassword) {
            errMsg += "Passwords do not match.\n";
        }

    }


    // Gender Validation

    if (genm == false && genf == false) {
        errMsg += "Please select a gender.\n";
    }


    // Genre Validation

    if (genre == null) {
        errMsg += "Please select at least one movie genre.\n";
    }


    // Country Validation

    if (country == "") {
        errMsg += "Please select a country.\n";
    }


    // Display Errors or Success Message

    if (errMsg != "") {

        alert(errMsg);
        return false;

    } else {

        document.getElementById("register-success").textContent =
            "Registration Successful!";

        return false;
    }

}



function validateBooking() {

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("emailaddress").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var movie = document.getElementById("movie").value;
    var screeningdate = document.getElementById("screeningdate").value;
    var screeningtime = document.getElementById("screeningtime").value;
    var tickets = document.getElementById("tickets").value;
    var tickettype = document.getElementById("tickettype").value;
    var billingemail = document.getElementById("billingemail").value;
    var voucher = document.getElementById("voucher").checked;
    var online = document.getElementById("online").checked;

    var errMsg = "";
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^[0-9]{10,}$/;

    /* Check Empty Fields */

    if (fullname == "") {
        errMsg += "Full name cannot be empty.\n";
    }

    if (email == "") {
        errMsg += "Email address cannot be empty.\n";
    }

    if (phonenumber == "") {
        errMsg += "Phone number cannot be empty.\n";
    }

    if (movie == "") {
        errMsg += "Please select a movie.\n";
    }

    if (screeningdate == "") {
        errMsg += "Please select a screening date.\n";
    }

    if (screeningtime == "") {
        errMsg += "Please select a screening time.\n";
    }

    if (tickets == "") {
        errMsg += "Please enter the number of tickets.\n";
    }

    if (tickettype == "") {
        errMsg += "Please select a ticket type.\n";
    }

    if (billingemail == "") {
        errMsg += "Billing email cannot be empty.\n";
    }

    if (email != "") {

    if (!email.match(emailPattern)) {
        errMsg += "Please enter a valid email address.\n";
    }

    }

    if (billingemail != "") {

        if (!billingemail.match(emailPattern)) {
            errMsg += "Please enter a valid billing email address.\n";
        }

    }

    if (phonenumber != "") {

    if (!phonenumber.match(phonePattern)) {
        errMsg += "Phone number must contain at least 10 digits only.\n";
    }

    }

    if (screeningdate != "" && screeningtime != "") {

    var screening = new Date(screeningdate + "T" + screeningtime);
    var today = new Date();

    if (screening < today) {
        errMsg += "Screening date and time cannot be in the past.\n";
    }

    }

    if (tickets != "") {

        if (tickets <= 0) {
            errMsg += "Number of tickets must be greater than 0.\n";
        }

    }

    if (voucher == false && online == false) {
    errMsg += "Please select a payment method.\n";
    }

    if (online == true) {

        var cardtype = document.getElementById("cardtype").value;
        var cardnumber = document.getElementById("cardnumber").value;

        if (cardtype == "") {
            errMsg += "Please select a card type.\n";
        }

        if (cardnumber == "") {
            errMsg += "Credit card number cannot be empty.\n";
        }

        if (cardnumber != "") {

            if (!cardnumber.match(/^[0-9]+$/)) {
                errMsg += "Credit card number must contain digits only.\n";
            }

            if (cardtype == "visa" || cardtype == "mastercard") {

                if (cardnumber.length != 16) {
                    errMsg += "Visa and Mastercard must contain 16 digits.\n";
                }

            }

            if (cardtype == "amex") {

                if (cardnumber.length != 15) {
                    errMsg += "Amex must contain 15 digits.\n";
                }

            }

        }

    }

    if (errMsg != "") {

        alert(errMsg);
        return false;

    } else {

        return true;

    }
}


function showPaymentFields() {

    var voucher = document.getElementById("voucher").checked;
    var online = document.getElementById("online").checked;

    if (voucher == true) {

        document.getElementById("voucherFields").style.display = "block";
        document.getElementById("cardFields").style.display = "none";

    } else if (online == true) {

        document.getElementById("voucherFields").style.display = "none";
        document.getElementById("cardFields").style.display = "block";

    } else {

        document.getElementById("voucherFields").style.display = "none";
        document.getElementById("cardFields").style.display = "none";
    }

}


function updateBookingCost() {

    var movie = document.getElementById("movie").value;
    var tickets = document.getElementById("tickets").value;

    var price = 0;

    if (movie == "BeforeSunrise") {
        price = 20;
    }
    else if (movie == "ET") {
        price = 18;
    }
    else if (movie == "ToyStory") {
        price = 16;
    }
    else if (movie == "MysticRiver") {
        price = 22;
    }
    else if (movie == "TheGame") {
        price = 22;
    }
    else if (movie == "TheDarkKnight") {
        price = 24;
    }
    else if (movie == "FightClub") {
        price = 22;
    }

    var total = price * tickets;

    if (tickets <= 0) {
        total = 0;
    }

    
    document.getElementById("ticketprice").textContent =
        price.toFixed(2);

    document.getElementById("ticketcount").textContent = tickets;

    document.getElementById("totalcost").textContent =
        total.toFixed(2);


}


function copyBillingEmail() {

    var sameemail = document.getElementById("sameemail").checked;
    var email = document.getElementById("emailaddress").value;

    if (sameemail == true) {

        document.getElementById("billingemail").value = email;
        document.getElementById("billingemail").readOnly = true;

    } else {

        document.getElementById("billingemail").readOnly = false;

    }

}


function prefillMovie() {

    var movie = document.getElementById("movie");

    var params = new URLSearchParams(window.location.search);
    var selectedMovie = params.get("movie");

    if (movie != null) {

        if (selectedMovie == "BeforeSunrise") {
            movie.value = "BeforeSunrise";
        }

        else if (selectedMovie == "ET") {
            movie.value = "ET";
        }

        else if (selectedMovie == "ToyStory") {
            movie.value = "ToyStory";
        }

        else if (selectedMovie == "MysticRiver") {
            movie.value = "MysticRiver";
        }

        else if (selectedMovie == "TheGame") {
            movie.value = "TheGame";
        }

        else if (selectedMovie == "TheDarkKnight") {
            movie.value = "TheDarkKnight";
        }

        else if (selectedMovie == "FightClub") {
            movie.value = "FightClub";
        }

        updateBookingCost();
    }

}


/* Movie Recommendation */

function recommendMovie() {

    var genre = document.getElementById("preferredgenre").value;
    var agegroup = document.getElementById("agegroup").value;
    var viewingpref = document.getElementById("viewingpref").value;

    var movie = "";
    var title = "";
    var moviegenre = "";
    var rating = "";

    if (genre == "" || agegroup == "" || viewingpref == "") {
        alert("Please select all your movie preferences.");
        return false;
    }


    // Select a movie based on preferences

    if (agegroup == "child") {

        if (genre == "sciencefiction" || viewingpref == "family") {
            movie = "ET";
        }
        else {
            movie = "ToyStory";
        }

    }

    else if (agegroup == "teen") {

        if (genre == "animation" || viewingpref == "family") {
            movie = "ToyStory";
        }
        else if (genre == "sciencefiction") {
            movie = "ET";
        }
        else if (genre == "action" || genre == "crime" ||
                 genre == "thriller") {
            movie = "TheDarkKnight";
        }
        else if (genre == "mystery") {
            movie = "TheGame";
        }
        else {
            movie = "ET";
        }

    }

    else if (agegroup == "adult") {

        if (viewingpref == "family") {

            if (genre == "sciencefiction") {
                movie = "ET";
            }
            else {
                movie = "ToyStory";
            }

        }

        else if (genre == "romance") {
            movie = "BeforeSunrise";
        }
        else if (genre == "sciencefiction") {
            movie = "ET";
        }
        else if (genre == "animation") {
            movie = "ToyStory";
        }
        else if (genre == "crime") {

            if (viewingpref == "friends") {
                movie = "TheDarkKnight";
            }
            else {
                movie = "MysticRiver";
            }

        }
        else if (genre == "mystery") {
            movie = "TheGame";
        }
        else if (genre == "action") {
            movie = "TheDarkKnight";
        }
        else if (genre == "thriller") {

            if (viewingpref == "solo") {
                movie = "FightClub";
            }
            else if (viewingpref == "friends") {
                movie = "TheDarkKnight";
            }
            else {
                movie = "TheGame";
            }

        }

    }


    // Set movie details

    if (movie == "BeforeSunrise") {
        title = "Before Sunrise";
        moviegenre = "Romance / Drama";
        rating = "M";
    }
    else if (movie == "ET") {
        title = "E.T. the Extra-Terrestrial";
        moviegenre = "Science Fiction / Family";
        rating = "PG";
    }
    else if (movie == "ToyStory") {
        title = "Toy Story";
        moviegenre = "Animation / Adventure / Comedy";
        rating = "G";
    }
    else if (movie == "MysticRiver") {
        title = "Mystic River";
        moviegenre = "Crime / Drama / Mystery";
        rating = "MA15+";
    }
    else if (movie == "TheGame") {
        title = "The Game";
        moviegenre = "Mystery / Thriller";
        rating = "M";
    }
    else if (movie == "TheDarkKnight") {
        title = "The Dark Knight";
        moviegenre = "Action / Crime / Thriller";
        rating = "M";
    }
    else if (movie == "FightClub") {
        title = "Fight Club";
        moviegenre = "Drama / Thriller";
        rating = "R18+";
    }


    // Display recommendation

    document.getElementById("recommended-title").textContent = title;
    document.getElementById("recommended-genre").textContent = moviegenre;
    document.getElementById("recommended-rating").textContent = rating;

    document.getElementById("recommended-booking").href =
        "booking.html?movie=" + movie;

    document.getElementById("recommendation-result").hidden = false;

    return false;
}




function init() {

    var registerForm = document.getElementById("registerForm");

    if (registerForm != null) {
        registerForm.onsubmit = validateRegistration;
    }

    var bookingForm = document.getElementById("booking-form");

    if (bookingForm != null) {
        bookingForm.onsubmit = validateBooking;
    }

    
    var voucher = document.getElementById("voucher");
    var online = document.getElementById("online");

    if (voucher != null && online != null) {

        voucher.onchange = showPaymentFields;
        online.onchange = showPaymentFields;

        showPaymentFields();
    }

    
    var movie = document.getElementById("movie");
    var tickets = document.getElementById("tickets");

    if (movie != null && tickets != null) {

        movie.onchange = updateBookingCost;
        tickets.oninput = updateBookingCost;

        prefillMovie();
    }

    
    var sameemail = document.getElementById("sameemail");
    var email = document.getElementById("emailaddress");

    if (sameemail != null && email != null) {

        sameemail.onchange = copyBillingEmail;
        email.oninput = copyBillingEmail;

        copyBillingEmail();
    }

    
    var recommendationForm = document.getElementById("recommendation-form");

    if (recommendationForm != null) {
        recommendationForm.onsubmit = recommendMovie;
    }





}



window.onload = init;
