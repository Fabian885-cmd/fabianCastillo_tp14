let electrodomesticos = ["heladera", "microondas", "lavadora", "aspiradora", "licuadora", "TVled"]

console.log("producto en posicion 1:", electrodomesticos[0]);
console.log("producto en posicion 2:", electrodomesticos[1]);
console.log("producto en posicion 3:", electrodomesticos[2]);

let primerProducto = electrodomesticos.shift();
electrodomesticos.push(primerProducto);
console.log("Array después de mover el primer elemento al final:", electrodomesticos);

console.log("cantidad de elementos dentro del array;", electrodomesticos.length)

electrodomesticos.push("horno", "cocina");
console.log("egregar dos electrodomesticos", electrodomesticos);

let buscarProducto = "televisor";
if(electrodomesticos.includes(buscarProducto)){
    console.log("producto encontrado");
}
else{
    console.log("el producto buscado no existe");
}

let productString = electrodomesticos.join(" ");
console.log("cadena de texto", productString);
console.log("cantidad de caracteres:", productString.length);

let modProductString = productString.replace("licuadora", "batidora");
console.log("Cadena de texto después de cambiar un producto:", modProductString);


let nuevoArray = modProductString.split(" ");
console.log("Nuevo array generado:", nuevoArray);


