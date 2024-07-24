$(document).ready(function() {
    $('#add').click(function() {
        var dayOfWeek = $('#dayOfWeek').val();
        var mealType = $('#mealType').val();
        var entree = $('#new-entree').val();
        var sides = $('#new-sides').val();

        // Create a new table for the selected day if not already created
        if ($('#table-' + dayOfWeek).length == 0) {
            // Create a new table for the selected day
            var newTable = $('<table class="table table-dark table-striped">' +
                                '<tr>' +
                                    '<th>Day</th>' +
                                    '<th>Entree</th>' +
                                    '<th>Side(s)</th>' +
                                    '<th>Actions</th>' +
                                '</tr>' +
                            '</table>').attr('id', 'table-' + dayOfWeek);

            // Append the new table to the container
            $('#tables-container').append(newTable);
        }

        // Add a new row to the table for the selected day
        $('#table-' + dayOfWeek).append('<tr>' +
                                            '<td>' + dayOfWeek + '</td>' +
                                            '<td>' + entree + '</td>' +
                                            '<td>' + sides + '</td>' +
                                            '<td><button class="btn btn-danger btn-sm">Delete</button></td>' +
                                        '</tr>');

        // Clear input fields after adding the row
        $('#new-entree').val('');
        $('#new-sides').val('');
    });
});