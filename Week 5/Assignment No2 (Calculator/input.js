import inquirer from "inquirer";
export async function input() {
    const values = await inquirer.prompt([{
            name: "v",
            type: "number",
            message: "Type the 1st Number",
        }]);
    let value1 = (values.v);
    return value1;
}
export async function input2() {
    const value = await inquirer.prompt([{
            name: "v2",
            type: "number",
            message: "Type the 2nd value",
        }]);
    let value2 = (value.v2);
    return value2;
}
