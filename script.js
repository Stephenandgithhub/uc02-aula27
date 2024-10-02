//while
//do/while
//for
//Create a list of 5 names using while
//while (true condition) do something
//self study: https://www.w3schools.com/js/js_loop_for.asp

let numberevents = 0;

while (numberevents < 5) {
  console.log("Approved!");
  numberevents = numberevents + 1;
}

//list vector or array
let list = ["rice", "spaghetti", "pepper", "tomatoes", "chicken"];
//matrix
/*let listlist = [
    ['rice', 'spaghetti', 'pepper']
    ['rice', 'spaghetti', 'pepper']
    ['rice', 'spaghetti', 'pepper']
    ['rice', 'spaghetti', 'pepper']
] */

let position = 0;
const itemlistscreen = document.createElement("ol");

while (position < 5) {
  console.log(list[position]);
  const itemlist = document.createElement("li");
  itemlist.textContent = (list[position]);
  itemlistscreen.appendChild(itemlist);
  position = position + 1;
}
document.body.appendChild(itemlistscreen);


let sex 

do {
    sex = prompt("Inform your sex (Masculine/Feminine)")
} while(!sex);

//truthy conditions -> variable != undefined,!= 1, > 0, = true; 
//false conditions -> variable === undefined, === null, === 0, === false, === "";

console.log(sex)

//for -> useful when u know quantity of list or executions
//index++ = index + 1

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

//for each 

for (let item of lists) {
    console.log(item)
}
array.forEach(element => {
    
});