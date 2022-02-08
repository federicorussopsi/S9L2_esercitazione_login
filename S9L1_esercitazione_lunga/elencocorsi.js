class Corsi {
    nome;
    argomento;
    durata;
    costo;
    constructor(_nome, _argomento, _durata, _costo) {
        this.nome = _nome;
        this.argomento = _argomento;
        this.durata = _durata;
        this.costo = _costo;
    }

    corsoFull() {
        return `Il corso ${this.nome} è relativo a ${this.argomento} e avrà
        una durata di ${this.durata}, con un costo pari a ${this.costo}`;
    }
}

$(() => {
    let utente = localStorage.getItem('utente');
    $('#welcomemsg').html('<div class="container"><h2>Benvenuto, ' + utente + '! </h2></div>');

    $('#logout').on('click', function () {
        localStorage.clear();
        location.href = 'logincorsi.html';
    })

    var corso1 = new Corsi('Cucina salentina', 'Piatti tipici pugliesi del Salento', '6 mesi', '1.200€');
    var corso2 = new Corsi('Cucina vegana', 'Piatti che rispettano la vita degli animali', '3 mesi', '1000€');
    var corso3 = new Corsi('Corso Sommelier', 'Modi alternativi di asserire Sì, è decisamente vino ma facendosi i belli al ristorante', '2 mesi', '800€');
    
    $('#corsetto1').html(corso1.corsoFull());
    $('#corsetto2').html(corso2.corsoFull());
    $('#corsetto3').html(corso3.corsoFull());

})