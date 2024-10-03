class Kruk {
    constructor(ingevoerdeKleur, ingevoerdeZithoogte) {
        this.kleur = ingevoerdeKleur;
        this.zithoogte = ingevoerdeZithoogte;
    }

    echoKleur() {
        return `De kruk is: ${this.kleur}`;
    }

    echoZithoogte() {
        return `De zithoogte is: ${this.zithoogte}`;
    }

    verstelZithoogte(nieuweZithoogte) {
        this.zithoogte = nieuweZithoogte;
        return `De nieuwe zithoogte is: ${this.zithoogte}`;
    }

    veranderKleur(nieuweKleur) {
        this.kleur = nieuweKleur;
        return `De nieuwe kleur is: ${this.kleur}`;
    }
}

export default Kruk;
