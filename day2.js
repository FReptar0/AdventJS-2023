/* 
* En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
* Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
* Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
*/

function manufacture(gifts, materials) {
    return gifts.filter(gift => canManufacture(gift, materials));

    function canManufacture(gift, materials) {
        const giftLetters = gift.split('');
        return giftLetters.every(letter => materials.includes(letter));
    }
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

const rs = manufacture(gifts, materials) // ["tren", "oso"]
console.log(rs);
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts1 = ['juego', 'puzzle']
const materials1 = 'jlepuz'

const rs1 = manufacture(gifts1, materials1) // ["puzzle"]
console.log(rs1);

const gifts2 = ['libro', 'ps5']
const materials2 = 'psli'

const rs2 = manufacture(gifts2, materials2) // []
console.log(rs2);