// call back is a concept in which a function is pass in an arugument of another function
// function calculator (a,b,operation){
//  return operation(a,b)
// }
// let addresult=(num1,num2)=> num1+num2
// let result =calculator(5,6,addresult)
// console.log(result)
// console.log(calculator(65,6,function(x,y){
//   return x-y;
// }));
// console.log(`Task 1`)
// setTimeout(() => {
//   console.log(`Task 2`);
// }, 5000);
// console.log(`Task 3`)
// function getcheese(callback){                                      // callback = x
//   setTimeout(() => {
//     let cheese="🧀"
//     console.log(`here is  the cheese`,cheese);
// callback(cheese) 
//   }, 2000);                                                     // x(cheese)
// }
// function makedough(cheese,callback){
// setTimeout(() => {
//   let dough= "🍛"
//   console.log(`We got the`, dough)
//   callback(dough)
// },2000);
// }
// function makepizza(dough,callback){
//   setTimeout(() => {
//     let pizza= "🍕"
//     console.log(`We got the`,pizza)
//     callback(pizza)
//   }, 2000);
// }
// // cheese -> dough-> pizza
// getcheese(function cheese (x){
//   makedough(x,function y(dough){
//     makepizza(dough,function z(pizza){
//     })
//   }) 
//   }
// )
// const ticket = new Promise(function(resolve, reject) {
//   let boarding: boolean = true; // Make sure boarding is explicitly typed as boolean
//   if (boarding === true) { // Use strict comparison (===)
//       reject(`You have not entered the flight`);
//   } else {
//       resolve(`You have entered the flight`);
//   }
// });
// ticket.then((data)=>{
//   console.log(`Wohoo`,data);
// }).catch((data)=>{console.log(`Alas`,data);
// }).finally(()=>{console.log(`I will always be executed`);
// })
// function getcheese (callback){
// setTimeout(() => {
//   let cheese = "🧀"
//   console.log(`We found the`, cheese);
//   callback(cheese) 
// }, 2000);
// }
// function getdough (cheese,callback)
// {
// setTimeout(()=>{
// let dough ="🍛"
// console.log(`The`,dough, `is ready`);
// callback(dough)
// },2000
// )
// }
// function makepizza(dough,callback){
//   setTimeout(()=>{
// let pizza =" 🍕"
// console.log(`WE have made the `, pizza)
// callback(pizza);
// },2000);
// }
// getcheese(function(cheese){
//   getdough(cheese,function(dough){
// makepizza(dough,function(Pizza){
// })
//   })
//   }
// )
function getcheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cheese = "🧀";
            //resolve(cheese)
            reject(`bad cheese `);
        }, 3000);
    });
}
function makedough(cheese) {
    return new Promise((resolve, reject) => setTimeout(() => {
        let dough = "🍛";
        resolve(dough);
    }, 2000));
}
function makepizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let pizza = "🍕";
            resolve(pizza);
        }, 3000);
    });
}
// getcheese()
// .then((chesse)=>{
//   console.log(`We got the`, chesse);
//   return makedough(chesse)
// }).then((dough)=>{
// console.log(`Dough is ready`,dough)
// return makepizza(dough)
// }).then((pizza)=>{
// console.log(`the`,pizza,`is ready`)
// }).catch((data)=>{
//   console.log(`Alas Pizza wasnt made due to `, data );
// })
async function makingofpizza() {
    try {
        let cheese = await getcheese();
        console.log(`we got the cheese`, cheese);
        let dough = await makedough(cheese);
        console.log(`We got the dough`, dough);
        let readypizza = await makepizza(dough);
        console.log(`the pizza is ready`, readypizza);
    }
    catch (Err) {
        console.log(`Alas pizza wasnt ready due to `, Err);
    }
}
makingofpizza();
export {};
