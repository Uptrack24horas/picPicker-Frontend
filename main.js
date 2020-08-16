$(function () {

    $('#add-images').on('click', function () {
        var input = {

        };

        $.ajax({
            type: 'POST',
            url: '/api/orders/',
            data: order,
            success: function () {

            },
            error: function () {
                alert("Error Uploading :(");
            }
        });
    });

});