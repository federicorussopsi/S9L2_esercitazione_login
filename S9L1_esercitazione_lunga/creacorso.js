$(() => {
        let utente = localStorage.getItem('utente')
        $('#createdBy').html(`<h2>Corso creato da ${utente}`);

    $('#creaCorsobtn').on('click', function () {

        let nomeCorso = $('#nomeCorso').val();
        let durataCorso = $('#durataCorso').val();
        let materie = $('#materie option:selected').val();

        if ($('#nomeCorso').val() == '') {
            alert('Inserisci il nome del corso!');
        } else if ($('#durataCorso').val() == '') {
            alert('Inserisci una durata!');
        } else if ($('#materie option:selected').val() == '') {
            alert('Inserisci una materia!');
        } else {
        $('#container2').html(`<h3>Hai creato un corso di ${nomeCorso} della durata di ${durataCorso} mesi in cui verrà trattata la materia ${materie}</h3>`);}
    });

    $('#logout').on('click', function () {
        localStorage.clear();
        location.href = 'logincorsi.html';
    });

});