/**
 * Created by TEST on 1/1/2017.
 */
$(document).ready(function() {

    populateBand();
});



function populateBand() {

    $.getJSON( '/users/studentlist', function( data ) {

        $.each(data, function(){

            // Stick our user data array into a studentlist variable in the global object

        });

        // Inject the whole content string into our existing HTML table
        $('#studentList table tbody').html(tableContent);
    });

};