$(document).ready(function () {
    var $form = $('#mc-embedded-subscribe-form')
    if ($form.length > 0) {
        $('form input[type="submit"]').bind('click', function (event) {
            event.preventDefault()
            var testEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;;
            var $emailValue = $('#mce-EMAIL').val();
            if (testEmail.test($emailValue)) {
                register($form)
            }
            else {
                $('#subscribe-result').html('<p>Invalid email address</p>')
            }
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
            $('#mc-embedded-subscribe').val('GET PLUGGED IN')
            if (data.result === 'success') {
                // Yeahhhh Success
                $('#mce-EMAIL').css('borderColor', '#ffffff')
                $('#subscribe-result').css('color', '#fff')
                $('#subscribe-result').css('margin-top', '10px')
                $('#subscribe-result').html('<p>Thank you for subscribing.</p>')
            } else {
                // Something went wrong, do something to notify the user.
                const msg = data.msg.substring(0, 1);

                // $('#mce-EMAIL').css('borderColor', '#ff8282')
                $('#subscribe-result').css('color', '#ff8282')
                $('#subscribe-result').html('<p>' + msgCheck(msg) + '</p>')
            }
        }
    })
};

function msgCheck(msg) {
    if (msg === "0") {
        return "Wrong email address";
    } else {
        return "You are already subscribed";
    }
}