$(document).ready(function () {
    var sendForm = false;
    var DefaultChargeKind = 'TopUp';
    var operatorsName = {"MTN": "ایرانسل", "MCI": "همراه اول", "RTL": "رایتل"};
    var isTarabord = false;
    var DefaultOperator = 'MTN';
    var Height = $(window).outerHeight();
    if (Height > 638) {
        Height = 638;
    }

    $('#dataChargeKind').val('')
    var sliderHeight = Height - 175;
    var paymentGatewayStatus = {'Bill': false, 'GiftCard': false, 'Antivirus': false, 'InternetPackage': false};
    $(".load").css("height", Height + "px");
    $('.sticky-menu').hide();
    $("#CellphoneInput").val($.cookie("cellphone"));
    $("#EmailInput").val($.cookie("email"));
    $(window).ready(function () {
        if ($(window).outerWidth() < 1001) {
            $(".slider").css("height", "auto");
        } else {
            $(".slider").css("height", sliderHeight + "px");
        }
        menuHeight();
    });
    $(window).resize(function () {
        if ($(window).outerWidth() < 1001) {
            $(".slider").css("height", "auto");
        } else {
            $(".slider").css("height", sliderHeight + "px");
        }
        menuHeight();
    });

    var clicks = 0;
    $(".menu div").click(function () {
        if (clicks == 0) {
            $('.sticky-menu').fadeIn();
            clicks++;
        }

        if ($(this).data("type") == $('#dataChargeKind').val()) {
            return false;
        }
        $(".invoice .antivirus li").css('margin-bottom', '15px');
        $(".giftcard-types").removeClass("active");
        $(".antivirus-types").removeClass("active");
        var menu = "." + $(this).data("type").toLowerCase();
        if (menu == ".internetpackage") {
            menu = ".internet-package";
        }
        $(".invoice div").slideUp(300, "swing");
        $(".invoice " + menu).slideDown(300, "swing");
        $('.hint-cell, .hint-mail').slideUp();
        $(".information").css('padding', '36px 0');
        $(".checkbox").prop("checked", false);
        $(".operator").removeClass("active");
        $(".menu div").removeClass("active");
        $(this).addClass("active");
        $("#dataChargeKind").val($(this).data("type"));
        DefaultChargeKind = $("#dataChargeKind").val();
        DefaultOperator = 'MTN';
        $(menu + " div:first-child div:first-child").addClass("active");
        $(".slider, .header").slideUp(700, "swing");
        $(".content").slideDown(1100, "swing");
        $(".bargain > section").slideUp();
        $(menu).slideDown();
        $("#product-type").html($(menu + " div:first-child div:first-child").data('name'));
        $("#dataType").val($(menu + " div:first-child div:first-child").data('type'));
        $(".charge-button").prop('checked', false);
        $(menu + " .charge-type-container section:first-child input").prop('checked', true);
        $(".charge-type div").hide();
        $(menu + " .charge-type-container section:first-child div").show();
        $("#dataAmount").val($(menu + " .charge-type-container section:first-child label").data('price'));
        $(".counter").val(1);
        $(".magiccharge, .nonecredit-mtn, .wimax").show();
        if ($(this).data("type") == "giftcard") {
            setProducts('giftCard', $(".giftcard-types.active").data('giftcard-type'));
        }
        if ($(this).data("type") == "antivirus") {
            setProducts('antivirus', $(".antivirus-types.active").data('antivirus-type'));
            $(".invoice .antivirus li").css('margin-bottom', '5px');
        }
        if ($(this).data("type") == "InternetPackage") {
            setInternetPackage('mtn');
            setPackage();
            return;
        }
        setAmounts();
    });

    $(".charge-type").click(function () {//choice price and change radio button color
        $(".charge-type div").hide();
        $(this).find("div").show();
        $(".counter").val(1);
        price = $(this).data('price');
        $("#dataAmount").val(price);
        $("#product-price").html(price + "&nbsp" + "تومان");
        setAmounts();
    });

    $(".operator").click(function () {// topup and pin
        $(".checkbox").prop("checked", false);
        $(".operator").removeClass("active");
        $(this).addClass("active");
        $(".counter").val(1);
        $("#product-type").html($(this).data('name'));
        $("#dataType").val($(this).data('type'));
        DefaultOperator = $(this).data('type');
        if ($("#dataType").val() == "MTN") {
            $(".magiccharge label").text("شارژ شگفت انگیز")
            $(".magiccharge, .nonecredit-mtn, .wimax").show();
        } else if ($("#dataType").val() == "RTL") {
            $(".magiccharge label").text("شارژ شور انگیز")
            $(".magiccharge").show()
            $(".nonecredit-mtn, .wimax").hide();
        } else {
            $(".magiccharge, .nonecredit-mtn, .wimax").hide();
        }
        setAmounts();
    });

    $(".increase").click(function () {
        countBoxValue = parseInt($(".counter").val());
        if (countBoxValue >= 1 && countBoxValue < 5) {
            $(".counter").val(countBoxValue + 1);
            setAmounts();
        }
    });
    $(".decrease").click(function () {
        countBoxValue = parseInt($(".counter").val());
        if (countBoxValue > 1) {
            $(".counter").val(countBoxValue - 1);
            setAmounts();
        }
    });

    $(".checkbox").change(function () { //checkbox behave radio button
        var chargeTypes = ["magiccharge", "nonecredit-mtn", "wimax"];
        var currentChargeType = $(this).attr('id');
        $.each(chargeTypes, function (index, value) {
            if (currentChargeType != value) {
                $("#" + value).prop('checked', false);
            }
        });
        if ($("#dataType").val() == "MTN" || $("#dataType").val() == "MTN!" || $("#dataType").val() == "MTN#" || $("#dataType").val() == "WiMax") {
            if (currentChargeType == "magiccharge") {
                $("#dataType").val('MTN!');
            } else if (currentChargeType == "nonecredit-mtn") {
                $("#dataType").val('MTN#');
            } else if (currentChargeType == "wimax") {
                $("#dataType").val('WiMax');
            }
            if ($(this).prop('checked') == false) {
                $("#dataType").val('MTN');
            }
        } else if ($("#dataType").val() == "RTL" || $("#dataType").val() == "RTL!") {
            if (currentChargeType == "magiccharge") {
                $("#dataType").val('RTL!');
            }
            if ($(this).prop('checked') == false) {
                $("#dataType").val('RTL');
            }
        }
        DefaultOperator = $("#dataType").val();
    });

    $(document).on("input", "input.cellphone", function () {
        this.value = this.value.replace(/[^\d\.\-]/g, '');
    });

    function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        } else {
            return false;
        }
    }

    $('.counter').keydown(function () {
        return false;
    });

    $(".internet-package option").click(function () {
        $(".package div").hide();
        var packageType = $(this).data("package-type").toLowerCase();
        $("." + packageType).slideDown();
    });
    $('section.internet-package select').change(function () {
        if ($(this).find(':selected').data('package-type') == "IN-MTN-TDLTE") {
            $(".sim-type").hide();
            $(".package").css('margin-top', '30px');
        } else {
            $(".sim-type").show();
            $(".package").css('margin-top', '0px');
        }
    });

    $(document).on('click', '.package section', function () {
        $(".package section").removeClass("active");
        $(this).addClass("active");
        $("#dataPackageId").val($(this).data("package-id"));
        $("#dataAmount").val($(this).data("price"));
        var Name = $(this).find("div").html().split(",")[0];
        $("#package-name").text(Name);
        setPackage();
    });

    $(".return").click(function () {
        $(".load").fadeOut();
    });

    $(".giftcard-types").click(function () {
        $(".giftcard-types").removeClass("active");
        $(this).addClass("active");
        $(".counter").val(1);
        setProducts('giftCard', $(this).data('giftcard-type'));
        setAmounts();
    });

    $(".antivirus-types").click(function () {
        $(".antivirus-types").removeClass("active");
        $(this).addClass("active");
        $(".counter").val(1);
        setProducts('antivirus', $(this).data('antivirus-type'));
        setAmounts();
    });

    $(document).on('click', '.list section', function () {
        $(".list section").removeClass("active");
        $(this).addClass("active");
        $("#dataProductId").val($(this).data("product-id"));
        $("#dataAmount").val($(this).data("price"));
        $("#product-type").html($(".list section.active div:first-child").html());
        setAmounts();
    });

    $(".gateway").click(function () {
        $(".gateway").removeClass("active");
        $(this).addClass("active");
        $("#dataIssuer").val($(this).data("gateway-type"));
    });

    $(".submit").click(function (e) {
        if ($("#dataChargeKind").val() == 'bill-payment' && ($('#dataBillId').val() == '' || $('#dataPaymentId') == '')) {
            $(".hint-bill").text('شناسه قبض و شناسه پرداخت را وارد نمایید', 'تذکر');
            $(".hint-bill").slideDown();
            return false;
        }
        $('.load section:first-child').fadeIn();
        $('.load section:last-child').hide();
        e.preventDefault();
        var action = '';
        if ($("#dataChargeKind").val() == 'TopUp') {
            action = 'topup';
        } else if ($("#dataChargeKind").val() == 'InternetPackage') {
            action = 'internetRecharge';
        } else if ($("#dataChargeKind").val() == 'bill-payment') {
            action = 'bill';
        } else if ($("#dataChargeKind").val() == 'PIN') {
            action = 'buyProduct';
            $('#dataProductId').val('CC-' + $('#dataType').val() + '-' + $('#dataAmount').val());
        } else {
            action = 'buyProduct';
        }

        checkForm();
        if (sendForm) {
            $('.load').fadeIn();
            $('.load section:first-child p').text('دریافت اطلاعات ...');
            $.ajax({
                type: 'POST',
                url: 'https://chr724.ir/services/v3/EasyCharge/' + action,
                data: $('form#myForm').serialize(),
                async: false,
                contentType: "application/json",
                dataType: 'jsonp',
                crossDomain: true,
                success: function (data) {
                    $('.load section:first-child p').text('انتقال به بانک ...');
                    doProccess(data);
                },
                error: function (e) {
                    isTarabord = false;
                    $('.load section:first-child').fadeOut();
                    $(".load section:last-child p").text("در حال حاضر امکان برقرار ارتباط با سرور وجود ندارد. (خطا: " + e.status + ")<br>لطفاً بعداً مراجعه نمایید.", "خطا");
                    $(".load section:last-child").removeClass('hide');
                }
            });
            if ($('input.save-information').prop('checked')) {
                $.cookie('cellphone', $('input#dataCellphone').val());
                $.cookie('email', $('input#dataEmail').val());
            }
        }
        return false;
    });

    function doProccess(data) {
        if (data.status == 'Success') {
            if ($('#dataIssuer').val() == 'Zarinpal') {
                Zarinak.setAuthority(data.paymentInfo.paymentGateway.authority);
                Zarinak.open();
                $('.connecting p').text('لطفاً صبر کنید ...');
            } else {
                window.location.replace(data.paymentInfo.url);
            }
        } else {
            isTarabord = false;
            $('.load section:first-child').hide();
            $(".load section:last-child p").text(data.errorMessage);
            $('.load section:last-child').removeClass('hide');
            $('.load section:last-child').show();
        }
    }

    function checkForm() {
        $(".hint-cell, .hint-mail").slideUp();
        $(".hint-cell p").text("شماره وارد شده صحیح نیست.");
        $("#dataCellphone").val($("input.cellphone").val());
        $("#dataEmail").val($("input.email").val());
        sendForm = false;
        var emptyCheck = true;
        var cellphoneCheck = true;
        var cellphoneFormatCheck = true;
        var emailCheck = true;
        var billCheck = true;
        var amountCheck = true;
        var cellphone = $('input.cellphone').val();
        var email = $('input.email').val();
        var divType = DefaultChargeKind;
        if (jQuery.inArray(DefaultChargeKind, ['PIN', 'TopUp', 'WiMax']) > -1) {
            divType = 'charge';
        }
        if (DefaultChargeKind == 'TopUp') {
            if (!isTarabord) {
                if (cellphone.length == 11 && !isNaN(cellphone) && jQuery.inArray(cellphone.substr(0, 3), ['090', '091', '092', '093', '099']) !== -1) {
                    if (DefaultOperator == 'MTN' || DefaultOperator == 'MTN!') {
                        if (jQuery.inArray(cellphone.substring(0, 3), ['093', '090']) == -1) {
                            cellphoneFormatCheck = false;
                        }
                    } else if (DefaultOperator == 'MCI') {
                        if (jQuery.inArray(cellphone.substring(0, 3), ['091', '099']) == -1) {
                            cellphoneFormatCheck = false;
                        }
                    } else if (DefaultOperator == 'RTL') {
                        if (jQuery.inArray(cellphone.substring(0, 4), ['0921', '0922']) == -1) {
                            cellphoneFormatCheck = false;
                        }
                    }
                } else {
                    cellphoneCheck = false;
                }
            }
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (email.length > 0 && !filter.test(email)) {
                emailCheck = false;
            }
        } else if (DefaultChargeKind == 'PIN') {
            if ((cellphone.length == 0 || jQuery.inArray(cellphone, ['093', '090', '091', '092']) != -1) && email.length == 0) {
                cellphoneCheck = false;
                emptyCheck = false;
                $(".hint-cell p").text('جهت استفاده از خدمات پشتیبانی، ایمیل یا شماره موبایل خود را وارد نمایید.');
            } else {
                var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (email.length > 0 && !filter.test(email)) {
                    emailCheck = false;
                }

                if (emailCheck && jQuery.inArray(cellphone, ['093', '090', '091', '092']) == -1) {
                    if (cellphone.length == 11 && !isNaN(cellphone)) {
                        if (jQuery.inArray(cellphone.substr(0, 3), ['090', '091', '092', '093', '099']) == -1) {
                            cellphoneCheck = false;
                        } else {
                            cellphoneCheck = true;
                        }
                    } else if (cellphone.length == 0) {
                        cellphoneCheck = true;
                    } else {
                        cellphoneCheck = false;
                    }
                }
            }
        } else if (DefaultChargeKind == 'InternetPackage') {
            var cellphoneFormats = {
                "mtn": /(0)?9([0,3]{1})\d{8}/,
                "mci": /(0)?9([1,9]{1})\d{8}/,
                "tdlte": /(0)?94\d{8}/,
                "rtl": /^([0]{1})([9]{1})([2]{1})([1,2]{1})([0-9]{7})$/
            };
            var regex = cellphoneFormats[DefaultOperator.toLowerCase()];
            var selectedType = $('.internet-package').find('section.active').data('type');
            if (selectedType.includes('ثابت')) {
                regex = cellphoneFormats['tdlte'];
            }
            if (!isTarabord) {
                if (cellphone.length == 11 && !isNaN(cellphone) && jQuery.inArray(cellphone.substr(0, 3), ['090', '091', '092', '093', '099','094']) !== -1) {
                    if (!regex.test(cellphone)) {
                        cellphoneFormatCheck = false;
                    }
                } else {
                    cellphoneCheck = false;
                }
            }
        } else {
            if (cellphone.length == 0 && email.length == 0) {
                emptyCheck = false;
                if ($('#dataChargeKind').val() == 'bill-payment') {
                    $(".hint-cell p").text('جهت استفاده از خدمات پشتیبانی، ایمیل یا شماره موبایل خود را وارد نمایید.');
                } else {
                    $(".hint-cell p").text("سریال محصولات خریداری شده تنها به شماره موبایل شما ارسال خواهد شد.");
                }
            } else {
                var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (email.length > 0 && !filter.test(email)) {
                    emailCheck = false;
                }

                if (cellphone.length > 0) {
                    if (cellphone.length == 11 && !isNaN(cellphone)) {
                        if (jQuery.inArray(cellphone.substr(0, 3), ['090', '091', '092', '093', '099']) == -1) {
                            cellphoneCheck = false;
                        } else {
                            cellphoneCheck = true;
                        }
                    } else {
                        cellphoneCheck = false;
                    }
                } else {
                    cellphoneCheck = false;
                    $(".hint-cell p").text("سریال محصولات خریداری شده تنها به شماره موبایل شما ارسال خواهد شد.");
                }
            }
        }
        if (cellphoneFormatCheck == false) {
            if (DefaultChargeKind == 'TopUp' || DefaultChargeKind == 'InternetPackage') {
                if (!isTarabord) {
                    Swal.fire({
                        title: '',
                        text: "شما " + (DefaultChargeKind === "TopUp" ? "شارژ مستقیم" : "بسته اینترنت") + " " + operatorsName[DefaultOperator] + " را انتخاب کردید اما شماره " + cellphone + " مربوط به اپراتور " + operatorsName[DefaultOperator] + " نیست!" +
                        " آیا این شماره را به " + operatorsName[DefaultOperator] + " ترابرد کردید؟\n",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'بله ترابرد کردم.',
                        cancelButtonText: 'خیر اشتباه شد.'
                    }).then((result) => {
                        if (result.value) {
                            cellphoneFormatCheck = true;
                            isTarabord = true;
                            $('#dataIsTarabord').val(true);
                            $(document).find('input[type="submit"]').trigger('click');
                        } else {
                            Swal.fire({
                                title: '',
                                text: 'شماره صحیح  اپراتور ' + operatorsName[DefaultOperator] + " را وارد کنید.",
                                type: 'warning',
                                confirmButtonText: 'باشه.',
                            });
                        }
                    });
                    return;
                }
            }
        }
        if (cellphoneCheck == false) {
            $(".hint-cell").slideDown();
            $(".information").css('padding', '15px 0');
        } else {
            $(".hint-cell").slideUp();
            $(".information").css('padding', '36px 0');
        }

        if (emailCheck == false) {
            $(".hint-mail").slideDown();
            $(".information").css('padding', '15px 0');
        } else {
            $(".hint-mail").slideUp();
            $(".information").css('padding', '36px 0');
        }
        if (emptyCheck == false) {
            $(".hint-cell").slideDown();
            $(".information").css('padding', '15px 0');
        }

        if (DefaultChargeKind == 'PIN' || DefaultChargeKind == 'TopUp') {
            if ($('input#dataAmount').val() < 500 || $('input#dataAmount').val() > 50000) {
                if ($('div.input.text.amount div.message').length <= 0) {
                    $('div.input.text.amount').prepend('<div class="message error-message">مبلغ وارد شده میبایست بزرگتر از 500 و کوچک تر از 50،000 تومان باشد.</div>');
                    $('div.input.select.amount').prepend('<div class="message error-message">مبلغ وارد شده میبایست بزرگتر از 500 و کوچک تر از 50،000 تومان باشد.</div>');
                }
                amountCheck = false;
            } else {
                $('div.input.text.amount div.message').remove();
                amountCheck = true;
            }
        }

        if (emptyCheck && cellphoneCheck && emailCheck && amountCheck && cellphoneFormatCheck) {
            sendForm = true;
        } else {
            sendForm = false;
        }
    }

    $('input#CheckBill').click(function () {
        $('.invoice .bill-payment .final-price').text("");
        $(".invoice .bill-payment .product-type").css('display', 'none');
        $(".hint-bill, .hint-pay").slideUp();
        var billIdCheck = true;
        var paymentIdCheck = true;
        var billCheck = true;
        var emptyCheck = true;
        var emailCheck = true;
        var cellphoneCheck = true;
        var cellphone = $('#CellphoneInput').val();
        var email = $('#EmailInput').val();
        var billId = $("#BillId").val();
        var paymentId = $("#PaymentId").val();

        if (billId == '' || paymentId == '') {
            emptyCheck = true;
            $(".hint-bill").text('شناسه قبض و شناسه پرداخت را وارد نمایید', 'تذکر');
            $(".hint-bill").slideDown();
            return;
        }
        if (isNaN(billId) || isNaN(paymentId)) {
            emptyCheck = false;
            $(".hint-bill").text('شناسه قبض و شناسه پرداخت فقط باید عدد باشند.', 'تذکر');
            $(".hint-bill").slideDown();
        } else {
            if (!checkBillElement(billId.replace(/^[0]+/g, ""))) {
                billIdCheck = false;
            }
            if (!checkBillElement(paymentId.substr(0, paymentId.length - 1).replace(/^[0]+/g, ""))) {
                paymentIdCheck = false;
            }
            if (!checkBillElement(billId.replace(/^[0]+/g, "") + paymentId.replace(/^[0]+/g, ""))) {
                billCheck = false;
            }
        }

        if (emptyCheck && billIdCheck && paymentIdCheck) {
            if (!billCheck) {
                $(".hint-bill").text('شناسه قبض با شناسه پرداخت همخوانی ندارد.', 'تذکر');
                $(".hint-bill").slideDown();
                return;
            }
            var billTypesPersian = ["آب", "بــرق", "گـــاز", "تلفن ثابت", "تلفن همراه", "عوارض شهرداری", "", "", "جریمه راهنمایی و رانندگی", "بیمه پاسارگاد", "سایر"];
            var billTypesEnglish = ["water", "electricity", "gas", "telephone", "cellphone", "mayoralty", "", "", "police", "pasargad", "others"];
            var billLength = billId.length;
            var paymentLength = paymentId.length;
            var billType = billId.substr((billLength - 2), 1) - 1;
            if (billType === -1) {
                billCoNumber = billId.substr((billLength - 5), 3);
                if (billCoNumber == 102) {
                    billType = 9;
                } else {
                    billType = 10;
                }
            }
            var billAmount = paymentId.substr(0, (paymentLength - 5)) * 100; // toman
            $("#dataBillId").val(billId);
            $("#dataPaymentId").val(paymentId);
            $("#dataAmount").val(billAmount)
            $('.invoice .bil-payment .product-type').text(billTypesPersian[billType]);
            $('.invoice .bill-payment .final-price').text(billAmount + " تومان");
            $(".invoice .bill-payment .product-type").removeClass().addClass('product-type').addClass(billTypesEnglish[billType]);
            $(".invoice .bill-payment .product-type").css('display', 'inline-block');
        }

        if (billIdCheck == false) {
            if ($('.buy.bill .bill-id div.message').length <= 0) {
                $(".hint-bill").text('شناسه قبض معتبر نیست.');
                $(".hint-bill").slideDown();
            }
        }

        if (paymentIdCheck == false) {
            if ($('.buy.bill .payment-id div.message').length <= 0) {
                $(".hint-pay").text('شناسه پرداخت معتبر نیست.');
                $(".hint-pay").slideDown();
            }
        }

    });

    function checkBillElement(element) {
        var checkSum = element.substr(element.length - 1, 1);
        element = element.substr(0, element.length - 1);
        element = element.split("");
        coefficient = 2;
        billLength = element.length;
        sum = 0;
        for (i = (billLength - 1); i >= 0; i--) {
            sum += coefficient * element[i];
            coefficient++;
            if (coefficient == 8) {
                coefficient = 2;
            }
        }

        calculatedCheckSum = sum % 11;
        if (calculatedCheckSum == 1 || calculatedCheckSum == 0) {
            calculatedCheckSum = 0;
        } else {
            calculatedCheckSum = 11 - calculatedCheckSum;
        }

        if (calculatedCheckSum == checkSum) {
            return true;
        }
        return false;
    }

    $.ajax({
        type: 'GET',
        url: "https://chr724.ir/services/v3/EasyCharge/initializeDataCategorizedFormat",
        data: "{}",
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        crossDomain: true,
        success: function (data) {
            products = data.products;
            paymentGateways = data.paymentGateways;
            initailize();
            $('.load').fadeOut();
        },
        error: function (e) {
            $('.load section:first-child').hide();
            $(".load section:last-child p").text("در حال حاضر امکان برقرار ارتباط با سرور وجود ندارد. (خطا: " + e.status + ")لطفاً بعداً مراجعه نمایید.", "خطا");
            $(".load section:last-child").removeClass("hide");
        }
    });

    function initailize() {
        // var gate = 0;
        // $.each(paymentGateways, function (index, value) {
        //     $(".gateway[data-gateway-type=" + value + "]").css('display', 'inline-block');
        //     gate += 1;
        // });
        //Add payment gateways to form
        paymentGateways = paymentGateways.filter(gateway => gateway == 'Zarinpal' || gateway == 'Emtiyaz');
        paymentGateways.push('Default');
        paymentGateways.reverse();
        if (paymentGateways.length > 1) {
            $.each(paymentGateways, function (index, value) {
                    $(".gateway[data-gateway-type=" + value + "]").css('display', 'inline-block');
            });
        }
        $(".gateways-container").css('margin', '40px auto')

        $.each(products, function (key, val) {
            if (jQuery.isEmptyObject(val)) {
                $('#content fieldset > .' + key).html('<p class="service-caution">در حال حاضر در این دسته محصولی برای فروش وجود ندارد.</p>');
            }
        });

        $.each(paymentGateways, function (index, value) {
            $('div.payment-gateways ul li#' + value).attr('style', 'display:inline-block;');
        });

        $('div.payment-gateways ul').attr('style', 'width:' + paymentGateways.length * 55 + 'px;');

        $.each(products.giftCard, function (key, val) {
            if (val == '' || val == null) {
                $('.giftcard-types.' + key).hide();
            } else {
                $('.giftcard-types.' + key).css("display", "inline-block");
            }
        });

        $.each(products.antivirus, function (key, val) {
            key = key.toLowerCase();
            if (val == '' || val == null) {
                $('.antivirus-types.' + key).hide();
            } else {
                $('.antivirus-types.' + key).css("display", "inline-block");
            }
        });

        $('.bgs').slideDown(300);

        var url = window.location.href
        if (url.match("#topup$")) {
            $('div[data-type="TopUp"]').trigger("click");
        } else if (url.match("#pin$")) {
            $('div[data-type="PIN"]').trigger("click");
        } else if (url.match("#internetPackage$")) {
            $('div[data-type="InternetPackage"]').trigger("click");
        } else if (url.match("#bill$")) {
            $('div[data-type="bill-payment"]').trigger("click");
        } else if (url.match("#giftcard$")) {
            $('div[data-type="giftcard"]').trigger("click");
        } else if (url.match("#antivirus$")) {
            $('div[data-type="antivirus"]').trigger("click");
        }
    }

    function setProducts(group, subGroup) {
        var options = "";
        if (subGroup != '') {
            var jsonData = products[group][subGroup];
        } else {
            var jsonData = products[group];
        }
        groupPascalCase = group.charAt(0).toUpperCase() + group.slice(1);
        $.each(jsonData, function (key, value) {
            options += "<section data-product-id=\"" + value.id + "\" data-price=\"" + value.price + "\"><div  class=\"credit-info\">" + value.name + "</div><div class=\"price-info\">" + value.price + " تومان</div><div class='clear'></div></section>";
        });
        $(".list").html(options).show();
        $("#dataProductId").val($(".list section:first-child").data("product-id"));
        $("#dataAmount").val($(".list section:first-child").data("price"));
        $(".list section:first-child").addClass("active");
        setText();
        $("#product-type").html($(".list section.active div:first-child").html());
    }

    function setText() {
        $('.list section div:first-child').css("direction", "rtl");
        $('.list section div:first-child:contains("گیفت کارت")').each(function () {
            $(this).html($(this).html().split("گیفت کارت").join(""));
        });
        $('.list section div:first-child:contains("XBox")').each(function () {
            $(this).html($(this).html().split("XBox").join("ایکس باکس "));
        });
        $('.list section div:first-child:contains("PlayStationNetwork")').each(function () {
            $(this).html($(this).html().split("PlayStationNetwork").join(""));
            $(this).prepend("پلی استیشن ");
        });
        $('.package section div:first-child:contains("اینترنت ایرانسل")').each(function () {
            $(this).html($(this).html().split("اینترنت ایرانسل").join(""));
        });
        $('.package section div:first-child:contains("اینترنت ثابت TDLTE")').each(function () {
            $(this).html($(this).html().split("اینترنت ثابت TDLTE").join("ثابت"));
        });
        $('.package section div:first-child:contains("(مشترکین دائمی)")').each(function () {
            $(this).html($(this).html().split("(مشترکین دائمی)").join(""));
        });
        $('.package section div:first-child:contains("(مشترکین اعتباری)")').each(function () {
            $(this).html($(this).html().split("(مشترکین اعتباری)").join(""));
        });
    }

    $('.internet-package').find('.operator').on('click', function () {
        DefaultOperator = $(this).data('type');
        setInternetPackage($(this).data('type').toLowerCase());
    });
    $('.internet-package .sim-type').on('click', 'section', function () {
        var radioButton = $(this).find('input:radio').prop('checked', true);
        $(radioButton).parent().parent().parent().find('section.active').removeClass('active');
        $(radioButton).parent().parent().addClass('active');
        setInternetPackage($('.internet-package').find('.operator.active').data('type').toLowerCase(), $(this).data('type'));
    });
    $('.internet-package').on('change', 'select', function () {
        setInternetPackage($('.internet-package').find('.operator.active').data('type').toLowerCase(), $('.internet-package').find('section.active').data('type'), $(this).find('option:selected').data('package-type'));
    });

    function setInternetPackage(operator, simType, category, packageId) {
        var packages = products.internetPackage[operator];
        if (simType == null) {
            //clear divs
            $('section.internet-package').find('.sim-type').html("<div class='clear'></div>");
            $.each(packages, function (key, value) {
                $('section.internet-package').find('.sim-type').append("<section data-type='" + key + "'><label class='charge-type'><input type='radio' name='radio-sim-type' class='charge-button'/><p>" + key + "</p></label></section>");
            });
            $('section.internet-package').find('.sim-type section').first().trigger('click');
        } else {
            if (category == null) {
                var internetTypes = packages[simType];
                //clear select
                $('section.internet-package').find('select').html('');
                $.each(internetTypes, function (key, value) {
                    $('section.internet-package').find('select').append("<option data-package-type='" + key + "'>" + key + "</option>");
                });
                $('section.internet-package').find('select').first().trigger('change');
            } else {
                var packagesByCategory = packages[simType][category];
                //clear package
                $('.package').html('');
                if (packagesByCategory == null) {
                    $('.package').html("بسته ای در این دسته وجود ندارد.");
                } else {
                    $.each(packagesByCategory, function (key, value) {
                        var option = "<section data-package-id=\"" + value.id + "\" data-price=\"" + value.price + "\"><div  class=\"credit-info\">" + value.name + ", " + value.price + " تومان</div></section>";
                        $('.package').append(option);
                    });
                    if (packageId == null) {
                        $('.package section').first().trigger('click');
                    } else {
                        $('.package').find('section[data-package-id="' + packageId + '"]').trigger('click');
                    }
                }
            }
        }
    }

    function setAmounts() {
        var count = $(".counter").val();
        var price = $("#dataAmount").val();
        $("input[name='data[count]']").val(count);
        if (price == '') {
            $("#product-count").html('');
            $("#product-price").html('');
            $("#final-price , .price").html('');
        } else {
            $("#product-count").html(count + "&nbsp" + "عدد");
            $("#product-price").html(price + "&nbsp" + "تومان");
            $("#final-price , .price").html((price * count) + "&nbsp" + "تومان");
            $("get-final-price").val(price)
        }
    }

    function setPackage() {
        var price = $("#dataAmount").val();
        var count = 1;
        $("#dataCount").val(1);
        if (price == '') {
            $("#package-price").html('');
        } else {
            $("#package-price").html((price * count) + "&nbsp" + "تومان");
        }
    }

    function menuHeight() {
        if ($(window).outerWidth() < 501) {
            var divHeight = ($(window).height() - $(".slider").height() - 31) / 3 + 'px';
            // console.log(divHeight);
            $('.menu div').css('height', divHeight);
        } else {
            $('.menu div').css('height', 'auto');
        }
    }

    $(".save label").on('click', function () {
        if ($(".save-information").prop('checked') == true) {
            $.cookie('cellphone', $("#dataCellphone").val());
            $.cookie('email', $("#dataEmail").val());
        }
    });
});