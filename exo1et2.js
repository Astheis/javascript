let myAge = 35;
let myYearOfBirth = 1984;
let addition = myAge + myYearOfBirth;
console.log(addition);


let myName = 'Amandine';
let mySurname = 'Grisot';
let nameSurname = myName + ' ' + mySurname;
console.log(nameSurname)

// exo 1 et 2 //

var whichAge = '35';

switch (whichAge) {
    case '18':
        alert('bravo, vous êtes majeur(e)!');
    case '42':
        alert("c'est la rép universelle");
    case '100':
        alert("incroyable, vous êtes centenaire !!");
default:
        alert('oh! vous avez ' + whichAge );
        break;
}

var whichName = prompt("quel est votre nom ?");

switch (whichName) {
    case 'Sarah':
        alert('Sarah Connor ?');
    case 'Siri':
        alert('Je n’ai pas compris votre question ?');
    case 'Amandine':
        alert('is that you ?');
    case 'Max':
        alert('You are our Js mentor');
default:
        alert("oh! c'est un joli prénom");
        break;
}