
$(document).ready(function () {
    var $formMain = $('#mc-embedded-subscribe-form')
    var $formMainResult = $('#subscribe-result')
    var $formFriend = $('#mc-embedded-friend-form')
    var $formFriendResult = $('#subscribe-friend-result')

    $('#mc-embedded-friend-subscribe').bind('click', function () {
        ajaxMailchimpForm($formFriend, $formFriendResult)
    })
    $('#mc-embedded-subscribe').bind('click', function () {
        ajaxMailchimpForm($formMain, $formMainResult)
    })

    function ajaxMailchimpForm($form, $formResult) {
        $form.submit(function (e) {
            e.preventDefault()
            if (isValidEmail($form)) {
                submitSubscribeForm($form, $formResult)
            } else {
                $formResult.html('<p>Incorrect email address!</p>');
            }
        })
    }

    function submitSubscribeForm($form, $formResult) {
        $.ajax({
            type: $form.attr("method"),
            url: $form.attr("action"),
            data: $form.serialize(),
            cache: false,
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            error: function (error) {
                alert('Could not connect to the registration server. Please try again later.')
            },
            success: function (data) {
                if (data.result != "success") {
                    var message = data.msg || "Sorry. Unable to subscribe. Please try again.";
                    if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                        message = "You're already subscribed. Thank you.";
                    }
                    $formResult.html('<p>' + message + '</p>');
                } else {
                    $formResult.html('<p>Thank you for subscribing.</p>');
                }
            }
        });
    }

    function isValidEmail($form) {
        var email = $form.find("input[type='email']").val()
        var testEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
        if (testEmail.test(email)) {
            return true
        }
        else {
            return false
        }
    }
})

