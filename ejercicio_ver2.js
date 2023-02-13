// ejemplo en un archivo diferente para entender mejor como funciona una funcion
export default function listGifts(letter) {
  // ¡Tú puedes!
  const cartaFinal = {};
  let lista = letter.split(" ");

  let filtroLista = lista.filter((e) => {
    let eliminar = e.includes("_");
    if (eliminar) return false;
    return e;
  });

  filtroLista.forEach((element) => {
    if (cartaFinal[element]) {
      cartaFinal[element] = cartaFinal[element] + 1;
    } else {
      cartaFinal[element] = 1;
    }
  });
  return cartaFinal;
}

const regalos = listGifts("bici coche balón _playstation bici coche peluche");

console.log(regalos);
