var downloadURL = "";
$(document).ready(function () {
    $.ajax({
        type: 'POST',
        url: 'https://www.chargereseller.com/webservices/downloadApplication/android',
        data: {"WebserviceId":webserviceId},
    async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        crossDomain: true,
        success: function(data) {
        if (data.result.Status == "Success") {
            $('#logo-container span').text(data.result.WebserviceName.substr(0, 20));
            $('#logo-container img.application-logo').attr('src', data.result.LogoPath);
            downloadURL = data.result.DownloadURL;
            $('div.qrcode').qrcode({
                "size": 90,
                "color": "#3a3",
                "text": downloadURL
            });
        } else {
            $('.application-deactive').text(data.result.ErrorMessage).show();
            $('.submit, .qr').hide();
        }
        $('.cover').fadeOut();
        $('.connecting').fadeOut();
    },
    error: function(e) {
        dialogue("در حال حاضر امکان برقرار ارتباط با بانک وجود ندارد. <br>لطفاً بعداً مراجعه نمایید.", "خطا");
    }
    });
});
$('div.submit input').click(function(e) {
    window.location.assign(downloadURL);
});