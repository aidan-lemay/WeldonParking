/*
Sunday: Odd all day
Monday: Odd until 6pm, then Even
Tuesday: Even until 6pm, then Odd
Wednesday: Odd until 6pm, then Even
Thursday: Even until 6pm, then Odd
Friday: Odd until 6pm, then Even
Saturday: Even until 6pm, then Odd
*/

/*
now.getDay();
0 = Sunday
1 = Monday
2 = Tuesday
3 = Wednesday
4 = Thursday
5 = Friday
6 = Saturday

now.getHours();
0 - 23
*/

const now = new Date();
const day = now.getDay();
const hour = now.getHours();

function getSide() {
    // If Sunday, return Odd
    if (day == 0) {
        return "Odd";
    }

    // If Monday
    else if (day == 1) {
        // Before 1800, return Odd
        if (hour < 18) {
            return "Odd";
        }
        // After 1800, return Even
        else if (hour >= 18) {
            return "Even"
        }
    }

    // If Tuesday
    else if (day == 2) {
        // Before 1800, return Even
        if (hour < 18) {
            return "Even";
        }
        // After 1800, return Even
        else if (hour >= 18) {
            return "Odd"
        }
    }

    // If Wednesday
    else if (day == 3) {
        // Before 1800, return Odd
        if (hour < 18) {
            return "Odd";
        }
        // After 1800, return Even
        else if (hour >= 18) {
            return "Even"
        }
    }

    // If Thursday
    else if (day == 4) {
        // Before 1800, return Even
        if (hour < 18) {
            return "Even";
        }
        // After 1800, return Even
        else if (hour >= 18) {
            return "Odd"
        }
    }

    // If Friday
    else if (day == 5) {
        // Before 1800, return Odd
        if (hour < 18) {
            return "Odd";
        }
        // After 1800, return Even
        else if (hour >= 18) {
            return "Even"
        }
    }

    // If Saturday
    else if (day == 6) {
        // Before 1800, return Even
        if (hour < 18) {
            return "Even";
        }
        // After 1800, return Even
        else if (hour >= 18) {
            return "Odd"
        }
    }
}

function nextSwap() {
    // If Sunday
    if (day == 0) {
        return "Monday, 06:00 PM to Even Side";
    }

    // If Monday
    else if (day == 1) {
        // Before 1800
        if (hour < 18) {
            return "Monday, 06:00 PM to Even Side";
        }
        // After 1800
        else if (hour >= 18) {
            return "Tuesday, 06:00 PM to Odd Side"
        }
    }

    // If Tuesday
    else if (day == 2) {
        // Before 1800
        if (hour < 18) {
            return "Tuesday, 06:00 PM to Odd Side";
        }
        // After 1800
        else if (hour >= 18) {
            return "Wednesday, 06:00 PM to Even Side"
        }
    }

    // If Wednesday
    else if (day == 3) {
        // Before 1800
        if (hour < 18) {
            return "Wednesday, 06:00 PM to Even Side";
        }
        // After 1800
        else if (hour >= 18) {
            return "Thursday, 06:00 PM to Odd Side"
        }
    }

    // If Thursday
    else if (day == 4) {
        // Before 1800
        if (hour < 18) {
            return "Thursday, 06:00 PM to Odd Side";
        }
        // After 1800
        else if (hour >= 18) {
            return "Friday, 06:00 PM to Even Side"
        }
    }

    // If Friday
    else if (day == 5) {
        // Before 1800
        if (hour < 18) {
            return "Friday, 06:00 PM to Even Side";
        }
        // After 1800
        else if (hour >= 18) {
            return "Saturday, 06:00 PM to Odd Side"
        }
    }

    // If Saturday
    else if (day == 6) {
        // Before 1800
        if (hour < 18) {
            return "Saturday, 06:00 PM to Odd Side";
        }
        // After 1800
        else if (hour >= 18) {
            return "Monday, 06:00 PM to Even Side"
        }
    }
}

function getFormattedDateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    const day = now.getDate();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = String(hours).padStart(2, '0');

    return `${dayOfWeek}, ${month} ${day} - ${formattedHours}:${minutes} ${ampm}`;
}

function setHTML() {
    const now = document.getElementById("now");
    const side = document.getElementById("side");
    const nextswap = document.getElementById("nextswap");

    now.innerHTML = "<span style='text-decoration: underline;'>The Time Is:</span> " + getFormattedDateTime();
    side.innerHTML = "<span style='text-decoration: underline;'>Current Parking:</span> " + getSide() + " Side";
    nextswap.innerHTML = "<span style='text-decoration: underline;'>The Next Parking Swap Will Be:</span> " + nextSwap();
}

// console.log(getSide())
// console.log(nextSwap())