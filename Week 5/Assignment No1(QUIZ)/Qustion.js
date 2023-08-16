import inquirer from "inquirer";
let score = 0;
export async function q1() {
    const ans1 = await inquirer.prompt([{
            name: "qustion1",
            type: "list",
            message: "Who is Father of heihachi",
            choices: ["JINPACHI", "JIN", "KAZYA"]
        }]);
    let answer1 = (ans1.qustion1); //(object name,name)
    if (answer1 == "JINPACHI") {
        console.log("You'r ans is correct");
        score++;
    }
    else
        console.log("Wrong");
}
export async function q2() {
    const ans2 = await inquirer.prompt([{
            name: "qustion2",
            type: "list",
            message: "Who throw kazaya from hill",
            choices: ["HEIHACHI", "JUN", "JIN"]
        }]);
    let answer2 = (ans2.qustion2);
    if (answer2 == "HEIHACHI") {
        console.log("You'r ans is correct");
        score++;
    }
    else {
        console.log("Wrong");
    }
}
export async function q3() {
    const ans3 = await inquirer.prompt([{
            name: "qustion3",
            type: "list",
            message: "Who killed azazal",
            choices: ["ZAFINA", "LARS", "ALIZA"]
        }]);
    let answer3 = (ans3.qustion3);
    if (answer3 == "ZAFINA") {
        console.log("You'r ans is correct");
        score++;
    }
    else {
        console.log("Wrong");
    }
}
export async function q4() {
    const ans4 = await inquirer.prompt([{
            name: "qustion4",
            type: "list",
            message: "Who has a pet tiger ",
            choices: ["KAZUMI", "XIOYU", "NINA"]
        }]);
    let answer4 = (ans4.qustion4);
    if (answer4 == "KAZUMI") {
        console.log("You'r ans is correct");
        score++;
    }
    else {
        console.log("WRONG");
    }
}
export async function q5() {
    const ans5 = await inquirer.prompt([{
            name: "Qustion5",
            type: "list",
            message: "Which of the fowllowing is a ninja",
            choices: ["KUNIMITSU", "MIGUEL", "MARDUK"]
        }]);
    let answer5 = (ans5.Qustion5);
    if (answer5 == "KUNIMITSU") {
        console.log("You'r ans is correct");
        score++;
    }
    else {
        console.log("Wrong");
    }
    return score;
}
