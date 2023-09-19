function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
// Crea una pizza con: "estilo Chicago", "tradicional", ["mozzarella"] y ["pepperoni", "salchicha"]
let pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);
// Crea una pizza con: "lanzada a mano" , "marinara" , ["mozzarella", "feta"] y ["champiñones", "aceitunas", "cebollas"]
let pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

function valorRandom(arr) {
    return Math.floor(Math.random() * arr.length);
}

function quesoRandom(arr) {
    let queso1 = valorRandom(arr);
    let queso2 = valorRandom(arr);
    let quesos = [];
    quesos.push(arr[queso1]);
    quesos.push(arr[queso2]);
    return quesos;
}

let quesos = [
    "parmesano",
    "mozzarella",
    "cheddar",
    "queso azul"
];
let pizza3 = pizzaOven("delgada", "roja", quesoRandom(quesos), ["aceitunas", "peperoni", "jamon"]);
console.log(pizza3);

let pizza4 = pizzaOven("queso", "ketchup", quesoRandom(quesos), ["palmitos", "rucula", "salame", "vianesas"]);
console.log(pizza4);



