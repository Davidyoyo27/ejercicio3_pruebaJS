const carta = "bici coche balón _playstation bici coche peluche";

// usamos el metodo split() para separar el string y convertirlo en un array/lista
let lista = carta.split(" ");
console.log(lista);

// usamos filter para eliminar el valor tachado de la lista
let filtroLista = lista.filter((e) => {
  // con includes vemos si en la lista existe un elemento con el '_'
  let eliminar = e.includes("_");
  // preguntamos si la variable eliminar con el includes esta contenida en el array
  // y de ser asi, retorne la lista elminando la coincidencia
  if (eliminar) return false;
  return e;
});

console.log(filtroLista);

// creamos el objeto donde se almacenara la key cuando se recorra la lista
const counts = {};

filtroLista.forEach((element) => {
    // forma con operador ternario
    // counts[element] = counts[element] ? (counts[element]+1) : 1;

    // al recorrer la lista, si existe un elemento
    if(counts[element]){
        // en caso de existir el valor y haber encontrado el mismo en la lista, le agrega
        // al valor ya existente un +1
        counts[element] = (counts[element]+1)
    }else{
        // lo crea y le asigna al objeto el nombre del valor de la lista como su key(clave)
        // en este caso en el primer recorrido seria bici: , y le asigna el primer valor 1,
        // correspondiente a la primera vez que encuentra ese valor dentro de la lista/array
        counts[element] = 1
    }
});

console.log(counts);

// metodo reduce
// console.log(filtroLista)

// const c = filtroLista.reduce((acc, value) => ({
//    ...acc,
//    [value]: (acc[value] || 0) + 1
// }), {});

// console.log(c);

// como lo pedia la pagina
export default function listGifts(letter) {
  // ¡Tú puedes!
  const cartaFinal = {};
  let lista = letter.split(" ");

  // usamos filter para eliminar el valor tachado de la lista
  let filtroLista = lista.filter((e) => {
    // con includes vemos si en la lista existe un elemento con el '_'
    let eliminar = e.includes("_");
    // preguntamos si la variable eliminar con el includes esta contenida en el array
    // y de ser asi, retorne la lista elminando la coincidencia
    if (eliminar) return false;
    return e;
  });

  filtroLista.forEach((element) => {
    // al recorrer la lista, si existe un elemento
    if (cartaFinal[element]) {
      // en caso de existir el valor y haber encontrado el mismo en la lista, le agrega
      // al valor ya existente un +1
      cartaFinal[element] = cartaFinal[element] + 1;
    } else {
      // lo crea y le asigna al objeto el nombre del valor de la lista como su key(clave)
      // en este caso en el primer recorrido seria bici: , y le asigna el primer valor 1,
      // correspondiente a la primera vez que encuentra ese valor dentro de la lista/array
      cartaFinal[element] = 1;
    }
  });
  return cartaFinal;
}

const regalos = listGifts("bici coche balón _playstation bici coche peluche");

console.log(regalos);
