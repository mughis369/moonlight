function subscribe_maillist(){
    formData = {"email":$('et_pb_contact_email_0').val()}
    console.log("submitting: ", formData)

    $.ajax({
        type: 'POST',
        url:"https://thawing-oasis-49659.herokuapp.com/maillist",
        crossDomain: true,
        data: formData,
        dataType: 'json',
        success: function(responseData) {
            alert('Maillist Subscribed')
        },
        error: function (responseData) {
            alert("POST Failed!")
        }
    });
}
