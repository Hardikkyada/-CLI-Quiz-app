const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const data = require("./data")
var i = 0;
var score = 0;
var correctans = "";
var username = "";



var que = () => {
    if (i < data.length) {
        console.log("--------------------------------------------------------------------------------------");
        console.log("\nQ." + (i + 1) + "." + data[i].question);
        console.log("A : " + data[i].option1);
        console.log("B : " + data[i].option2);
        console.log("C : " + data[i].option3);
        console.log("D : " + data[i].option4);
        correctans = data[i].ans;

        if (correctans == data[i].option1) {
            correctans = "A";
        }
        else if (correctans == data[i].option2) {
            correctans = "B";
        }
        else if (correctans == data[i].option3) {
            correctans = "C";
        }
        else if (correctans == data[i].option4) {
            correctans = "D";
        }

    }
};


var inputans = () => {
    if (i == data.length) {
        console.log("\n!!!!!!!----------!!!!!!!!----------!!!!!!!");
        console.log("Game Is Over " + username + " Your Final Score :- ", score);
        console.log("!!!!!!!----------!!!!!!!!----------!!!!!!!");
        rl.close();
        return;
    }
    rl.question("\nEnter Your Ans in(A/B/C/D):- ", (q) => {
        q = q.toUpperCase();
        if (q == "A" || q == "B" || q == "C" || q == "D") {
            if (q === correctans) {
                score += 5;
                //console.log("\nExplanation :- " + data[i].exp);
                console.log("\nScore is :- " + score);

            } else {
                console.log("\nWrong Answer Try Again..!!!");
                score -= 2;
                console.log("\nCorrect Answer Is :- " + data[i].ans);
                //console.log("\nExplanation :- " + data[i].exp);
                console.log("Score is :- " + score);
            }
            i++;
            repeat();
        } else {
            console.log("Enter Only A - b - c - d");
            console.log("Enter Again");
            inputans();
        }
    });
};

var instruction = () => {
    console.log("--------------------------------------------------------------------------------------");
    console.log("\nTotal Questions Are 15");
    console.log("\nCorrect Answer Give 5 Point");
    console.log("Wrong Answer -2 Point");
};

var name = () => {
    username = rl.question("\nEnter Your Name :- ", (ans) => {
        username = ans;
        instruction();
        repeat();
    });
};


var repeat = () => {
    que();
    inputans();
};
console.log("You are MCU/marvel Fans");
name();