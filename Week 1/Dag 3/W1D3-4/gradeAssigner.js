for (assignGrade = 60; assignGrade <= 100; assignGrade++) {
    if (assignGrade >= 90) {
        console.log("For " + assignGrade + " you get an A. Amazing!");
    } else if (assignGrade >= 80 && assignGrade < 90) {
        console.log("For " + assignGrade + " you get a B. Well done!");
    } else if (assignGrade >= 70 && assignGrade < 80) {
        console.log("For " + assignGrade + " you get a C. You're on your way!");
    } else if (assignGrade >= 65 && assignGrade < 70) {
        console.log("For " + assignGrade + " you get a D. Almost there!");
    } else {
        console.log("For " + assignGrade + " you get an F. Better luck next time!")
    }
}