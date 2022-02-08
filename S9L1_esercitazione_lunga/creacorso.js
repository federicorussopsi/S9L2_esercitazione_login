$(() => {
        let utente = localStorage.getItem('utente')
        $('#createdBy').html(`<h2>Corso creato da ${utente}`);

    $('#creaCorsobtn').on('click', function () {

        let nomeCorso = $('#nomeCorso').val();
        let durataCorso = $('#durataCorso').val();
        let materie = $('#materie option:selected').val();
        let materie2 = $('#materie2 option:selected').val();
        let materie3 = $('#materie3 option:selected').val();

        if ($('#nomeCorso').val() == '') {
            alert('Inserisci il nome del corso!');
        } else if ($('#durataCorso').val() == '') {
            alert('Inserisci una durata!');
        } else if ($('#materie option:selected').val() == '') {
            alert('Inserisci una materia!');
        }   else if ($('#materie2 option:selected').val() == '') {
            alert('Inserisci una materia!');
        } else if ($('#materie3 option:selected').val() == '') {
            alert('Inserisci una materia!');
        } else {
        $('#container2').html(`<h3>Hai creato un corso di ${nomeCorso} della durata di ${durataCorso} mesi in cui verrà trattata la materia ${materie}, ${materie2} e ${materie3} </h3>`);
    }
    });

    $('#logout').on('click', function () {
        localStorage.clear();
        location.href = 'logincorsi.html';
    });

});