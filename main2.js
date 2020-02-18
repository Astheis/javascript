
var age = prompt("quel est votre age ?");
Number(age);
var genre = prompt("quel est votre genre ? (femme, homme, autre)");



if (age < 18 && genre === 'autre') {
    alert('je suis sur le spectre du genre et je suis mineur-e');
} else if (age > 18) {
    alert('je suis sur le spectre du genre et je suis majeur-e');

} else if (age < 18 && genre === 'homme') {
    alert('je suis un homme et je suis mineur');
} else if (age >= 18) {
    alert('je suis un homme et je suis majeur');
} else if (age < 18 && genre === 'femme') {
    alert('je suis une femme et je suis mineure');
} else (age >= 18)
    alert('je suis une femme et je suis majeure');

    

    if (age < 18 && genre === 'autre') { 
        alert('je suis sur le spectre du genre et je suis mineur-e');
    } else if (age > 18) {
        alert('je suis sur le spectre du genre et je suis majeur-e');
    } else {
        
        if (age < 18 && genre === 'homme') { 
            alert('je suis un homme et je suis mineur');
        } else if (age > 18) {
            alert('je suis un homme et je suis majeur');
        } else {
                if (age < 18 && genre === 'femme') { 
                    alert('je suis une femme et je suis mineure');
                } else if (age > 18) {
                    alert('je suis une femme et je suis majeure');
                }
    } }

    

    console.log(typeof age)



    25 == '25'

    25 === Number('25')

    25 === "25" => faux


    click droit 
    format document === indentation 

    ctrl + fn + :   commenter 
    ctrl + l   selectionner plusieurs lignes
    ctrl + p   ouvrir fichier non ouvert
    ctrl + g  choisir une ligne





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
    
let myAge = 35;
let myYearOfBirth = 1984;
let addition = myAge + myYearOfBirth;
console.log(addition);


let myName = 'Amandine';
let mySurname = 'Grisot';
let nameSurname = myName + ' ' + mySurname;
console.log(nameSurname)