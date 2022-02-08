$(() => {
        let utente = localStorage.getItem('utente')
        $('#createdBy').html(`<h2>Corso creato da ${utente}`);

    $('#creaCorsobtn').on('click', function () {

        let nomeCorso = $('#nomeCorso').val();
        let durataCorso = $('#durataCorso').val();
        let materie = $('#materie option:selected').val();
        $('#container2').html(`<h3>Hai creato un corso di ${nomeCorso} della durata di ${durataCorso} mesi in cui verrà trattata la materia ${materie}</h3>`);
    });

    $('#logout').on('click', function () {
        localStorage.clear();
        location.href = 'logincorsi.html';
    });

});