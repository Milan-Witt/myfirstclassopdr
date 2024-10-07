import Kruk from './kruk.js';

const mijnKruk = new Kruk('Blauw', 50);

function veranderKruk() {
    const nieuweKleur = document.getElementById('kleur').value;
    const nieuweZithoogte = document.getElementById('zithoogte').value;

    if (nieuweKleur) {
        mijnKruk.veranderKleur(nieuweKleur);
        document.getElementById('resultaatKleur').innerText = mijnKruk.echoKleur();
    }

    if (nieuweZithoogte) {
        mijnKruk.verstelZithoogte(parseInt(nieuweZithoogte));
        document.getElementById('resultaatHoogte').innerText = mijnKruk.echoZithoogte();
    }
}
