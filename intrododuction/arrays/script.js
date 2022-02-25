
let students = [ 'Maxime', 'Thaer', 'Yael', 'Philippe', 'Manu', 'Fabienne', 'Geoffrey' ];

console.log(students); // console.log affiche un élément dans la console du navigateur.

let i = 0;
while (i < students.length) {
    let student = students[i];
    // console.log('coucou ' + student);
    // On va utiliser la fonction greet donc on l'appelle par son nom
    greet(student);
    i ++; // équivalent de 1 += 1 qui est l'équivalent de i = i + 1;
}

for (let i = 0; i < students.length; i ++) {
    greet(students[i]);
}

for (let student of students) {
    greet(student);
}

function greet(person) {
    let greeting = 'Hello ' + person;
    console.log(greeting);
}
