console.log(1);
console.log(2);
console.log(3);

// CONDITIONAL STATEMENTS

        // IF STATEMENT

if ( 2 > 1) {
    console.log( "2 is a bigger number than 1");
}

if ( 10 / 5 == 2) {
    console.log(" I am improving on Js");
}


// IF ELSE STATEMENT

const value = 10;

if ( value * 2 == 50) {
    console.log("I am a good programer")
} else {
    console.log("I am a learner")
};

// ELSE IF STATEMENT

const num = 0;

if (num > 0) {
    console.log("Number is a positive number")
} else if (num < 0) {
    console.log("Number is a negative number")
} else {
    console.log("Number is zero")
};

// ACTIVITY

const studentScore = 20;

if (studentScore >= 20 && studentScore <= 30) {
    console.log (" Excellent")
} else if (studentScore >= 15 && studentScore <= 19) {
    console.log("Good")
} else {
    console.log("Poor")
};


const grade = 80;

if ( grade > 90) {
    console.log ("A")
} else if ( grade >= 70 && grade <= 89) {
    console.log("B")
} else if (grade >= 50 && grade <= 69) {
    console.log("C")
} else {
    console.log("Fail")
};

const day = 0;

if ( day == 0) {
    console.log("Monday")
} else if ( day == 1) {
    console.log("Tuesday")
} else if ( day == 2) {
    console.log ("Wednesday")
} else if ( day == 3) {
    console.log("Thursday")
} else if ( day == 4) {
    console.log("Friday")
} else if ( day == 5) {
    console.log("Saturday")
} else if ( day == 6) {
    console.log("Sunday")
} else {
    console.log("Invalid day")
};


// SWITCH STATEMENT

let dayOfTheWeek = 6;
let dayName;

 switch (dayOfTheWeek) {
    case 1: 
    dayName = "Monday";
    break;
    case 2:
        dayName = "Tuesday";
        break;
        case 3:
            dayName = "Wednesday";
            break;
            case 4:
                dayName = "Thursday";
                break;
                case 5:
                    dayName = "Friday";
                    break;
                    case 6:
                        dayName = "Saturday";
                        break;
                        case 7:
                            dayName = "Sunday";
                            break;
                            default:
                                dayName = "Invalid day"
 };

 console.log(dayName);


//  CLASS ACTIVITY

let position = "editor";


switch (position) {
    case "admin":
        console.log("Full Access Granted");
        break;
    case "editor":
        console.log("Limited Access Granted");
        break;
    case "viewer":
        console.log("Read only Access Granted");
        break;
        default:
            console.log("No Access")
};

console.log(position);

let signal = "red";
switch (signal) {
    case "red":
        console.log("Stop");
        break;
        case "yellow":
            console.log("Get Ready");
            break;
            case "green":
                console.log("Go");
                break;
                default:
                    console.log("Invalid Signal")
};