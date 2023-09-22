#!/usr/bin/env node


// Quiz using inquirer,chalk,node-banner
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import result from "./result.js";
import { q1,q2,q3,q4,q5 } from "./Qustion.js";
async function show() {   
await showBanner('QUIZ', '');
};

await show();
await q1();
await q2();
await q3();
await q4();
let points=await q5();
result(points);
