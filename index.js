import Kruk from './kruk.js';

const mijnKruk = new Kruk('Blauw', 50);

console.log(mijnKruk.echoKleur());
console.log(mijnKruk.echoZithoogte());

mijnKruk.verstelZithoogte(70);
console.log(mijnKruk.echoZithoogte());

mijnKruk.veranderKleur('Groen');
console.log(mijnKruk.echoKleur());
