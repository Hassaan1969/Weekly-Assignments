import chalk from "chalk";
async function result(b) {
    if (b == 5) {
        console.log(chalk.green.bold("EXCELLENT"));
    }
    else if (b == 4) {
        console.log(chalk.yellow.bold("VERY GOOD"));
    }
    else if (b == 3) {
        console.log(chalk.blue.bold("GOOD"));
    }
    else if (b == 2) {
        console.log(chalk.gray.bold("NOT BAD"));
    }
    else if (b == 1) {
        console.log(chalk.red.bold.italic("Play more tekken"));
    }
    else {
        console.log("Take some help");
    }
}
export default result;
