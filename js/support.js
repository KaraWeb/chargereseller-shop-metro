$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: "https://chr724.ir/services/v3/EasyCharge/initializeDataCategorizedFormat",
        data: "{}",
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        crossDomain: true,
        success: function (data) {
            $('.support-number').html(data.support.phone || '');
            $('.support-mail').html(data.support.email || '');
        }
    });
});