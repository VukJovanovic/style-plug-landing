$(document).ready(function () {
    var $form = $('#mc-embedded-subscribe-form')
    if ($form.length > 0) {
        $('form input[type="submit"]').bind('click', function (event) {
            if (event) event.preventDefault()
            register($form)
        })
    }
})

function register($form) {
    $('#mc-embedded-subscribe').val('Sending...');
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache: false,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
        success: function (data) {
            $('#mc-embedded-subscribe').val('subscribe')
            if (data.result === 'success') {
                // Yeahhhh Success
                console.log(data.msg)
                $('#mce-EMAIL').css('borderColor', '#ffffff')
                $('#subscribe-result').css('color', '#fff')
                $('#subscribe-result').css('margin-top', '10px')
                $('#subscribe-result').html('<p>Thank you for subscribing.</p>')
                $('#mc-embedded-subscribe').val('GET PLUGGED IN');
            } else {
                // Something went wrong, do something to notify the user.
                console.log(data.msg)
                // $('#mce-EMAIL').css('borderColor', '#ff8282')
                $('#subscribe-result').css('color', '#ff8282')
                $('#mc-embedded-subscribe').val('GET PLUGGED IN');
                $('#subscribe-result').html('<p>You are already subscribed!</p>')
            }
        }
    })
};