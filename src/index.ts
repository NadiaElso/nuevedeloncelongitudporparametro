//Escribir una función que reciba 2 arreglos de la misma longitud
//por parámetro y devuelva un nuevo arreglo que sea una combinación de ambos.

function combinaciondearreglos(longitud: number) {
  let arreglo1: any[] = new Array(longitud);
  for (let index = 0; index < arreglo1.length; index++) {
    //arreglo1=prompt("Ingrese valores de arreglo1");
  }
  let arreglo2: any[] = new Array(longitud);
  for (let index = 0; index < arreglo2.length; index++) {
    //arreglo2=prompt("Ingrese valores de arreglo2");
  }
  let combinacion: any[] = new Array(longitud);
  for (let index = 0; index < combinacion.length; index++) {
    combinacion[index] = arreglo1 + arreglo2;
    console.log(
      `arreglo1'es: '${arreglo1}', arreglo2'${arreglo2}''${combinacion}'`
    );
  }
  return combinaciondearreglos;
}

combinaciondearreglos(5);
