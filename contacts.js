let pierwszaOsoba = {
    name: "Maxwell Wright",
    numerTel: 09127196496,
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
};
let drugaOsoba = {
    name: "Raja Villarreal",
    numerTel: 08663982895,
    email: "posuere.vulputate@send.com"
};
let trzeciaOsoba = {
    name: "Helan Richards",
    numerTel: 08001111,
    email: "libero@convalis.edu"
};

let listaKontaktow = [pierwszaOsoba,drugaOsoba,trzeciaOsoba];
console.log(pierwszaOsoba);
console.log(trzeciaOsoba);

let czwartaOsoba = {
    name: "Maisie Haley",
    numerTel: 09135313030,
    email: "risus.Quisque@urna.ca"
};

console.log()
console.log('Zadanie 2')
console.log('----------------')
console.log()

listaKontaktow.push(czwartaOsoba);
console.log("Długość tablicy: " + listaKontaktow.length);
console.log(listaKontaktow[0],listaKontaktow[3]);