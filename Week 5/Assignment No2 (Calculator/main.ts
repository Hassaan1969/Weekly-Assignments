import inquirer from "inquirer";
import { add } from "./add.js";
import { divison } from "./div.js";
import { multiply } from "./multiply.js";
import { subraction } from "./sub.js";
import { input,input2 } from "./input.js";
async function name() {
    const user=await inquirer.prompt([{
name:"Name",
type:"input",
message:"What is you'r name?"
    }])
   let y=(user.Name) 
   console.log(`Welcome ${y}`);
}
async function choices() {
    const cho= await inquirer.prompt([{
        name:"ch",
        type:"list",
        message:"Which operation you need to perform",
        choices:["+","-","*","/"]
    }])
    let a=(cho.ch)
    if(a=="+")
    {
        let a1=await input();
        let a2=await input2();
        await add(a1,a2);
    }
    else if (a=="-")
    {
        let a1=await input();
        let a2=await input2();
        await subraction(a1,a2);
    }
    else if (a=="*") 
    {
        let a1=await input();
        let a2=await input2();
        await multiply(a1,a2)
    }
    else {
        let a1=await input();
        let a2=await input2();
        await divison(a1,a2)
    }
}