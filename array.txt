// dec the array
var names = new Array (5); // 5 is the length of the array. To write a length is not mendatory. You can keep it blank

// pushing value
names[0] = "One";
names[1] = "Two";
names[2] = "Three";
names[3] = "Four";
names[4] = "Five";

// displaying value
document.write(names[0]+"<br/>");
document.write(names[1]+"<br/>");
document.write(names[2]+"<br/>");
document.write(names[3]+"<br/>");
document.write(names[4]+"<br/>");

// print all alements
document.write(names+"<br/>");


                                            /* Some methods */

// get the lenth
document.write(names.length+"<br/>");

// push a element at the first place
names.unshift("Dhaka");

// push a element at the end
names.push("Seven");

// remove last value
names.pop();

// remove first value
names.shift();

// add or remove a perticular position by splice
names.splice(2, 0, "Extra", "extra") // 2: where you want to add value, 0: how many index you want to remove acording to first param, Last two param is New Value

// remove perticular elements
names.splice(1, 2); // from which indez to which index

// keep only first two elements
names.splice(2); // it returns a new array and does not effect anything on main array
names.splice(2, 5); // starting point and ending point

// sort array (Only string)
names.sort();

// sort array (Numbers)
var country = [45, 158, 78, 36, 44, 98, 236, 77];
country.sort(function(x, y){
    return x-y;
});

// sort array and reverse (Only string)
country.sort();
country.reverse();

/* Short way */
// dec the array // pushing value
var names = ["One", "Two", "Three", "Four", "Five", "Six"];

// join two array by concat
var names = ["One", "Two", "Three", "Four", "Five"];
var country = ["Bangladesh", "India", "Pakistan", "Nepal"];
var all = names.concat(country);

// print by using loop
var id = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i<10; i++){
    document.write(id[i]+"<br/>");
}
