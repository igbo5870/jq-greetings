var objet = {};

//avec le button
$('#send').click(function(){
    var last_name = $('#last_name').val();
    var first_name = $('#first_name').val();

    objet.last_name = last_name;
    objet.city = city;
    objet.first_name = first_name;
    $('#username').html(objet.last_name + ' ' + objet.first_name + ' ' + objet.city);
});


// sans le button
$('input').change(function(){
    objet.last_name = $('#last_name').val();
    objet.city = $('#city').val();
    objet.first_name = $('#first_name').val();
    $('#username').html(objet.last_name + ' ' + objet.first_name + ' ' + objet.city);
});