var person = {
    name: "Alexander",
    age: 47
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);

var evaluations = [7, 10, 9];
console.log(evaluations); // uitkomst [7, 10, 9]

var mijnKleur = [];
var mijnKleur = ['groen', 'blauw', 'rood'];
console.log(mijnKleur);
console.log(mijnKleur.length);
console.log(mijnKleur[0]);
mijnKleur.push("geel");
console.log(mijnKleur);
mijnKleur.push(5);
mijnKleur.push({greeting:"Hi ik ben een object"});
console.log(mijnKleur[mijnKleur.length -1]);



// mijnKleur.push('groen');
// mijnKleur.push("blauw");
// mijnKleur.push("rood");




