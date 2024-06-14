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
        else if (hour > 18) {
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
        else if (hour > 18) {
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
        else if (hour > 18) {
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
        else if (hour > 18) {
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
        else if (hour > 18) {
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
        else if (hour > 18) {
            return "Odd"
        }
    }
}

function nextSwap() {
    // If Sunday
    if (day == 0) {
        return "Monday, 06:00 PM";
    }

    // If Monday
    else if (day == 1) {
        // Before 1800
        if (hour < 18) {
            return "Monday, 06:00 PM";
        }
        // After 1800
        else if (hour > 18) {
            return "Tuesday, 06:00 PM"
        }
    }

    // If Tuesday
    else if (day == 2) {
        // Before 1800
        if (hour < 18) {
            return "Tuesday, 06:00 PM";
        }
        // After 1800
        else if (hour > 18) {
            return "Wednesday, 06:00 PM"
        }
    }

    // If Wednesday
    else if (day == 3) {
        // Before 1800
        if (hour < 18) {
            return "Wednesday, 06:00 PM";
        }
        // After 1800
        else if (hour > 18) {
            return "Thursday, 06:00 PM"
        }
    }

    // If Thursday
    else if (day == 4) {
        // Before 1800
        if (hour < 18) {
            return "Thursday, 06:00 PM";
        }
        // After 1800
        else if (hour > 18) {
            return "Friday, 06:00 PM"
        }
    }

    // If Friday
    else if (day == 5) {
        // Before 1800
        if (hour < 18) {
            return "Friday, 06:00 PM";
        }
        // After 1800
        else if (hour > 18) {
            return "Saturday, 06:00 PM"
        }
    }

    // If Saturday
    else if (day == 6) {
        // Before 1800
        if (hour < 18) {
            return "Saturday, 06:00 PM";
        }
        // After 1800
        else if (hour > 18) {
            return "Monday, 06:00 PM"
        }
    }
}

console.log(getSide())
console.log(nextSwap())