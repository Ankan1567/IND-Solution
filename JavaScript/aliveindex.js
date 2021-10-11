let age = prompt("Enter Your Age")

var birth = age;

var confirm = birth;

var entry = confirm;

localStorage.setItem('Age', entry)


if (entry > 18) {
    console.log(
        "Wellcome To Ind - Solution Privet Limited"
    )

    alert("Wellcome To Ind - Solution Private Limited");
}
else if (entry < 18) {
    console.log("You are a minor to use this website. we reffer you to take your parent's permission to access this website"
    );


    alert("You are a minor to use this website. Are you sure to proceed?"
    );

}

let todaydate = new Date();

var localdate = todaydate;

var newdate = localdate;

var session = newdate;

localStorage.setItem('Today Date', session);

document.getElementById('todaydate').innerHTML=session;

let PageLocation = document.location;

var MyLocation = PageLocation;

localStorage.setItem('My page Location', MyLocation);

function disabled() {

    alert("This Site is on Under development and it will be launching Soon"
    );

    document.getElementById('disabled').innerHTML ="Under Construction"

    console.warn("This Site is Under Development and it will be launching soon")
}


function zerofile() {

    alert("No Server File are added for this section in our Record"
    );

    console.warn("No File Found on This Section"
    );

    console.log("We Not Found Any HTML File For this Section in our Server Root Record"
    );

}


function disable() {
    
    alert("This Option is Curently Disabled"
    )

    document.getElementById('disable').innerHTML ="No Connection To Server"

    console.warn("This option is Currently Disabled")
}


function DeleteStorage() {

    localStorage.setItem('Age', '0')

    localStorage.setItem('Today Date', 'Please Reload this page')

    localStorage.setItem('My page Location','page location has Deleted' )

    let Review = prompt("Please Share your Expirience in This Site To Improve Our Site & Services")

    console.error("LocalStorage is now Updated to 0 & please Reload This page value")

}

setTimeout(DeleteStorage, 300000)