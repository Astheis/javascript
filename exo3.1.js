let genre1 = 'femme', genre2 = 'homme', genre3 = 'autre';


let age = prompt("quel est votre age ?");
Number(age);
let genre = prompt("quel est votre genre ? (femme, homme, autre)");

if (age < 18 && genre === genre3) {
    alert('je suis sur le spectre du genre et je suis mineur-e');
} else if (age > 18 && genre === genre3) {
    alert('je suis sur le spectre du genre et je suis majeur-e');

} else if (age < 18 && genre === genre2) {
    alert('je suis un homme et je suis mineur');
} else if (age >= 18 && genre === genre2) {
    alert('je suis un homme et je suis majeur');

} else if (age < 18 && genre === genre3) {
    alert('je suis une femme et je suis mineure');
} else if (age >= 18 && genre === genre3) {
    alert('je suis une femme et je suis majeure');
}
