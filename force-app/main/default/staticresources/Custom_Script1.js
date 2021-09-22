$(document).ready(function() {

    $('#script_1').html('hello world updated');
    alert($('#script_1').html());
});



$(window).load(function() {
    alert('loaded fully');
    $('#script_1').html('hello world updated');
    alert($('#script_1').html()); 
});