/* 
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/
/* 
A tener en cuenta:
Siempre habrá un paso de diferencia o ninguno.
La modificación puede ocurrir en cualquier lugar de la cadena.
La secuencia original puede estar vacía
 */

function findNaughtyStep(original, modified) {
    // Code here
    if (original === modified) {
        return '';
    } else {
        let originalArray = original.split('');
        let modifiedArray = modified.split('');

        for (let i = 0; i < originalArray.length; i++) {
            let letter = originalArray[i];
            let index = modifiedArray.indexOf(letter);

            if (index === -1) {
                return letter;
            } else {
                modifiedArray.splice(index, 1);
            }
        }

        return modifiedArray[0];
    }
}

const original = 'abcd'
const modified = 'abcde'
const rs1 = findNaughtyStep(original, modified) // 'e'
console.log(rs1);

const original1 = 'stepfor'
const modified1 = 'stepor'
const rs2 = findNaughtyStep(original1, modified1) // 'f'
console.log(rs2);

const original2 = 'abcde'
const modified2 = 'abcde'
const rs3 = findNaughtyStep(original2, modified2) // ''
console.log(rs3);